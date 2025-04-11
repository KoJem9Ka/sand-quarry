'use client';

import { type ComponentProps, Fragment, useState, useEffect } from 'react';
import { cn } from '@/utils/cn';


type RunningLineProps = ComponentProps<'div'> & {
  parts: string[],
  wrapperClassName?: string,
}

export function RunningLine({ parts, className, wrapperClassName, ...props }: RunningLineProps) {
  const [repeatedParts, setRepeatedParts] = useState(parts);

  useEffect(() => {
    const symbolsCount = parts.reduce((acc, part) => acc + part.length, 0);
    const SYMBOL_WIDTH = window.innerWidth > 768 ? 19 : 15.3;
    const TARGET_MIN_SYMBOLS_BY_WINDOW_WIDTH = (window.innerWidth / SYMBOL_WIDTH) * 2;
    let repeatTimes = Math.max(2, Math.ceil(TARGET_MIN_SYMBOLS_BY_WINDOW_WIDTH / symbolsCount));
    if (repeatTimes % 2 === 1) repeatTimes += 1;
    // const TARGET_MIN_SYMBOLS_COUNT = 450;
    // const repeatTimes = Math.max(2, Math.ceil(TARGET_MIN_SYMBOLS_COUNT / symbolsCount));
    // const TARTGET_MIN_LENGTH = 20;
    // const repeatTimes = Math.max(2, Math.ceil(TARTGET_MIN_LENGTH / parts.length));
    setRepeatedParts(new Array(repeatTimes).fill(0).flatMap(() => parts));
  }, [parts]);

  return (
    <div className={cn('overflow-hidden w-full bg-emirocks-gray py-3 text-white mt-emirocks-md', className)} {...props}>
      <div className={cn('flex items-center gap-5 pr-5 animate-running-line w-max text-2xl md:text-3xl', wrapperClassName)}>
        {repeatedParts.map((part, i) => (
          <Fragment key={i}>
            <span className="size-3 bg-current rounded-full" />
            <span>{part}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
