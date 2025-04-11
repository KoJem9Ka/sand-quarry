'use client';

import { Button } from '../ui/Button';
import { IconSolarPhoneBold } from '../icons/IconSolarPhoneBold';
import { Container } from '@/components/Container';
import imgNoise from '@/public/noise.png';
import { useReducer, useEffect, useState } from 'react';
import { throttle } from 'lodash-es';
import { PUBLIC } from '@/backbone/public';
import { imgProps, sourceProps } from '@/utils/img-utils';
import { Img } from '@/components/ui/Img';
import { modalConsultationOpen } from '@/components/ModalConsultation/modal-consultation.store';


export function Section1Main() {
  const [{ bgScale, bgInset }, setScreen] = useState({
    bgScale: 100,
    bgInset: 0,
  });

  const [headerHeight, viewportResized] = useReducer(() => document.getElementById('header')?.clientHeight ?? 0, 68);

  useEffect(() => {
    const dpr = window.devicePixelRatio || 1;
    setScreen({
      bgScale: 1 / dpr * 100,
      bgInset: -((dpr - 1) / 2) * 100,
    });

    const handler = throttle(viewportResized, 150);
    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div className="relative z-0 overflow-hidden">
      <div
        className="absolute -z-1 bg-auto bg-repeat mix-blend-hard-light opacity-50"
        style={{ backgroundImage: `url(${imgNoise.src})`, scale: `${bgScale}%`, inset: `${bgInset}%` }}
      />
      <picture className="absolute -z-2 inset-0 max-sm:-right-[110px] brightness-80">
        <source{...sourceProps(PUBLIC.bgMain.webp)} sizes="100vw" />
        <Img
          {...imgProps(PUBLIC.bgMain.jpeg)}
          sizes="100vw"
          className="max-sm:object-right object-cover h-full w-full"
        />
      </picture>

      <Container
        style={{ paddingTop: `${headerHeight}px` }}
        className="flex flex-col justify-center items-center gap-3 min-h-screen py-emirocks-md text-white transition-[padding-top] text-balance"
      >
        <h1 className="space-y-3 *:block text-center">
          <span className="font-medium text-4xl md:text-8xl">Ипотека ОАЭ</span>
          {' '}
          <span className="font-bold text-[16px] md:text-3xl">повысит доход от инвестиций в 3 раза</span>
          {' '}
          <span className="font-light text-[16px] md:text-xl">Оформим за 3 месяца «под ключ» с юридической гарантией</span>
          {' '}
          <span className="font-light text-[16px] md:text-xl">Подберем недвижимость с помощью искусственного интеллекта</span>
        </h1>
        <Button onClick={modalConsultationOpen} color="green" className="mt-3">
          Получить консультацию
          <IconSolarPhoneBold />
        </Button>
      </Container>
    </div>
  );
}
