import type { ComponentProps } from 'react';

export type CompressedImage = {
  webp: CompressedImageFormat,
  jpeg: CompressedImageFormat,
}

export type CompressedImageFormat = {
  src: string,
  width: number,
  height: number,
  srcSet: string,
  type: string,
}

export function imgProps(img: CompressedImageFormat) {
  return {
    src: img.src,
    srcSet: img.srcSet,
    width: img.width,
    height: img.height,
  } satisfies ComponentProps<'img'>;
}

export function sourceProps(img: CompressedImageFormat) {
  return {
    type: img.type,
    srcSet: img.srcSet,
  } satisfies ComponentProps<'source'>;
}
