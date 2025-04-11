import type { ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/utils/cn';


type BaseContainerProps = object;

type ContainerProps<Element extends ElementType = 'div'> = BaseContainerProps
  & Omit<ComponentPropsWithoutRef<Element>, keyof BaseContainerProps>
  & { as?: Element }

export function Container<Component extends ElementType = 'div'>({ className, as, ...props }: ContainerProps<Component>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={cn('w-full max-w-7xl mx-auto overflow-hidden px-5 md:px-10', className)}
      data-container
      {...props}
    />
  );
}
