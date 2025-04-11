import { type ComponentProps, forwardRef } from 'react';
import { cn } from '@/utils/cn';


type TableProps = ComponentProps<'table'> & {
  wrapperClassName?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(({ wrapperClassName, className, ...props }, ref) => (
  <div className={cn('overflow-hidden rounded-emirocks border-2 border-emirocks-violet [&_tr,&_td]:border-gray-300', wrapperClassName)}>
    <table
      ref={ref}
      className={cn('w-full bg-emirocks-violet', className)} {...props}
    />
  </div>
));
Table.displayName = 'Table';

export function THead({ className, ...props }: ComponentProps<'thead'>) {
  return (
    <thead className={cn('bg-emirocks-violet text-white', className)} {...props} />
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
    <th className={cn('py-2 px-4 text-lg text-balance', className)} {...props} />
  );
}

export function TD({ className, ...props }: ComponentProps<'td'>) {
  return (
    <td className={cn('py-1 px-4 not-last:border-r', className)} {...props} />
  );
}
