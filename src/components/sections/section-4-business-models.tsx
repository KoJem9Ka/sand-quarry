'use client';

import { Title } from '../ui/Title';
import { Container } from '@/components/Container';
import { HeadingIdEnum } from '@/constants/selectors';
import { Tab, TabContent, TabContents, TabList, Tabs } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';
import { useTranslations } from 'next-intl';
import { Markdown } from '@/components/ui/Markdown';


export function Section4BusinessModels() {
  const t = useTranslations('businessModels');

  return (
    <div className="bg-quarry-gray text-white pb-space-md">
      <Container>
        <Title id={HeadingIdEnum.BusinessModels}>{t('title')}</Title>
        <Tabs className="mt-space-sm" scrollUpTargetId={HeadingIdEnum.BusinessModels} scrollUpFn={navScroll}>
          <TabList>
            <Tab>{t('tabInitialData.title')}</Tab>
            <Tab>{t('tabMarketNiches.title')}</Tab>
            <Tab>{t('tabOptimalModel.title')}</Tab>
          </TabList>
          <TabContents className="prose md:prose-lg prose-invert md:text-justify">
            <TabContent className="prose-in"><Markdown>{t.raw('tabInitialData.text')}</Markdown></TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabMarketNiches.text')}</Markdown></TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabOptimalModel.text')}</Markdown></TabContent>
          </TabContents>
        </Tabs>
      </Container>
    </div>
  );
}
