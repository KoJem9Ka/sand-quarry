import { useEffect, type RefObject, useCallback } from 'react';


export function useRipple(props: {
  ref: RefObject<HTMLElement | null> | HTMLElement | null,
  blendMode?: boolean,
  stopPropagation?: boolean,
}): void {
  const getElement = useCallback(() => props.ref && 'current' in props.ref ? props.ref.current : props.ref, [props.ref]);

  const onClick = useCallback((event: MouseEvent) => {
    if (props.stopPropagation) event.stopPropagation();
    const element = getElement();
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const rippleSize = Math.max(elementRect.width, elementRect.height);
    const rippleHalfSize = rippleSize / 2;
    const rippleX = event.clientX - elementRect.left - rippleHalfSize;
    const rippleY = event.clientY - elementRect.top - rippleHalfSize;
    const duration = Math.min(Math.max(rippleSize / 100, 0.2), rippleSize > 100 ? 0.75 : 0.5) * 1000;

    const ripple = document.createElement('span');
    ripple.animate([
      { transform: 'scale(0)', opacity: 0.35 },
      { transform: 'scale(2)', opacity: 0 },
    ], { duration: duration, fill: 'forwards' });
    Object.assign(ripple.style, {
      position: 'absolute',
      borderRadius: ' 9999px',
      transformOrigin: 'center',
      pointerEvents: 'none',
      overflow: 'hidden',
      inset: '0',
      zIndex: '0',
      backgroundColor: 'currentColor',
      ...(props.blendMode ? {
        backgroundColor: 'white',
        mixBlendMode: 'screen',
      } : {}),
      width: `${rippleSize}px`,
      height: `${rippleSize}px`,
      left: `${rippleX}px`,
      top: `${rippleY}px`,
      animationDuration: `${duration}ms`,
    } satisfies Partial<CSSStyleDeclaration>);
    element.appendChild(ripple);

    setTimeout(() => element.removeChild(ripple), duration);
  }, [getElement, props.blendMode, props.stopPropagation]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    getElement()?.addEventListener('click', onClick, { signal });
    return () => abortController.abort();
  }, [getElement, onClick]);
}
