import { type ComponentProps, forwardRef } from 'react';
import { cn } from '@/utils/cn';


type TableProps = ComponentProps<'table'> & {
  wrapperClassName?: string;
  isNoBroder?: boolean;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(({
  isNoBroder,
  wrapperClassName,
  className, ...props
}, ref) => (
  <div className={cn(
    'overflow-hidden [&_td]:border-gray-300 [&_td]:not-last:border-r',
    isNoBroder ? undefined : 'rounded-radius-md border-2 border-quarry-brown',
    wrapperClassName,
  )}>
    <table
      ref={ref}
      className={cn('w-full bg-quarry-brown', className)} {...props}
    />
  </div>
));
Table.displayName = 'Table';

export function THead({ className, ...props }: ComponentProps<'thead'>) {
  return (
    <thead className={cn('bg-quarry-brown text-white', className)} {...props} />
  );
}

export function TBody({ className, ...props }: ComponentProps<'tbody'>) {
  return (
    <tbody className={cn('bg-white', className)} {...props} />
  );
}

export function TR({ className, ...props }: ComponentProps<'tr'>) {
  return (
    <tr className={cn('first:[&_td]:pt-2 last:[&_td]:pb-2', className)} {...props} />
  );
}

export function TH({ className, ...props }: ComponentProps<'th'>) {
  return (
    <th className={cn('py-2 px-4 text-balance', className)} {...props} />
  );
}

export function TD({ className, ...props }: ComponentProps<'td'>) {
  return (
    <td className={cn('py-1 px-4', className)} {...props} />
  );
}
