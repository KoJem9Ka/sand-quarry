'use client';

import { Title } from '../ui/Title';
import { Container } from '@/components/Container';
import { HeadingIdEnum } from '@/constants/selectors';
import { Tab, TabContent, TabContents, TabList, Tabs } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';
import { useTranslations } from 'next-intl';
import { Markdown } from '@/components/ui/Markdown';
import { Table, TBody, TD, TH, THead, TR } from '@/components/ui/Table';


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
            <div className=''>
              <div className="relative max-h-[350px] overflow-y-auto rounded-radius-md border-2 border-quarry-brown">
                <Table className="not-prose text-center min-w-max" wrapperClassName="![overflow:unset]" isNoBroder>
                  <THead className="sticky top-[0]">
                    <TR>
                      <TH>Карьер</TH>
                      <TH>Местоположение</TH>
                      <TH className="">Цена</TH>
                      <TH>Запасы</TH>
                    </TR>
                  </THead>
                  <TBody className="[&_tr]:even:bg-black/4">
                    <TR><TD>Карьер песчаный №1</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №2</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №3</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №4</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №5</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №6</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №7</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №8</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №9</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №10</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №11</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №12</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №13</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №14</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №15</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №16</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №17</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №18</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №19</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №20</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №21</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №22</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №23</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №24</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №25</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №26</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №27</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                    <TR><TD>Карьер песчаный №28</TD><TD>Владимирская область</TD><TD>100 000 000</TD><TD>7 млн м3</TD></TR>
                  </TBody>
                </Table>
              </div>
            </div>
            <Markdown>{t.raw('tabQuarriesForSale.text2')}</Markdown>
          </TabContent>
          <TabContent className="prose-in"><Markdown>{t.raw('tabOurConditions.text')}</Markdown></TabContent>
        </TabContents>
      </Tabs>
    </Container>
  );
}
