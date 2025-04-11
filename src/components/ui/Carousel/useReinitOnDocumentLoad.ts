'use client';

import { useEffect, useRef } from 'react';
import { useInViewport } from 'ahooks';
import { EmblaCarouselType } from 'embla-carousel';


export function useReinitOnDocumentLoad({ emblaApi, isEnabled = true }: {
  emblaApi: EmblaCarouselType | undefined,
  isEnabled?: boolean
}) {
  const [isInViewport] = useInViewport(emblaApi?.rootNode);
  const isOkOnLoad = useRef(false);
  const isOkOnInViewport = useRef(false);
  const isOkOnFontsLoad = useRef(false);

  useEffect(() => {
    if (isEnabled && emblaApi && isInViewport && !isOkOnInViewport.current && !isOkOnLoad.current) {
      emblaApi.reInit();
      isOkOnInViewport.current = true;
    }
  }, [isInViewport, emblaApi, isEnabled]);

  useEffect(() => {
    if (!isEnabled || !emblaApi || isOkOnLoad.current) return;

    const handleLoad = () => {
      emblaApi.reInit();
      isOkOnInViewport.current = true;
      isOkOnLoad.current = true;
    };

    window.addEventListener('load', handleLoad, { once: true });
    return () => window.removeEventListener('load', handleLoad);
  }, [emblaApi, isEnabled]);

  useEffect(() => {
    if (!isEnabled || !emblaApi || isOkOnFontsLoad.current) return;

    document.fonts.ready.then(() => {
      emblaApi.reInit();
      isOkOnFontsLoad.current = true;
    });
  }, [emblaApi, isEnabled]);
}
