'use client';

import { Container } from '@/components/Container';
import { Nav } from '@/components/Nav';
import { Button } from '@/components/ui/Button';
import { modalConsultationOpen } from '@/components/ModalConsultation/modal-consultation.store';


export function Footer() {
  const year = Math.max(new Date().getFullYear(), 2025);

  return (
    <footer className="bg-emirocks-gray text-white py-emirocks-md mt-emirocks-md">
      <Container className="flex flex-col items-center justify-center gap-7">
        <Nav className="max-sm:flex-col items-center gap-3" linkClassName="hover:text-emirocks-green" />

        <Button onClick={modalConsultationOpen} color="violet" className="text-sm">КОНСУЛЬТАЦИЯ</Button>

        <p>© EMIROCKS {year}</p>
      </Container>
    </footer>
  );
}
