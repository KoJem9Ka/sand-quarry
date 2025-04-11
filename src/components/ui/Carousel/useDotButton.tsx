'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import { EmblaCarouselType } from 'embla-carousel';


type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const observerRef = useRef<MutationObserver>(undefined);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;

      // if page resizes, then scroll document window to the same position relative to bottom to prevent jumping
      if (!observerRef.current) {
        let screenHeightLast = document.body.scrollHeight;
        const dispose = () => {
          clearTimeout(timeoutId);
          observerRef.current?.disconnect();
          observerRef.current = undefined;
        };
        let timeoutId = setTimeout(dispose, 300);
        const observer = new MutationObserver(() => {
          const diff = document.body.scrollHeight - screenHeightLast;
          if (diff !== 0) {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(dispose, 300);
            window.scrollTo(0, window.scrollY + diff);
            screenHeightLast = document.body.scrollHeight;
          }
        });
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
        observerRef.current = observer;
      }

      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
