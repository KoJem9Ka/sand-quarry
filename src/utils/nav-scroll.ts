'use client';

import { type MouseEvent } from 'react';
import { Selectors, type ElementId } from '@/constants/selectors';


export function navScroll(eventOrElementOrSelectorOrId: MouseEvent<HTMLAnchorElement> | ElementId | string | HTMLElement) {
  let selector: ElementId | string = '';
  let element: HTMLElement | null = null;

  if (typeof eventOrElementOrSelectorOrId === 'string') {
    selector = eventOrElementOrSelectorOrId;
  } else if ('preventDefault' in eventOrElementOrSelectorOrId) {
    eventOrElementOrSelectorOrId?.preventDefault();
    selector = eventOrElementOrSelectorOrId?.currentTarget.href
      .match(/#(.*)[?/]?$/)?.[1] as ElementId;
  } else {
    element = eventOrElementOrSelectorOrId;
  }

  const headerHeight = document.querySelector(Selectors.Header)?.clientHeight || 0;
  // const mobileNavHeight = document.querySelector(Selectors.MobileNav)?.clientHeight || 0;
  element = element ?? document.querySelector<HTMLElement>(`#${selector},${selector}`);

  if (!element) return;
  const targetY = element.getBoundingClientRect().top + window.scrollY;// - mobileNavHeight;
  const isScrollDown = window.scrollY > targetY;
  const offsetPosition = targetY - 20 - (isScrollDown ? headerHeight : 0);
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
