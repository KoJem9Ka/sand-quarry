'use client';

import { Children, cloneElement, type ComponentProps, createContext, isValidElement, type ReactNode, useCallback, useContext, useEffect, useId, useMemo, useReducer, useRef, useState } from 'react';
import type { RequireOneOrNone } from 'type-fest';
import { waitScrollEnd } from '@/utils/wait-scroll-end';
import { useAnimation } from '@/hooks/useAnimation';


type TabsContext = {
  tabsId: string;

  tabsCount: number;
  setTabsCount: (count: number) => void;

  currentTabIndex: number;
  isMovingRightToLeft: boolean;
  isMovingLeftToRight: boolean;
  setCurrentTabIndex: (index: number) => void;
}
const TabsContext = createContext({} as TabsContext);
const useTabsContext = () => useContext(TabsContext);


export function Tabs({
  ref: propsRef,
  onTabChange,
  scrollUpFn,
  scrollUpTarget,
  scrollUpTargetSelector,
  scrollUpTargetId,
  ...props
}: ComponentProps<'div'> & {
  scrollUpFn?: (target: HTMLElement) => void,
  onTabChange?: (index: number) => void,
} & RequireOneOrNone<{
  scrollUpTarget: HTMLElement,
  scrollUpTargetSelector: string,
  scrollUpTargetId: string,
}>) {
  const tabsId = `Tabs-${useId()}`;
  const ref = useRef<HTMLDivElement>(null);
  const [tabsCount, setTabsCount] = useState(0);
  const [[currentTabIndex, isMovingRightToLeft, isMovingLeftToRight], _setCurrentTabIndex] = useReducer((prev, next: number) => {
    const [prevIndex] = prev;
    return prevIndex === next ? prev : [next, next > prevIndex, next < prevIndex];
  }, [0, false, false]);

  const setCurrentTabIndex = useCallback(async (index: number) => {
    let next = index % tabsCount;
    if (next < 0) next += tabsCount;
    if (tabsCount === 0) next = 0; // Handle case where tabsCount might be 0 initially

    const targetBySelector = scrollUpTargetSelector ? document.querySelector<HTMLElement>(scrollUpTargetSelector) : undefined;
    const targetById = scrollUpTargetId ? document.getElementById(scrollUpTargetId) : undefined;
    const target: HTMLElement | null = targetBySelector || targetById || scrollUpTarget || ref.current;

    const offsetTop = target?.offsetTop;
    const isMustScrollUp = offsetTop && offsetTop < window.scrollY;
    if (isMustScrollUp) {
      if (scrollUpFn) scrollUpFn(target);
      else window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
      await waitScrollEnd({ debounce: 100 });
    }
    _setCurrentTabIndex(next);
    onTabChange?.(next);
  }, [tabsCount, scrollUpTargetSelector, scrollUpTargetId, scrollUpTarget, onTabChange, scrollUpFn]);

  const tabsContext: TabsContext = {
    tabsId,
    tabsCount,
    setTabsCount,
    currentTabIndex,
    isMovingRightToLeft,
    isMovingLeftToRight,
    setCurrentTabIndex,
  };

  return (
    <TabsContext value={tabsContext}>
      <div ref={instance => {
        ref.current = instance;
        if (propsRef) {
          if (typeof propsRef === 'function') propsRef(instance);
          else propsRef.current = instance;
        }
      }} {...props} />
    </TabsContext>
  );
}

export function TabList({ children: childrenRaw, ...props }: ComponentProps<'div'>) {
  const children = useMemo(() => childrenInsertIndex(childrenRaw), [childrenRaw]);

  return <div role='tablist' {...props}>{children}</div>;
}

export function Tab(propsRaw: Omit<ComponentProps<'button'>, 'onClick'>) {
  const { index, ...props } = propsRaw as typeof propsRaw & { index: number };
  const { tabsId, currentTabIndex, setCurrentTabIndex } = useTabsContext();
  const isSelected = currentTabIndex === index;

  const onClick = () => setCurrentTabIndex(index);

  return (
    <button
      // aria
      role='tab'
      id={`${tabsId}-tab-${index}`}
      aria-controls={`${tabsId}-tabpanel-${index}`}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      // other props
      onClick={onClick}
      data-selected={isSelected ? '' : undefined}
      {...props}
    />
  );
}

export function TabContents({ children: childrenRaw, ...props }: ComponentProps<'div'>) {
  const { setTabsCount } = useTabsContext();
  const contentsCount = Children.count(childrenRaw);
  useEffect(() => setTabsCount(contentsCount), [contentsCount, setTabsCount]);
  const children = useMemo(() => childrenInsertIndex(childrenRaw), [childrenRaw]);

  return <div {...props}>{children}</div>;
}

export function TabContent({ delay, ...propsRaw }: ComponentProps<'div'> & { delay?: number }) {
  const { index, ...props } = propsRaw as typeof propsRaw & { index: number };
  const { tabsId, currentTabIndex } = useTabsContext();
  const isTabSelected = currentTabIndex === index;
  const ref = useRef<HTMLDivElement>(null);
  const animationData = useAnimation({ ref, isVisible: isTabSelected, delay });

  return (
    <div
      // aria
      role='tabpanel'
      id={`${tabsId}-tabpanel-${index}`}
      aria-labelledby={`${tabsId}-tab-${index}`}
      aria-hidden={!isTabSelected}
      tabIndex={isTabSelected ? 0 : -1}
      // other props
      ref={ref}
      {...animationData}
      {...props}
    />
  );
}


export function TabsArrow({ direction, isDisableOnEdge, ...props }: Omit<ComponentProps<'button'>, 'onClick'> & {
  direction: 'left' | 'right';
  isDisableOnEdge?: boolean;
}) {
  const { currentTabIndex, setCurrentTabIndex, tabsCount } = useTabsContext();
  const targetIndex = currentTabIndex + (direction === 'left' ? -1 : 1);
  const isDisabled = (isDisableOnEdge ?? true) && (targetIndex < 0 || targetIndex >= tabsCount);
  const onClick = () => setCurrentTabIndex(targetIndex);

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-label={direction === 'left' ? 'Предыдущая вкладка' : 'Следующая вкладка'}
      {...props}
    />
  );
}


function childrenInsertIndex(children: ReactNode): ReactNode {
  return Children.map(children, (child, index) => {
    // @ts-expect-error - FIXME: How to fix props types?
    return isValidElement(child) ? cloneElement(child, { ...child.props, index }) : child;
  });
}
