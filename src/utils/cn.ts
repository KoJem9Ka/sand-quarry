import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';


const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['emirocks-md', 'emirocks-sm'],
      breakpoint: ['xs'],
      color: ['emirocks-milk', 'emirocks-gray', 'emirocks-green', 'emirocks-violet'],
      radius: ['emirocks'],
    },
  },
});


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
