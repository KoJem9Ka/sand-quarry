/* eslint-disable @next/next/no-img-element */
import type { ComponentProps } from 'react';


export function Img({ srcSet, ...props }: ComponentProps<'img'>) {
  return <img
    decoding="async"
    loading="lazy"
    srcSet={srcSet}
    alt=""
    {...props}
  />;
}
