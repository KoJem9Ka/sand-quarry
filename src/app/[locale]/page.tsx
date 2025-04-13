import { Header } from '@/components/Header';
import { Section1Main } from '@/components/sections/section-1-main';
import { Footer } from '@/components/Footer';
import { ModalConsultation } from '@/components/ModalConsultation/ModalConsultation';
import { Section2LegalStatus } from '@/components/sections/section-2-legal-status';
import { Section3Characteristics } from '@/components/sections/section-3-characteristics';
import { Section4BusinessModels } from '@/components/sections/section-4-business-models';
import { Section5SaleConditions } from '@/components/sections/section-5-sale-conditions';

export { generateStaticParams } from '@/i18n/generateStaticParams';


export default function Home() {
  return (
    <>
      <Header/>
      <Section1Main/>
      <Section2LegalStatus/>
      <Section3Characteristics/>
      <Section4BusinessModels/>
      <Section5SaleConditions/>

      <Footer/>

      <ModalConsultation/>
    </>
  );
}
