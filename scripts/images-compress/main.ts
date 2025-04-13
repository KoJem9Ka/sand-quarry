import { CONFIG, type Image } from './config';
import path from 'node:path';
import sharp from 'sharp';
import * as fs from 'node:fs/promises';
import { set, merge, camelCase, get } from 'lodash-es';

import type { CompressedImageFormat } from '@/utils/img-utils';

async function compress(args: Image): Promise<object> {
  const src = path.join(CONFIG.srcDir, args.src);
  const fileSubDir = path.dirname(args.src);
  const fileName = path.basename(args.src, path.extname(args.src));

  const image = sharp(src);
  const [srcWidth, srcHeight] = await image.metadata().then(({ width, height }) => [width!, height!] as const);

  let completedSizes = 0;

  const publicInterface: object = {};

  for (const size of args.sizes) {
    const quality = size.quality ?? args.quality ?? CONFIG.quality;

    const imageResized = image.clone().resize({
      width: size.maxWidth,
      height: size.maxHeight,
      fit: 'inside',
      withoutEnlargement: true,
    });

    const { info: { width, height } } = await imageResized.toBuffer({ resolveWithObject: true });
    const fileDirAndNameWithSize = path.join(fileSubDir, `${fileName}-${width}x${height}`);

    if (width > srcWidth || height > srcHeight) {
      console.log(`Skip ${fileDirAndNameWithSize}`);
      return {};
    }

    const fileDirAndNameWithSizeJPG = `${fileDirAndNameWithSize}.jpg`;
    const fileDirAndNameWithSizeWEBP = `${fileDirAndNameWithSize}.webp`;

    await fs.mkdir(path.join(CONFIG.distDir, fileSubDir), { recursive: true });

    await Promise.all([
      imageResized.jpeg({ quality, mozjpeg: true }).toFile(path.join(CONFIG.distDir, fileDirAndNameWithSizeJPG)),
      imageResized.webp({ quality: quality - 30, effort: 6 }).toFile(path.join(CONFIG.distDir, fileDirAndNameWithSizeWEBP)),
    ]);

    [
      ['webp', '/' + fileDirAndNameWithSizeWEBP.replace(CONFIG.distDir, '').replaceAll(path.sep, '/')] as const,
      ['jpeg', '/' + fileDirAndNameWithSizeJPG.replace(CONFIG.distDir, '').replaceAll(path.sep, '/')] as const,
    ].forEach(([ext, url]) => {
      const interfacePath = [
        ...fileSubDir.split(path.sep),
        fileName.replace(/^(\d)/, 'img$1'),
        ext,
      ]
        .map(part => part.replace(/\./g, '-').replace(/^\d/, el => `_${el}`).replace(/^-+|-+$/g, ''))
        .map(camelCase).filter(Boolean).join('.');

      const srcSetItem = `${url} ${width}w`;
      const interfaceItem: CompressedImageFormat = get(publicInterface, interfacePath) || {
        src: url,
        width,
        height,
        srcSet: '',
        type: `image/${ext}`,
      };

      if (interfaceItem.width < width) {
        interfaceItem.src = url;
        interfaceItem.width = width;
        interfaceItem.height = height;
      }
      interfaceItem.srcSet += interfaceItem.srcSet.length ? `, ${srcSetItem}` : srcSetItem;

      merge(publicInterface, set({}, interfacePath, interfaceItem));
    });

    console.log(`[Completed] ${fileDirAndNameWithSize}`);
    ++completedSizes;
  }

  if (completedSizes === 0) console.warn(`[Skip]: ${src}`);

  return publicInterface;
}

async function main() {
  const interfaces = await Promise.all(CONFIG.images.map(compress));
  const publicInterface = interfaces.reduce((acc, cur) => merge(acc, cur), {});
  await fs.writeFile(
    CONFIG.interfaceFile, `
import { baseUrlDeep } from '@/utils/base-url';\n\n
export const PUBLIC = baseUrlDeep(${JSON.stringify(publicInterface, null, 2)}, 'src', 'srcSet');
`.trim()/*.replace(/(src|srcSet)":\s+(.+?),?$/gm, (_, g1, g2) => `${g1}": baseUrl(${g2}),`)*/,
  );
}

await main();
