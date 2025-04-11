import { useEffect, useState } from 'react';
import type { CamelCase } from 'type-fest';
import { shallowEqual } from '@/utils/shallow-equal';
import { throttle } from 'lodash-es';


type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type BreakpointsObject = Readonly<Record<
  CamelCase<`is-${'' | 'max'}-${Breakpoints}`>,
  boolean
>>;

const initialBreakpoints: BreakpointsObject = {
  isXs: false,
  isMaxXs: false,
  isSm: false,
  isMaxSm: false,
  isMd: false,
  isMaxMd: false,
  isLg: false,
  isMaxLg: false,
  isXl: false,
  isMaxXl: false,
  is2Xl: false,
  isMax2Xl: false,
};

const BREAKPOINTS: Record<keyof BreakpointsObject, string> = {
  isXs: 'xs:hidden', isMaxXs: 'max-xs:hidden',
  isSm: 'sm:hidden', isMaxSm: 'max-sm:hidden',
  isMd: 'md:hidden', isMaxMd: 'max-md:hidden',
  isLg: 'lg:hidden', isMaxLg: 'max-lg:hidden',
  isXl: 'xl:hidden', isMaxXl: 'max-xl:hidden',
  is2Xl: '2xl:hidden', isMax2Xl: 'max-2xl:hidden',
};

function checkBreakpoint(breakpoint: keyof BreakpointsObject): boolean {
  const className = BREAKPOINTS[breakpoint];
  const dummyDiv = document.createElement('div');
  document.body.appendChild(dummyDiv);
  dummyDiv.className = className;
  const display = window.getComputedStyle(dummyDiv).display;
  document.body.removeChild(dummyDiv);
  return display === 'none';
}

function checkAllBreakpoints() {
  return Object.keys(BREAKPOINTS).reduce<BreakpointsObject>(
    (acc, key) => ({ ...acc, [key]: checkBreakpoint(key as keyof BreakpointsObject) }),
    {} as never,
  );
}

export function useBreakpoints(): BreakpointsObject {
  const [breakpoints, setBreakpoints] = useState(initialBreakpoints);

  useEffect(() => {
    let prev = breakpoints;

    const handler = throttle(() => {
      const next = checkAllBreakpoints();
      if (!shallowEqual(prev, next)) {
        prev = next;
        setBreakpoints(next);
      }
    }, 150);

    handler();

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return breakpoints;
}

export function useBreakpoint(breakpoint: keyof BreakpointsObject): boolean {
  // const initial = useMemo(() => checkBreakpoint(breakpoint), [breakpoint]);
  const [result, setResult] = useState(false);

  useEffect(() => {
    const handler = throttle(() => setResult(checkBreakpoint(breakpoint)), 150);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);

  return result;
}
