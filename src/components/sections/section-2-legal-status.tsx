'use client';

import { Title } from '../ui/Title';
import { Container } from '@/components/Container';
import { HeadingIdEnum } from '@/constants/selectors';
import { Tab, TabContent, TabContents, TabList, Tabs } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';
import { useTranslations } from 'next-intl';
import { Markdown } from '@/components/ui/Markdown';


export function Section2LegalStatus() {
  const t = useTranslations('legalStatus');

  return (
    <div className="bg-quarry-gray text-white pb-space-md">
      <Container>
        <Title id={HeadingIdEnum.LegalStatus}>{t('title')}</Title>
        <Tabs className="mt-space-sm" scrollUpTargetId={HeadingIdEnum.LegalStatus} scrollUpFn={navScroll}>
          <TabList>
            <Tab>{t('tabOwner.title')}</Tab>
            <Tab>{t('tabDocumentation.title')}</Tab>
          </TabList>
          <TabContents className="prose md:prose-lg prose-invert md:text-justify">
            <TabContent className="prose-in"><Markdown>{t.raw('tabOwner.text')}</Markdown></TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabDocumentation.text')}</Markdown></TabContent>
          </TabContents>
        </Tabs>
      </Container>
    </div>
  );
}
