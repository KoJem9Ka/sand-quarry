import type { ComponentProps, ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';


type TitleProps = ComponentProps<'h2'>

export function Title({ className, ...props }: TitleProps) {
  return (
    <h2
      className={cn('mt-emirocks-md text-3xl lg:text-5xl font-bold text-center text-balance', className)}
      {...props}
    />
  );
}


type BaseTitle2Props = ComponentProps<'h3'>;

type Title2Props<Element extends ElementType> = BaseTitle2Props
  & Omit<ComponentPropsWithoutRef<Element>, keyof BaseTitle2Props>
  & { as?: Element }

export function Title2<Component extends ElementType = 'h3'>({ className, as, ...props }: Title2Props<Component>) {
  const Component = as ?? 'h3';

  return (
    <Component
      className={cn('mt-emirocks-md text-xl lg:text-3xl font-bold text-center text-balance', className)}
      {...props}
    />
  );
}


type BaseTitle3Props = ComponentProps<'h4'>;

type Title3Props<Element extends ElementType> = BaseTitle3Props
  & Omit<ComponentPropsWithoutRef<Element>, keyof BaseTitle3Props>
  & { as?: Element }

export function Title3<Component extends ElementType = 'h4'>({ className, as, ...props }: Title3Props<Component>) {
  const Component = as ?? 'h4';

  return (
    <Component
      className={cn('mt-emirocks-md text-lg lg:text-2xl font-bold text-center text-balance', className)}
      {...props}
    />
  );
}
