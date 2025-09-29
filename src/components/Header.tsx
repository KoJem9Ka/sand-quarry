'use client';

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { Nav } from '@/components/Nav';
import { Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { useUnfocus } from '@/hooks/useUnfocus';
import { HamburgerButton } from '@/components/ui/HamburgerButton';
import { Container } from '@/components/Container';
import { throttle } from 'lodash-es';
import { MessengerButton } from '@/components/MessengerButton';
import { Link } from '@/i18n/navigation';
import { IconSandQuarryLogo } from '@/components/icons/IconSandQuarryLogo';
import { useLocale } from 'use-intl';


export function Header() {
  const locale = useLocale();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const divInHeaderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isSpreadOpen, setIsSpreadOpen] = useState(false);
  const [isBackground, updateBgVisibility] = useReducer(() => isSpreadOpen || window.scrollY > 150, false);

  useUnfocus({
    refs: useMemo(() => [hamburgerRef, mobileNavRef], []),
    callback: useCallback(() => setIsSpreadOpen(false), []),
    isEnabled: isSpreadOpen,
  });

  const onSpreadToggle = useCallback(() => setIsSpreadOpen(v => !v), []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = throttle(() => {
      // Collapse mobile-nav on scroll
      if (isSpreadOpen) setIsSpreadOpen(false);
      // Hide header on scroll down
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 0);
      // Update background visibility
      updateBgVisibility();
      // Remember last scroll position
      lastScrollY = window.scrollY;
    }, 150);

    if (!isSpreadOpen) handleScroll();
    else updateBgVisibility();
    const abortController = new AbortController();
    window.addEventListener('scroll', handleScroll, { signal: abortController.signal });
    return () => abortController.abort();
  }, [isSpreadOpen]);

  return (
    <>
      <header id="header" data-bg={isBackground || undefined} className={cn(
        'fixed top-0 z-50 group text-white',
        'flex flex-col w-full',
        'transition',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isBackground
          ? 'bg-quarry-gray/70 not-supports-[backdrop-filter:blur(1px)]:bg-quarry-gray [backdrop-filter:blur(var(--blur-sm))]'
          : 'bg-transparent',
        isBackground && isSpreadOpen && 'bg-quarry-gray/75',
      )}>
        <Container>
          <div ref={divInHeaderRef} className="flex gap-3 py-4 justify-between items-center w-full">
            <a className="flex items-center text-lg font-bold space-x-1" href={`/${locale}`}>
              <IconSandQuarryLogo locale={locale} className="h-[36px] w-auto not-group-data-bg:[--icon-stroke:hsla(0,0%,100%,1)]"/>
            </a>

            <Nav className="max-[1120px]:hidden text-md"/>

            <div className="min-[1120px]:hidden grow"/>

            <div className="shrink-0 space-x-3 flex items-center max-[1120px]:mr-3">
              <MessengerButton service="telegram"/>
              <MessengerButton service="whatsapp"/>
              <Link className='hover:text-quarry-brown' href="/" locale={locale === 'en' ? 'ru' : 'en'}>
                {locale === 'en' ? 'RU' : 'EN'}
              </Link>
            </div>

            <HamburgerButton isOpen={isSpreadOpen} ref={hamburgerRef} className="min-[1120px]:hidden" onClick={onSpreadToggle}/>
          </div>

          <Transition show={isSpreadOpen}>
            <Nav
              ref={mobileNavRef}
              className={clsx(
                'min-[1120px]:hidden flex-col gap-5 items-center px-4 py-space-md overflow-hidden text-2xl',
                'transition-all data-[closed]:text-transparent data-[closed]:-translate-y-10 data-[closed]:gap-0 data-[closed]:p-0 data-[closed]:max-h-0 max-h-100',
              )}
            />
          </Transition>
        </Container>
      </header>

      <Transition show={isSpreadOpen}>
        <div className="fixed inset-0 bg-black/75 z-40 data-[closed]:backdrop-blur-none data-[closed]:bg-transparent transition ease-in-out backdrop-blur-sm"/>
      </Transition>
    </>
  );
}
