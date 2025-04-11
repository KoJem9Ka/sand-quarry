import { TabGroup as _TabGroup, type TabGroupProps, TabList as _TabList, type TabListProps, Tab as _Tab, type TabProps, TabPanels as _TabPanels, type TabPanelsProps, TabPanel as _TabPanel, type TabPanelProps } from '@headlessui/react';
import { cn } from '@/utils/cn';
import { type ElementType, Fragment } from 'react';


export function TabGroup<TTag extends ElementType>({ className, ...props }: TabGroupProps<TTag> & { className?: string }) {
  return <_TabGroup
    className={cn('w-full self-start grow', className)}
    {...props}
  />;
}

export function TabList<TTag extends ElementType>({ className, ...props }: TabListProps<TTag> & { className?: string }) {
  return <_TabList
    className={cn(
      'relative flex flex-wrap gap-3 mb-[20px] max-md:justify-center',
      'after:absolute after:-z-1 after:bg-gray-300 after:h-[1px] after:left-0 after:right-0 after:bottom-0',
      'text-lg font-bold',
      className,
    )}
    {...props}
  />;
}

export function Tab<TTag extends ElementType>({ className, ...props }: TabProps<TTag> & { className?: string }) {
  return <_Tab
    className={cn(
      'relative cursor-pointer pb-3 border-transparent outline-hidden hover:text-emirocks-violet',
      'data-selected:text-emirocks-violet',
      'after:absolute after:bottom-0 after:left-0 after:right-0 after:transition-all after:duration-300',
      'after:bg-emirocks-violet after:h-[0px] data-selected:after:h-[5px]',
      className,
    )}
    {...props}
  />;
}

export function TabPanels<TTag extends ElementType = typeof Fragment>(props: TabPanelsProps<TTag> & { className?: string }) {
  // @ts-expect-error ???
  return <_TabPanels as={Fragment} {...props} />;
}


export function TabPanel<TTag extends ElementType>({ className, ...props }: TabPanelProps<TTag> & { className?: string }) {
  return <_TabPanel className={cn(className)} {...props} />;
}
