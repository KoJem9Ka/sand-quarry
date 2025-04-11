import { Button } from '@headlessui/react';
import type { ComponentProps } from 'react';
import { IconLogosWhatsapp } from '@/components/icons/IconLogosWhatsapp';
import { IconLogosTelegram } from '@/components/icons/IconLogosTelegram';
import { CONTACT_LINKS } from '@/constants/CONTACT_LINKS';
import { cn } from '@/utils/cn';


type MessengerButtonProps = ComponentProps<'button'> & {
  service: 'whatsapp' | 'telegram';
  svgClassName?: string;
}

export function MessengerButton({ service, svgClassName, ...props }: MessengerButtonProps) {
  const { url, Icon } = services[service];

  return (
    <Button
      className="cursor-pointer transition hover:scale-105 active:scale-95"
      {...props}
    >
      <a href={url} target="_blank">
        <Icon className={cn('size-8', svgClassName)} />
      </a>
    </Button>
  );
}

const services = {
  telegram: {
    Icon: IconLogosTelegram,
    url: CONTACT_LINKS.telegram,
  },
  whatsapp: {
    Icon: IconLogosWhatsapp,
    url: CONTACT_LINKS.whatsapp,
  },
} as const;
