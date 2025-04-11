'use client';

import { type ComponentProps, useRef } from 'react';
import { cn } from '@/utils/cn';
import { useRipple } from '@/types/useRipple';


type ButtonProps = {
  color?: keyof typeof colors;
} & ComponentProps<'button'>;


export function Button({ className, children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useRipple({ ref });

  return (
    <button
      ref={instance => {
        ref.current = instance;
        if (props.ref) {
          if (typeof props.ref === 'function') props.ref(instance);
          else props.ref.current = instance;
        }
      }}
      className={cn(
        'relative overflow-hidden',
        'py-3 px-7 rounded-full cursor-pointer flex gap-3 items-center justify-center',
        'transition duration-300 hover:brightness-90 active:brightness-80',
        colors[props.color ?? 'gray'],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

const colors = {
  'green': 'bg-emirocks-green text-emirocks-gray',
  'violet': 'bg-emirocks-violet text-white',
  'gray': 'bg-black/50 text-white',
};
