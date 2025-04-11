import type { ComponentProps } from 'react';
import { cn } from '@/utils/cn';


export function ListDots({ className, ...props }: ComponentProps<'ul'>) {
  return <ul className={cn('list-disc pl-4 space-y-1', className)} {...props} />;
}

export function ListNumbers({ className, ...props }: ComponentProps<'ul'>) {
  return <ul className={cn('list-decimal list-inside space-y-1', className)} {...props} />;
}
