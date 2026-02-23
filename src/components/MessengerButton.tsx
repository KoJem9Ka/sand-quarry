import { config } from '@/backbone/config';
import { IconLogosTelegram } from '@/components/icons/IconLogosTelegram';
import { IconLogosWhatsapp } from '@/components/icons/IconLogosWhatsapp';
import { cn } from '@/utils/cn';
import { Button } from '@headlessui/react';
import type { ComponentProps } from 'react';


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
    url: config.contacts.telegram,
  },
  whatsapp: {
    Icon: IconLogosWhatsapp,
    url: config.contacts.whatsapp,
  },
} as const;
