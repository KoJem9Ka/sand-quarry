import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';


const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['space-md', 'space-sm'],
      breakpoint: ['xs'],
      color: ['quarry-brown', 'quarry-gray', 'quarry-mute', 'telegram', 'whatsapp'],
      radius: ['radius-md'],
    },
  },
});


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
