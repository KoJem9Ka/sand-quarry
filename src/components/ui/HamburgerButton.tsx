'use client';

import { ComponentPropsWithoutRef, forwardRef, useMemo, useReducer, memo, useRef } from 'react';
import { cn } from '@/utils/cn';


type HamburgerButtonProps = {
  isOpen?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export const HamburgerButton = memo(forwardRef<HTMLButtonElement, HamburgerButtonProps>(({ isOpen = false, className, ...props }, ref) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [, forceUpdate] = useReducer((x: boolean) => !x, true);
  const isOpenChangedAt = useMemo(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(forceUpdate, ANIMATION_DURATION);
    return Date.now();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const lineClassName = 'rounded-full h-[2px] w-full bg-current' + (
    Date.now() - isOpenChangedAt < ANIMATION_DURATION
      ? ' transition-all duration-500'
      : ''
  );

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

const ANIMATION_DURATION = 500;

HamburgerButton.displayName = 'HamburgerButton';
