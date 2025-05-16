import { type RefObject, useCallback, useEffect, useRef } from 'react';
import { isUndefined, omitBy } from 'lodash-es';


type UseAnimationArgs = {
  ref: RefObject<HTMLElement | null>;
  isVisible: boolean;
  delay?: number;
}

export function useAnimation({ ref, isVisible, delay }: UseAnimationArgs) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const isFirstRenderRef = useRef(true);
  const isVisibleRef = useRef<boolean | undefined>(isVisible);

  const hide = useCallback(({ delay, el, isImmediate }: { el: HTMLElement, delay?: number, isImmediate?: boolean }) => {
    el.setAttribute('aria-hidden', 'true');
    if (isImmediate) {
      delete el.dataset.visible;
      el.dataset.hidden = '';
      delete el.dataset.enter;
      delete el.dataset.leave;
    } else {
      el.dataset.leave = '';
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        delete el.dataset.leave;
        delete el.dataset.visible;
        el.dataset.hidden = '';
      }, delay);
    }
  }, []);

  const show = useCallback(({ el, isImmediate }: { el: HTMLElement, isImmediate?: boolean }) => {
    el.removeAttribute('aria-hidden');
    if (isImmediate) {
      el.dataset.visible = '';
      delete el.dataset.hidden;
      delete el.dataset.enter;
      delete el.dataset.leave;
    } else {
      el.dataset.enter = '';
      el.dataset.visible = '';
      delete el.dataset.hidden;
      delete el.dataset.leave;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => delete el.dataset.enter, 50);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isImmediate = isFirstRenderRef.current || !delay;

    if (isVisible) show({ el, isImmediate });
    else hide({ el, delay, isImmediate });

    return () => {
      clearTimeout(timerRef.current);
      isVisibleRef.current = undefined;
      isFirstRenderRef.current = false;
    };
  }, [isVisible, delay, ref, show, hide]);

  return omitBy({
    'data-visible': isFirstRenderRef.current && isVisibleRef.current || undefined,
    'data-hidden': isFirstRenderRef.current && !isVisibleRef.current || undefined,
  }, isUndefined);
}
