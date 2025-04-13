'use client';

import { Tab as _Tab, TabContent as _TabContent, TabContents as _TabContents, TabList as _TabList, Tabs as _Tabs, TabsArrow as _TabsArrow } from './TabsCore';
import { type ComponentProps, useCallback, useEffect, useReducer, useRef } from 'react';
import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconArrow, iconArrowCva } from '@/components/icons/IconArrow';
import { delay } from 'lodash-es';


export function Tabs({ children, className, ...props }: ComponentProps<typeof _Tabs>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isBiggerThanScreen, setIsBiggerThanScreen] = useReducer(() => true, false);

  const onTabChange = useCallback(() => void (delay(() => {
    if (!ref.current) return;
    console.log(ref.current.clientHeight, window.innerHeight * 0.75);
    if (ref.current.clientHeight > window.innerHeight * 0.75) setIsBiggerThanScreen();
  }, 300)), []);

  useEffect(onTabChange, [onTabChange]);

  return <_Tabs
    ref={ref}
    onTabChange={onTabChange}
    className={cn('w-full flex flex-col self-start grow gap-[20px]', className)}
    {...props}
  >
    {children}
    <TabsArrows className={isBiggerThanScreen ? undefined : 'md:hidden'}/>
  </_Tabs>;
}

const tabListCva = cva([
  'flex flex-wrap max-md:justify-center',
  '*:transition *:cursor-pointer',
], {
  variants: {
    variant: {
      line: [
        'gap-3 relative',
        'after:absolute after:bg-current/15 after:h-[1px] after:left-0 after:right-0',
        '*:relative *:after:absolute *:after:z-1 *:after:transition-all *:after:left-0 *:after:right-0 *:after:h-[0px] *:data-selected:after:h-[5px]',
      ],
      boxes: [
        'gap-1',
        '*:px-3 *:py-1 *:rounded',
      ],
    },
    line: {
      atTop: ['after:top-0', '*:pt-3 *:after:top-0'],
      atBottom: ['after:bottom-0', '*:pb-3 *:after:bottom-0'],
      disabled: null,
    },
    color: {
      brown: '*:hover:text-quarry-brown',
    },
    size: {
      md: 'text-lg font-bold',
      sm: 'text-base',
      xs: 'text-sm',
    },
  },
  compoundVariants: [{
    variant: 'line', color: 'brown',
    className: '*:after:bg-quarry-brown *:data-selected:text-quarry-brown',
  }, {
    variant: 'boxes', color: 'brown',
    className: '*:hover:bg-quarry-brown/20 *:data-selected:bg-quarry-brown *:data-selected:text-white',
  }],
  defaultVariants: {
    variant: 'line',
    line: 'atBottom',
    size: 'md',
    color: 'brown',
  },
});

export function TabList({
  variant, color, line, size,
  className, ...props
}: ComponentProps<typeof _TabList> & VariantProps<typeof tabListCva>) {
  line = !variant || variant === 'line' ? line : 'disabled';
  return <_TabList className={cn(tabListCva({ variant, color, line, size }), className)} {...props} />;
}

export function Tab(props: ComponentProps<typeof _Tab>) {
  return <_Tab {...props} />;
}

export function TabContents({ className, ...props }: ComponentProps<typeof _TabContents>) {
  return <_TabContents className={cn('relative', className)} {...props} />;
}

export function TabContent({ className, ...props }: ComponentProps<'div'>) {
  return <_TabContent
    className={cn([
      'transition-all duration-300 opacity-100 z-0 translate-y-0 space-y-3',

      'data-enter:opacity-0 data-enter:-translate-y-3',

      'data-leave:absolute data-leave:top-0 data-leave:left-0 data-leave:w-full',
      'data-leave:opacity-0 data-leave:translate-y-6 data-leave:pointer-events-none',
    ], className)}
    {...props}
  />;
}

export function TabsArrows({ isDisableOnEdge, className, ...props }: Omit<ComponentProps<'div'>, 'children'> & Pick<ComponentProps<typeof _TabsArrow>, 'isDisableOnEdge'>) {

  return (
    <div className={cn('flex justify-center gap-3', className)} {...props}>
      <_TabsArrow className={iconArrowCva({ asButton: true })} direction="left" isDisableOnEdge={isDisableOnEdge}>
        <IconArrow direction="left"/>
      </_TabsArrow>
      <_TabsArrow className={iconArrowCva({ asButton: true })} direction="right" isDisableOnEdge={isDisableOnEdge}>
        <IconArrow direction="right"/>
      </_TabsArrow>
    </div>
  );
}
