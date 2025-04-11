import { Header } from '@/components/Header';
import { Section1Main } from '@/components/sections/section-1-main';
import { Section2AboutProject } from '@/components/sections/section-2-about-project';
import { Section3Mortgage } from '@/components/sections/section-3-mortgage';
import { Section4GoldenVisa } from '@/components/sections/section-4-golden-visa';
import { Section5RelatedServices } from '@/components/sections/section-5-related-services';
import { Section6Cases } from '@/components/sections/section-6-cases';
import { Footer } from '@/components/Footer';
import { ModalConsultation } from '@/components/ModalConsultation/ModalConsultation';


export default function Home() {
  return (
    <>
      <Header />
      <Section1Main />
      <Section2AboutProject />
      <Section3Mortgage />
      <Section4GoldenVisa />
      <Section5RelatedServices />
      <Section6Cases />
      <Footer />

      <ModalConsultation />
    </>
  );
}
