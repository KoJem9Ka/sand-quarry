import { useEffect } from 'react';
import { getScrollbarWidth } from '@/utils/get-scrollbar-width';


export function usePreventScroll({ isActive, delay = 0 }: { isActive: boolean, delay?: number }) {
  useEffect(() => {
    if (!isActive) return;

    const preventDefault = (e: Event) => e.preventDefault();

    const scrollbarWidth = getScrollbarWidth();
    document.body.style = `overflow:hidden;padding-right:${scrollbarWidth}px;`;
    const header = document.querySelector('header');
    if (header) header.style = `left:0;right:${scrollbarWidth}px;width:auto`;


    const abortController = new AbortController();
    window.addEventListener('wheel', preventDefault, { passive: false, signal: abortController.signal });
    window.addEventListener('touchmove', preventDefault, { passive: false, signal: abortController.signal });
    window.addEventListener('keydown', e => {
      if (['ArrowDown', 'ArrowUp', ' ', 'Space', 'Spacebar'].includes(e.key)) e.preventDefault();
    }, { passive: false, signal: abortController.signal });

    return () => void (setTimeout(() => {
      abortController.abort();
      document.body.style = '';
      if (header) header.style = '';
    }, delay));
  }, [delay, isActive]);
}
