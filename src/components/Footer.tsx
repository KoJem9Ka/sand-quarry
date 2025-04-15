'use client';

import { Container } from '@/components/Container';
import { Nav } from '@/components/Nav';
import { Button } from '@/components/ui/Button';
import { modalConsultationOpen } from '@/components/ModalConsultation/modal-consultation.store';
import { useTranslations } from 'next-intl';


export function Footer() {
  const t = useTranslations('consultation');
  const year = Math.max(new Date().getFullYear(), 2025);

  return (
    <footer className="bg-quarry-gray text-white py-space-md mt-space-md">
      <Container className="flex flex-col items-center justify-center gap-7">
        <Nav className="max-sm:flex-col items-center gap-3" linkClassName="hover:text-quarry-brown" />

        <Button onClick={modalConsultationOpen} color='brown' className="text-sm uppercase">{t('buttonShort')}</Button>

        <p>© {year}</p>
      </Container>
    </footer>
  );
}
