'use client';

import { Title } from '../ui/Title';
import { Container } from '@/components/Container';
import { HeadingIdEnum } from '@/constants/selectors';
import { Tab, TabContent, TabContents, TabList, Tabs } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';
import { useTranslations } from 'next-intl';
import { Markdown } from '@/components/ui/Markdown';


export function Section3Characteristics() {
  const t = useTranslations('quarryCharacteristics');

  return (
    <div className="pb-space-md">
      <Container>
        <Title id={HeadingIdEnum.Characteristics}>{t('title')}</Title>
        <Tabs className="mt-space-sm" scrollUpTargetId={HeadingIdEnum.Characteristics} scrollUpFn={navScroll}>
          <TabList>
            <Tab>{t('tabAdvantages.title')}</Tab>
            <Tab>{t('tabLocation.title')}</Tab>
            <Tab>{t('tabGeology.title')}</Tab>
            <Tab>{t('tabExtraction.title')}</Tab>
            <Tab>{t('tabReserves.title')}</Tab>
            <Tab>{t('tabLaunch.title')}</Tab>
          </TabList>
          <TabContents className="prose md:prose-lg">
            <TabContent className="prose-in"><Markdown>{t.raw('tabAdvantages.text')}</Markdown></TabContent>
            <TabContent className="prose-in">
              <Markdown>{t.raw('tabLocation.text')}</Markdown>
              <div className='w-full rounded-md overflow-hidden'>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c6f29e2ce35ff06ec8da64c0125773b11f2325d97ebfc77acc94042233afc48&amp;source=constructor"
                  width="100%"
                  height="502"
                  frameBorder="0"
                />
              </div>
            </TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabGeology.text')}</Markdown></TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabExtraction.text')}</Markdown></TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabReserves.text')}</Markdown></TabContent>
            <TabContent className="prose-in"><Markdown>{t.raw('tabLaunch.text')}</Markdown></TabContent>
          </TabContents>
        </Tabs>
      </Container>
    </div>
  );
}
