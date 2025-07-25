import path from 'node:path';
import { fileURLToPath } from 'node:url';


export type Image = {
  src: string,
  sizes: {
    quality?: number,
    maxWidth?: number,
    maxHeight?: number,
  }[],
  distDir?: string,
  quality?: number,
}

const IMAGES: Image[] = [{
  src: 'images/bg-main.jpg'.replaceAll(/\//g, path.sep),
  sizes: [{ maxWidth: 2560 }, { maxWidth: 1920 }, { maxWidth: 1280 }, { maxWidth: 640 }],
  quality: 70,
},
  { src: path.join('images', 'articles', '1.png'), sizes: [{ maxWidth: 450 }] },
  { src: path.join('images', 'articles', '2.png'), sizes: [{ maxWidth: 450 }] },
  { src: path.join('images', 'articles', '3.png'), sizes: [{ maxWidth: 450 }] },
];

const projectRoot = fileURLToPath(new URL(path.join('..', '..'), import.meta.url));

export const CONFIG = {
  srcDir: path.join(projectRoot, 'assets-original'),
  distDir: path.join(projectRoot, 'public'),
  images: IMAGES,
  quality: 70,
  interfaceFile: path.join(projectRoot, 'src', 'backbone', 'public.ts'),
};
