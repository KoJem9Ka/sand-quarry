import { throttle } from 'lodash-es';

const isScrollEndSupported = typeof window === 'undefined' ? true : 'onscrollend' in window;

export async function waitScrollEnd(args?: { debounce?: number }) {
  const debounce = args?.debounce ?? 100;

  return new Promise<void>(resolve => {
    if (isScrollEndSupported) {
      window.addEventListener('scrollend', () => resolve(), { once: true });
    } else {
      let timeout: ReturnType<typeof setTimeout>;

      const onScroll = throttle(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          window.removeEventListener('scroll', onScroll);
          resolve();
        }, debounce);
      }, debounce * 0.8);

      window.addEventListener('scroll', onScroll);
      onScroll();
    }
  });
}
