'use client';

import { Button } from '../ui/Button';
import { IconSolarPhoneBold } from '../icons/IconSolarPhoneBold';
import { Container } from '@/components/Container';
import { useReducer, useEffect } from 'react';
import { throttle } from 'lodash-es';
import { PUBLIC } from '@/backbone/public';
import { imgProps, sourceProps } from '@/utils/img-utils';
import { modalConsultationOpen } from '@/components/ModalConsultation/modal-consultation.store';
import { Img } from '@/components/ui/Img';
import { NBSP } from '@/utils/nbsp';
import { useTranslations } from 'next-intl';
// import imgNoise from '@/public/noise.png';


export function Section1Main() {
  const tHero = useTranslations('hero');
  const tConsultation = useTranslations('consultation');
  // const [{ bgScale, bgInset }, setScreen] = useState({
  //   bgScale: 100,
  //   bgInset: 0,
  // });

  const [headerHeight, viewportResized] = useReducer(() => document.getElementById('header')?.clientHeight ?? 0, 68);

  useEffect(() => {
    // const dpr = window.devicePixelRatio || 1;
    // setScreen({
    //   bgScale: 1 / dpr * 100,
    //   bgInset: -((dpr - 1) / 2) * 100,
    // });

    const handler = throttle(viewportResized, 150);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div className="relative z-0 overflow-hidden">
      {/*<div*/}
      {/*  className="absolute -z-2 bg-auto bg-repeat mix-blend-hard-light opacity-100"*/}
      {/*  style={{ backgroundImage: `url(${imgNoise.src})`, scale: `${bgScale}%`, inset: `${bgInset}%` }}*/}
      {/*/>*/}
      <div className='absolute -z-1 inset-0 bg-[#162031] opacity-60'/>
      <picture className="absolute -z-3 inset-0">
        <source{...sourceProps(PUBLIC.images.bgMain.webp)} sizes="100vw" />
        <Img
          {...imgProps(PUBLIC.images.bgMain.jpeg)}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </picture>

      <Container
        style={{ paddingTop: `${headerHeight}px` }}
        className="flex flex-col justify-center items-center gap-3 min-h-screen py-space-md text-white transition-[padding-top]"
      >
        <h1 className="space-y-3 *:block text-center font-bold text-balance">
          <span className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-normal">
            {tHero('title')}
          </span>
          {' '}
          <span className="text-3xl lg:text-4xl text-quarry-brown">{tHero('subtitle1')}</span>
          {' '}
          <span className="text-3xl lg:text-4xl">
            {tHero('subtitle2')}
            {' '}
            <span className='text-4xl sm:text-5xl lg:text-6xl'>{tHero('subtitle3').replace(/\s/g, NBSP)}</span>
            {' '}
            {tHero('subtitle4')}
          </span>
        </h1>
        <Button onClick={modalConsultationOpen} color="brown" className="mt-3">
          {tConsultation('buttonLong')}
          <IconSolarPhoneBold />
        </Button>
      </Container>
    </div>
  );
}
