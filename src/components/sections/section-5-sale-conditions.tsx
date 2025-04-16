'use client';

import { Title } from '../ui/Title';
import { Container } from '@/components/Container';
import { HeadingIdEnum } from '@/constants/selectors';
import { Tab, TabContent, TabContents, TabList, Tabs } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';
import { useTranslations } from 'next-intl';
import { Markdown } from '@/components/ui/Markdown';
import { Table, TBody, TD, TH, THead, TR } from '@/components/ui/Table';
import type { QuarryFromTable } from '@/i18n/types';
import { IconQlementineIconsExternalLink16 } from '@/components/icons/IconQlementineIconsExternalLink16';


export function Section5SaleConditions() {
  const t = useTranslations('saleConditions');

  return (
    <Container>
      <Title id={HeadingIdEnum.SaleConditions}>{t('title')}</Title>
      <Tabs className="mt-space-sm" scrollUpTargetId={HeadingIdEnum.SaleConditions} scrollUpFn={navScroll}>
        <TabList>
          <Tab>{t('tabBaseCost.title')}</Tab>
          <Tab>{t('tabMarketValue.title')}</Tab>
          <Tab>{t('tabQuarriesForSale.title')}</Tab>
          <Tab>{t('tabOurConditions.title')}</Tab>
        </TabList>
        <TabContents className="prose md:prose-lg md:text-justify">
          <TabContent className="prose-in"><Markdown>{t.raw('tabBaseCost.text')}</Markdown></TabContent>
          <TabContent className="prose-in"><Markdown>{t.raw('tabMarketValue.text')}</Markdown></TabContent>
          <TabContent className="prose-in">
            <Markdown>{t.raw('tabQuarriesForSale.text1')}</Markdown>
            <QuarriesTable/>
            <Markdown>{t.raw('tabQuarriesForSale.text2')}</Markdown>
          </TabContent>
          <TabContent className="prose-in"><Markdown>{t.raw('tabOurConditions.text')}</Markdown></TabContent>
        </TabContents>
      </Tabs>
    </Container>
  );
}

function QuarriesTable() {
  const t = useTranslations('saleConditions.tabQuarriesForSale');

  const headings = t.raw('tableHeadings') as string[];
  const quarries = t.raw('table') as QuarryFromTable[];

  return (
    <div className="not-prose">
      <div className="relative max-h-[500px] overflow-y-auto rounded-radius-md border-2 border-quarry-brown">
        <Table className="text-center min-w-max text-base" wrapperClassName="![overflow:unset]" isNoBroder>
          <THead className="sticky top-[0]">
            <TR>
              {headings.map((heading, idx) => <TH key={idx}><Markdown>{heading}</Markdown></TH>)}
            </TR>
          </THead>
          <TBody className="[&_tr]:even:bg-black/5">
            {quarries.map((quarry, idx) => (
              <TR key={idx}>
                <TD>
                  <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={quarry.link}>
                    {quarry.location}
                    {' '}
                    <IconQlementineIconsExternalLink16 className="inline"/>
                  </a>
                </TD>
                <TD>{quarry.reserves}</TD>
                <TD><Markdown>{quarry.sandQuality}</Markdown></TD>
                <TD><Markdown>{quarry.siteStatus}</Markdown></TD>
                <TD><Markdown>{quarry.hasLicense}</Markdown></TD>
                <TD>{quarry.quarryPriceMlnRub}</TD>
                <TD>{quarry.pricePerM3Rub}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </div>
      <p className="mt-3 text-right text-sm text-black/50">{t('tableRelevantDate')}</p>
    </div>
  );
}
