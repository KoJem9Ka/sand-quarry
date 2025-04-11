'use client';

import { useEffect, useState, useRef, useCallback, useReducer } from 'react';
import { cn } from '@/utils/cn';
import { Nav } from '@/components/Nav';
import { Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import { useUnfocus } from '@/hooks/useUnfocus';
import { HamburgerButton } from '@/components/ui/HamburgerButton';
import { Container } from '@/components/Container';
import { throttle } from 'lodash-es';
import { IconEmirocksLogo } from '@/components/icons/IconEmirocksLogo';
import Link from 'next/link';
import { MessengerButton } from '@/components/MessengerButton';


export function Header() {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const divInHeaderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isSpreadOpen, setIsSpreadOpen] = useState(false);
  const [isBackground, updateBgVisibility] = useReducer(() => isSpreadOpen || window.scrollY > 150, false);
  useUnfocus([hamburgerRef, mobileNavRef], useCallback(() => setIsSpreadOpen(false), []), isSpreadOpen);

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
    const abortController = new AbortController();
    window.addEventListener('scroll', handleScroll, { signal: abortController.signal });
    return () => abortController.abort();
  }, [isSpreadOpen]);

  return (
    <>
      <header id="header" data-bg={isBackground || undefined} className={cn(
        'fixed top-0 z-50 group',
        'flex flex-col w-full',
        'transition',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isBackground
          ? 'bg-white/50 not-supports-[backdrop-filter:blur(1px)]:bg-white [backdrop-filter:blur(var(--blur-md))]'
          : 'bg-transparent text-white',
        isBackground && isSpreadOpen && 'bg-white/75',
      )}>
        <Container>
          <div ref={divInHeaderRef} className="flex gap-3 py-4 justify-between items-center w-full">
            <Link className="flex items-center text-lg font-bold space-x-1 [--accent:var(--color-emirocks-green)]" href="/">
              <IconEmirocksLogo className="h-[36px] w-auto not-group-data-bg:[--icon-stroke:hsla(0,0%,100%,1)]" />
              {/*<img src={imgEmirocksLogo} alt="emirocks logo" className="h-[32px] stroke-3 stroke-white" />*/}
            </Link>

            <Nav className="max-lg:hidden text-lg" linkClassName={clsx(!isBackground && 'hover:text-emirocks-green')} />

            <div className="lg:hidden grow" />

            <div className="shrink-0 space-x-3 flex items-center max-lg:mr-3">
              <MessengerButton service="telegram" />
              <MessengerButton service="whatsapp" />
            </div>

            <HamburgerButton isOpen={isSpreadOpen} ref={hamburgerRef} className="lg:hidden" onClick={onSpreadToggle} />

            {/*<Button color="violet" className="max-lg:hidden text-sm">КОНСУЛЬТАЦИЯ</Button>*/}
          </div>

          <Transition show={isSpreadOpen}>
            <Nav
              ref={mobileNavRef}
              className={clsx(
                'lg:hidden flex-col gap-5 items-center px-4 py-emirocks-md overflow-hidden text-2xl',
                'transition-all data-[closed]:text-transparent data-[closed]:-translate-y-10 data-[closed]:gap-0 data-[closed]:p-0 data-[closed]:max-h-0 max-h-100',
              )}
              linkClassName={clsx(!isBackground && 'hover:text-emirocks-green')}
            />
          </Transition>
        </Container>
      </header>

      <Transition show={isSpreadOpen}>
        <div
          className="fixed inset-0 bg-black/75 z-40 data-[closed]:backdrop-blur-none data-[closed]:bg-transparent transition ease-in-out backdrop-blur-sm"
        />
      </Transition>
    </>
  );
}
