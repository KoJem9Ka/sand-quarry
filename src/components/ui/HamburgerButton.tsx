import { ComponentPropsWithoutRef, forwardRef, memo } from 'react';
import { cn } from '@/utils/cn';


type HamburgerButtonProps = {
  isOpen?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const HamburgerButton = memo(forwardRef<HTMLButtonElement, HamburgerButtonProps>(({ isOpen = false, className, ...props }, ref) => {
  const lineClassName = 'rounded-full h-[2px] w-full bg-current transition-all duration-500';

  return (
    <button className={cn(
      'size-8 text-inherit focus:outline-none cursor-pointer',
      !isOpen && 'space-y-2',
      className,
    )} ref={ref} {...props}>
      <div className={cn(lineClassName, isOpen ? 'rotate-45 translate-y-[2px]' : '')} />
      <div className={cn(lineClassName, isOpen ? 'opacity-0 translate-x-20' : 'opacity-100')} />
      <div className={cn(lineClassName, isOpen ? '-rotate-45 -translate-y-[2px]' : '')} />
    </button>
  );
}));

HamburgerButton.displayName = 'HamburgerButton';
