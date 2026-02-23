'use client';

import { HeadingIdEnum } from '@/constants/selectors';
import { type ComponentProps, forwardRef, type ForwardedRef } from 'react';
import { cn } from '@/utils/cn';

import { navScroll } from '@/utils/nav-scroll';
import { useTranslations } from 'next-intl';


type NavProps = ComponentProps<'nav'> & {
  linkClassName?: string;
};

export const Nav = forwardRef(({ className, linkClassName, ...props }: NavProps, ref: ForwardedRef<HTMLElement>) => {
  const t = useTranslations('navigation');
  const _linkClassName = cn('cursor-pointer hover:text-quarry-brown', linkClassName);

  return (
    <nav ref={ref} className={cn('flex gap-8', className)} {...props}>
      <a className={_linkClassName} href={`#${HeadingIdEnum.LegalStatus}`} onClick={navScroll}>{t('legalStatus')}</a>
      <a className={_linkClassName} href={`#${HeadingIdEnum.Characteristics}`} onClick={navScroll}>{t('characteristics')}</a>
      <a className={_linkClassName} href={`#${HeadingIdEnum.BusinessModels}`} onClick={navScroll}>{t('businessModels')}</a>
      {/* <a className={_linkClassName} href={`#${HeadingIdEnum.SaleConditions}`} onClick={navScroll}>{t('saleConditions')}</a> */}
      <a className={_linkClassName} href={`#${HeadingIdEnum.Articles}`} onClick={navScroll}>{t('articles')}</a>
    </nav>
  );
});

Nav.displayName = 'Nav';
