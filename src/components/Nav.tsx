'use client';

import { HeadingIdEnum } from '@/constants/selectors';
import { type ComponentProps, forwardRef, type ForwardedRef } from 'react';
import { cn } from '@/utils/cn';

import { navScroll } from '@/utils/nav-scroll';


type NavProps = ComponentProps<'nav'> & {
  linkClassName?: string;
};

export const Nav = forwardRef(({ className, linkClassName, ...props }: NavProps, ref: ForwardedRef<HTMLElement>) => {
  const _linkClassName = cn('cursor-pointer hover:text-emirocks-violet', linkClassName);

  return (
    <nav ref={ref} className={cn('flex gap-8', className)} {...props}>
      <a className={_linkClassName} href={`#${HeadingIdEnum.AboutProject}`} onClick={navScroll}>О проекте</a>
      <a className={_linkClassName} href={`#${HeadingIdEnum.Mortgage}`} onClick={navScroll}>Ипотека</a>
      <a className={_linkClassName} href={`#${HeadingIdEnum.GoldenVisa}`} onClick={navScroll}>Золотая виза</a>
      <a className={_linkClassName} href={`#${HeadingIdEnum.Services}`} onClick={navScroll}>Услуги</a>
      <a className={_linkClassName} href={`#${HeadingIdEnum.Cases}`} onClick={navScroll}>Кейсы</a>
    </nav>
  );
});

Nav.displayName = 'Nav';
