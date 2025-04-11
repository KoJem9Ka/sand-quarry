'use client';

import { useCallback, type PropsWithChildren, Fragment, type FC } from 'react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AutoHeight from 'embla-carousel-auto-height';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useDotButton } from '@/components/ui/Carousel/useDotButton';
import { cn } from '@/utils/cn';
import { Pagination } from '@/components/ui/Pagination/Pagination';
import { config } from '@/backbone/config';
import { useReinitOnDocumentLoad } from '@/components/ui/Carousel/useReinitOnDocumentLoad';


type CarouselProps = PropsWithChildren & {
  options?: EmblaOptionsType,
  /** [--slide-size:100%] lg:[--slide-size:30%] **/
  className: string,
  containerClassName?: string,
  // isCircles?: boolean,
  paginationWrapper?: FC<PropsWithChildren>,
  isAutoHeight?: boolean,
}

export function Carousel(props: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(props.options, [
    Autoplay({
      ...(config.isDev ? { active: false } : {}),
      delay: 7000,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
    props.isAutoHeight && AutoHeight(),
    WheelGesturesPlugin(),
  ].filter(Boolean));

  useReinitOnDocumentLoad({ emblaApi, isEnabled: !!props.isAutoHeight });

  const PaginationWrapper = props.paginationWrapper ?? Fragment;

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop = autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop;

    resetOrStop();
  }, []);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);
  // const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className={cn(
      'flex flex-col gap-3 max-w-full',
      '[--slide-spacing:0.5rem] lg:[--slide-spacing:1rem]',
      props.className,
    )}>
      <div className="overflow-hidden max-w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className={cn('flex touch-pan-y touch-pinch-zoom -ml-(--slide-spacing)', props.containerClassName)}>
          {props.children}
        </div>
      </div>

      <PaginationWrapper>
        {/*{!props.isCircles ? (*/}
        <Pagination
          pagesCount={scrollSnaps.length}
          currentPage={selectedIndex + 1}
          onPageChange={(page) => onDotButtonClick(page - 1)}
          neighbors={1}
        />
        {/*) : (*/}
        {/*  <div className="flex items-center justify-between gap-5">*/}
        {/*    <div className="flex flex-wrap justify-end items-center gap-3">*/}
        {/*      {scrollSnaps.map((_, i) => (*/}
        {/*        <button*/}
        {/*          type="button"*/}
        {/*          key={i}*/}
        {/*          onClick={() => onDotButtonClick(i)}*/}
        {/*          className={cn('size-5 rounded-full border-2 border-black/20 cursor-pointer', i === selectedIndex && 'border-black')}*/}
        {/*        />*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*    <div className="flex gap-3 items-center">*/}
        {/*      <IconArrowLeft onClick={onPrevButtonClick} className="size-8 text-black/20 hover:text-black/50 active:text-black cursor-pointer" />*/}
        {/*      <IconArrowRight onClick={onNextButtonClick} className="size-8 text-black/20 hover:text-black/50 active:text-black cursor-pointer" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)*/}
        {/*}*/}
      </PaginationWrapper>
    </div>
  );
}
