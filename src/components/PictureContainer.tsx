import type { PropsWithChildren, ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import { sourceProps, imgProps, type CompressedImage } from '@/utils/img-utils';
import { Img } from '@/components/ui/Img';


export function PictureContainer({
  src, alt,
  pictureClassName, imgClassName,
  isPictureRight,

  children,
  className,
}: PropsWithChildren & ComponentProps<'div'> & {
  src: CompressedImage, alt: string,
  pictureClassName?: string, imgClassName?: string,
  isPictureRight?: boolean,
}) {
  const childrenBeforeLast = Array.isArray(children) ? children.slice(0, -1) : null;
  const lastChild = Array.isArray(children) ? children.slice(-1) : children;

  const isPictureLeft = !isPictureRight;

  return (
    <div className={cn('grid grid-cols-1 max-lg:mt-emirocks-md', {
      'lg:grid-cols-[auto_1fr]': isPictureLeft,
      'lg:grid-cols-[1fr_auto]': isPictureRight,
    }, className)}>
      {childrenBeforeLast}
      {isPictureRight && lastChild}
      <picture className={cn('max-lg:-order-1 max-lg:w-full', {
        'lg:mr-8': isPictureLeft,
        'lg:ml-8': isPictureRight,
      }, pictureClassName)}>
        <source{...sourceProps(src.webp)} sizes="100vw" />
        <Img
          {...imgProps(src.jpeg)}
          alt={alt}
          className={cn(
            'rounded-emirocks h-[300px] w-[400px] object-cover max-lg:w-full max-lg:h-[50vw]',
            imgClassName,
          )}
        />
      </picture>
      {isPictureLeft && lastChild}
    </div>
  );
}
