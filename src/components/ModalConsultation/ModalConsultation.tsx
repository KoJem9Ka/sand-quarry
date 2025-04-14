'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Button } from '@/components/ui/Button';
import { IconLogosTelegram } from '@/components/icons/IconLogosTelegram';
import { CONTACT_LINKS } from '@/constants/CONTACT_LINKS';
import { IconLogosWhatsapp } from '@/components/icons/IconLogosWhatsapp';
import { useIsModalConsultationOpen, modalConsultationClose } from '@/components/ModalConsultation/modal-consultation.store';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { IconSolarCloseCircleBold } from '@/components/icons/IconSolarCloseCircleBold';
import { cn } from '@/utils/cn';
import { iconArrowCva } from '@/components/icons/IconArrow';
import { useTranslations } from 'next-intl';


export function ModalConsultation() {
  const t = useTranslations('consultation.dialog');
  const isOpen = useIsModalConsultationOpen();
  usePreventScroll({ isActive: isOpen, delay: 150 });

  return (
    <Dialog
      transition
      className={`
        focus:outline-hidden fixed inset-0 p-4 flex justify-center items-center ease-in-out z-60
        transition bg-black/70 backdrop-blur-xl duration-150
        data-closed:bg-transparent data-closed:backdrop-blur-none
      `}
      open={isOpen}
      onClose={modalConsultationClose}
      __demoMode // prevent default scroll lock
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <DialogPanel
          transition
          className={`
            w-full max-w-xl rounded-radius-md overflow-hidden
            backdrop-blur-3xl ease-in-out transition
            data-enter:data-closed:scale-115 data-closed:opacity-0
          `}
        >
          <div className="relative px-6 py-2 text-center text-balance bg-white">
            <DialogTitle as="h3" className="text-xl font-bold">
              {t('title')}
            </DialogTitle>

            <p className="text-sm/6">
              {t('description')}
            </p>

            <button
              onClick={modalConsultationClose}
              className={cn(iconArrowCva({ asButton: true }), 'absolute top-2.5 right-2.5 rounded-full [&>svg]:size-6')}
            >
              <IconSolarCloseCircleBold />
            </button>
          </div>

          <div className="flex flex-wrap">
            <a href={CONTACT_LINKS.whatsapp} target="_blank" className="grow" onClick={modalConsultationClose}>
              <Button className="bg-whatsapp rounded-none px-4 py-3 w-full">
                <IconLogosWhatsapp isNoBg className="size-5" />
                WhatsApp
              </Button>
            </a>

            <a href={CONTACT_LINKS.telegram} target="_blank" className="grow" onClick={modalConsultationClose}>
              <Button className="bg-telegram rounded-none px-6 py-3 w-full">
                <IconLogosTelegram isNoBg className="size-5" />
                Telegram
              </Button>
            </a>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

