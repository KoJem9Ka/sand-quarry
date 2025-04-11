import type { PropsWithChildren, ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';

type BaseCarouselItemProps = PropsWithChildren;

type CarouselItemProps<Element extends ElementType = 'div'> = BaseCarouselItemProps
  & Omit<ComponentPropsWithoutRef<Element>, keyof BaseCarouselItemProps>
  & { as?: Element }


export function CarouselItem({ className, ...props }: CarouselItemProps) {
  return (
    <div
      className={cn(
        'flex-[0_0_var(--slide-size)] pl-(--slide-spacing) [transform:translate3d(0,0,0)] min-w-0',
        className,
      )}
      {...props}
    />
  );
}
