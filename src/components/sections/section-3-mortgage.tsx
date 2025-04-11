'use client';

import { Title2, Title } from '@/components/ui/Title';
import { HeadingIdEnum, ElementIdEnum } from '@/constants/selectors';
import { Container } from '@/components/Container';
import { Table, THead, TR, TBody, TH, TD } from '@/components/ui/Table';
import { Carousel } from '@/components/ui/Carousel/Carousel';
import { CarouselItem } from '@/components/ui/Carousel/CarouselItem';
import { APARTMENTS } from '@/constants/APARTMENTS';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { fmtDollars, fmtPercent, fmtYears, yearsSuffix, fmtRub } from '@/utils/fmt';
import { RunningLine } from '@/components/ui/RunningLine';
import RockViolet from '@/assets/rock-violet.svg';
import { PictureContainer } from '@/components/PictureContainer';
import { PUBLIC } from '@/backbone/public';
import { Img } from '@/components/ui/Img';
import { sourceProps, imgProps } from '@/utils/img-utils';
import { useState, useRef, useMemo, useEffect, type ReactNode, type ComponentProps, useReducer, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { clsx } from 'clsx';
import { useMaskito } from '@maskito/react';
import type { MaskitoOptions } from '@maskito/core';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { IconExpandVertical } from '@/components/icons/IconExpandVertical';
import { Transition } from '@headlessui/react';
import { NBSP } from '@/utils/nbsp';
import { ListDots } from '@/components/ui/List';
import { Tabs, Tab, TabList, TabContents, TabContent } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';
import { pageReady } from '@/utils/page-ready';


export function Section3Mortgage() {
  const { isMaxSm, isMaxMd, isMd } = useBreakpoints();

  return (
    <>
      <RunningLine parts={RUN_LINE_TEXTS} />
      <Container>
        <PictureContainer
          src={PUBLIC.penthouseLivingAreaFilter}
          alt="Penthouse living area"
        >
          <Title id={HeadingIdEnum.Mortgage} className="col-span-full flex justify-center items-center gap-3 h-min antialiased mb-emirocks-sm">
            <Img src={RockViolet.src} width={463} height={512} alt="" className="size-10" />
            Ипотека
          </Title>

          <Tabs scrollUpTargetId={HeadingIdEnum.Mortgage} scrollUpFn={navScroll}>
            <TabList className="lg:justify-end">
              <Tab>Ценность</Tab>
              <Tab>Условия</Tab>
              <Tab>Услуги</Tab>
            </TabList>
            <TabContents className="[&_h4]:font-bold [&_h4]:text-xl [&_h4]:text-balance max-md:[&_h4]:text-center">
              <TabContent>
                <h4>Главные преимущества ипотеки ОАЭ</h4>
                <ListDots>
                  <li>Покупка недвижимости за 1/3 от её реальной стоимости</li>
                  <li>Покупательская способность денег инвестора выше в 3 раза</li>
                  <li>Аренда недвижимости на 100% окупает ипотечные платежи</li>
                  <li>Стоимость недвижимости растет в среднем на 10% в год</li>
                  <li>Недвижимость можно продавать до погашения ипотеки</li>
                  <li>Доход от удорожания ипотечной недвижимости выше в 3 раза</li>
                </ListDots>
                <p><b>Итог:</b> Инвестор покупает недвижимость за 1/3 её стоимости, которая сама себя окупает и при этом стабильно растет в цене в $</p>
                <p><b>Принципы работы ипотечного плеча:</b></p>
                <ListDots>
                  <li>Ипотека позволяет купить в 3 раза больше недвижимости - инвестор зарабатывает на удорожании нескольких объектов одновременно</li>
                  <li>Ипотека позволяет купить недвижимость в 3 раза дороже - инвестор больше зарабатывает на удорожании более дорогой недвижимости</li>
                </ListDots>
              </TabContent>
              <TabContent>
                <h4>Основные условия по ипотеке и реалии рынка ОАЭ</h4>
                <ListDots>
                  <li>Минимальная цена недвижимости для оформления в ипотеку:<b>{fmtDollars(' 300 000 $')}</b></li>
                  <li>
                    Минимальный капитал для ипотечной сделки:
                    {' '}
                    <b>{fmtDollars('101 441 $')}</b>
                    {' ≈ '.replace(/\s/g, NBSP)}
                    <b>{fmtRub('9 000 000 ₽')}</b>
                    {' '}
                    (данной суммы достаточно для покупки недвижимости стоимостью{fmtDollars(' 300 000 $')})
                  </li>
                  <li>Ставка банка -{' '}<b>от 3.75% годовых</b>{' '}/ срок займа -{' '}<b>до 25 лет</b></li>
                  <li>Аренда недвижимости на{' '}<b>100%</b>{' '}окупает ипотечные платежи</li>
                  <li>В некоторых случаях аренда приносит{' '}<b>3-5%</b>{' '}годовых сверх расходов по ипотеке</li>
                  <li>Себестоимость покупки недвижимости (первоначальный платеж и оформление ипотеки) составляет{' '}<b>1/3</b>{' '}от ее стоимости (остальную часть окупает аренда)</li>
                  <li>Среднее рыночное удорожание недвижимости в ОАЭ -{' '}<b>10% в год</b></li>
                  <li>Средний доход от инвестиций с ипотечным плечом -{' '}<b>25% в год</b>{' '}(см. расчеты)</li>
                  <li>Ипотечный займ разрешается использовать только для покупки жилой или коммерческой недвижимости на вторичном рынке</li>
                  <li>Банк тщательно проверяет стоимость ипотечной недвижимости и этим защищает покупателя от переплаты по сделке</li>
                </ListDots>
              </TabContent>
              <TabContent>
                <h4>Объем наших услуг при оформлении ипотеки</h4>
                <ListDots>
                  <li>Реализация самого выгодного и оптимального сценария получения ипотеки</li>
                  <li>Предварительная комплексная проверка профиля клиента</li>
                  <li>Организация встреч и ведение переговоров с представителями банка</li>
                  <li>Поддержка при получении резидентства и открытии счетов</li>
                  <li>Подготовка и подача кредитной заявки в банк</li>
                  <li>Получение одобрения банка на заявленный диапазон займа</li>
                  <li>Подбор недвижимости с необходимым уровнем дохода по аренде</li>
                  <li>
                    Сопровождение на всех этапах покупки недвижимости, включая оценку объекта, регистрацию ипотеки, страхование
                    и оформление собственности - до поступления фактического финансирования банка на оплату сделки
                  </li>
                  <li>Поддержка по передаче недвижимости в управление</li>
                  <li>Помощь по взаимодействию клиента с банком в течение всего периода займа</li>
                </ListDots>
              </TabContent>
            </TabContents>
          </Tabs>
        </PictureContainer>

        <Title2 className="mb-emirocks-sm">Ипотечный калькулятор</Title2>
        <MortgageCalc />

        <Title2 id={ElementIdEnum.PrimaryOrSecondaryMarket}>Первичный или вторичный рынок?</Title2>
        <Tabs className="mt-emirocks-sm" scrollUpTargetId={ElementIdEnum.PrimaryOrSecondaryMarket} scrollUpFn={navScroll}>
          <TabList>
            <Tab>Первичный</Tab>
            <Tab>Вторичный</Tab>
            <Tab>Вывод</Tab>
          </TabList>
          <TabContents>
            <TabContent>
              <p>Покупка недвижимости в ОАЭ на начальной стадии строительства не является в самом принципе инвестиционным преимуществом</p>
              <p>Спрос на первичную недвижимость, разогретый особыми условиями от застройщиков в виде рассрочек, взвинтил цены, и «вторичка» оказалась более выгодным инвестиционным решением</p>
              <p>Девелоперы привлекают клиентов мифически выгодными рассрочками, в которые заложены огромные рекламные бюджеты и щедрые комиссионные</p>
              <p>При покупке первичной недвижимости клиент принимает решение на основе прогнозов (предположений) застройщика, которым не всегда суждено сбыться</p>
              <p>По статистике 35% всех новостроек сдаются с задержкой срока, который может исчисляться в несколько лет</p>
              <p>Средний срок задержки строительства - 15 месяцев</p>
            </TabContent>
            <TabContent>
              <p>Устойчивый тренд недвижимости ОАЭ - готовая недвижимость</p>
              <p>Объемы продаж вторичной недвижимости сравнялись с первичным рынком, что обусловлено ростом интереса инвесторов к более консервативным инвестициям в готовую недвижимость для сдачи в аренду, а также более выгодными ценами на вторичные объекты в сравнении с новостройками</p>
              <p>Цены вторичной недвижимости в ОАЭ максимально соответствуют реалиям рынка, при этом информация обо всех сделках находится в публичном доступе</p>
              <p>Специальные сервисы (например, Property Finder) предоставляют полную историю операций по всем объектам недвижимости, информацию о ценах продажи и аренды, позволяют оценить уровень спроса на недвижимость в интересующих локациях, сравнить цены на одинаковые помещения и т.д.</p>
            </TabContent>
            <TabContent>
              <p>Эффективность инвестиций в первичную недвижимость мало предсказуема, велика вероятность выбора объекта с потенциально низкой рентабельностью, а также высок риск срыва сроков строительства застройщиком</p>
              <p>В ОАЭ давно развенчан миф о том, что покупка недвижимости на раннем этапе строительства в самом принципе ставит покупателя в выгодное положение</p>
              <p>Новостройки выгодно покупать в премиум сегменте для сохранения (а не приумножения) крупного капитала, которые раскупаются на этапе проектирования, рассчитаны на очень избирательного и состоятельного клиента, и их доля на рынке составляет не более 1%</p>
              <p>Вторичная недвижимость является наименее рискованным и наиболее выгодным инструментом инвестирования, который прозрачен для аналитики, предсказуем по доходности и имеет лучшую ценовую точку входа</p>
            </TabContent>
          </TabContents>
        </Tabs>

        <PictureContainer
          src={PUBLIC.dubaiMarinaOaeZalivGavanIaFilter}
          alt="Dubai Marina"
          isPictureRight

          imgClassName="object-top"
        >
          <Title2 id={ElementIdEnum.MortgageOrInstallmentPlan} className="col-span-full mb-emirocks-sm">Ипотека или рассрочка?</Title2>

          <Tabs scrollUpTargetId={ElementIdEnum.MortgageOrInstallmentPlan} scrollUpFn={navScroll}>
            <TabList>
              <Tab>Рассрочка</Tab>
              <Tab>Ипотека</Tab>
              <Tab>Вывод</Tab>
            </TabList>
            <TabContents>
              <TabContent className="space-y-1">
                <p><b>Исходные данные</b></p>
                <p>{fmtDollars('Размер инвестиций - 300 000 $')}</p>
                <p>{fmtDollars('Покупка 1 объекта в строящемся доме стоимостью 300 000 $')}</p>
                <p>{fmtDollars('Первоначальный взнос - 60 000 $ (20%)')}</p>
                <p>{fmtDollars('Период рассрочки - 80 месяцев / ежемесячный платеж - 3 000 $ (1%)')}</p>
                <p>Прогноз удорожания недвижимости - 10% в год</p>
                <p>{fmtDollars('Срок строительства - 2 года, после - сдача в аренду за 2 150 $ в месяц')}</p>
                <p>Продажа объекта через 80 месяцев - сразу после погашения рассрочки</p>
                <p><b>Расчет дохода за 80 месяцев</b></p>
                <p>{fmtDollars('Удорожание недвижимости: 300 000 $ + 66.66% = 500 000 $')}</p>
                <p>{fmtDollars('Аренда после завершения строительства: 2 150 $ * 56 месяцев = 120 400 $')}</p>
                <p>{fmtDollars('Чистая прибыль: 500 000 $ + 120 400 $ – 300 000 $ = 320 400 $')}</p>
                <p><b>ROI:</b>{fmtDollars(' Инвестировано 300 000 $, прибыль 320 400 $ (106.8%) - ')}<b>16% годовых</b></p>
              </TabContent>
              <TabContent className="space-y-1">
                <p><b>Исходные данные</b></p>
                <p>{fmtDollars('Размер инвестиций - 304 323 $')}</p>
                <p>{fmtDollars('Покупка 3 объектов на вторичном рынке стоимостью 300 000 $ каждый')}</p>
                <p>{fmtDollars('Первоначальный взнос и расходы по ипотеке - 101 441 $ (33.8%) * 3 = 304 323 $')}</p>
                <p>{fmtDollars('Срок - 25 лет  / ставка - 4.5% / ежемесячный платеж - 1 334 $ * 3 = 4 002 $')}</p>
                <p>Прогноз удорожания недвижимости - 10% в год</p>
                <p>{fmtDollars('Аренда (сверх ипотечного платежа) - 2150 $ - 1 334 $ = 816 $ в месяц (3.26% годовых)')}</p>
                <p>Продажа объекта через 80 месяцев после оформления ипотеки</p>
                <p><b>Расчет дохода за 80 месяцев</b></p>
                <p>{fmtDollars('Удорожание недвижимости: 300 000 $ + 66.66% = 500 000 $ * 3 = 1 500 000 $')}</p>
                <p>{fmtDollars('Аренда недвижимости: 80 месяцев * 816 $ * 3 = 195 840 $')}</p>
                <p>{fmtDollars('Остаток долга по ипотеке: 198 738 $ * 3 = 596 214 $')}</p>
                <p>{fmtDollars('Чистая прибыль: 1 500 000 $ + 195 840 $ – 596 214 $ – 304 323 $ = 795 303 $')}</p>
                <p><b>ROI:</b>{fmtDollars(' Инвестировано 304 323 $, прибыль 795 303 $ (261.33%) - ')}<b>39.2% годовых</b></p>
              </TabContent>
              <TabContent className="sm:text-justify">
                <p>
                  В расчетах использованы средние значения. Доходность каждого объекта индивидуальна. Условия рассмотренной рассрочки эксклюзивны и на рынке встречаются крайне редко. Но даже в этом случае отчетливо видна выгода ипотеки{' '}<b>в 2.5 раза</b>.
                </p>
                <p>
                  На примере показано, что в ипотеку на одну и ту же сумму можно купить в 3 раза больше объема недвижимости. Но даже при покупке 1 равнозначного с рассрочкой объекта, ROI ипотеки останется на прежнем высоком уровне.
                </p>
                <p>
                  Более{' '}<b>35%</b>{' '}всех строек ОАЭ имеют проблемы срыва сроков сдачи объекта, что порой вносит существенные коррективы в инвестиционные ожидания. Если произойдет задержка сдачи новостройки на 3-4 года, заработок на аренде до выплаты рассрочки будет маловероятен.
                </p>
                <p>
                  Удорожание недвижимости в среднем составляет{' '}<b>10% в год</b>. Тем не менее, непрерывный рост на рынке сменяют коррекции и замедления. Колебания доходности находятся в коридоре между 5% и 15%. Динамика удорожания первичной и вторичной недвижимости одинакова. Если на рынке происходит спад, то рост замедляется во всех сегментах. Поэтому какой бы показатель доходности не был заложен в расчетах, ипотека в любом случае будет эффективнее рассрочки в{' '}<b>2.5 раза</b>{' '}и позволит выжать из рынка максимум возможной прибыли.
                </p>
              </TabContent>
            </TabContents>
          </Tabs>
        </PictureContainer>

        <Title2 id={ElementIdEnum.MoscowOrDubai} className="mb-emirocks-sm">Москва или Дубай?</Title2>
        <Tabs scrollUpTargetId={ElementIdEnum.MoscowOrDubai} scrollUpFn={navScroll}>
          <TabList>
            <Tab>Сравнение</Tab>
            <Tab>Вывод</Tab>
          </TabList>
          <TabContents>
            <TabContent>
              <Table className="space-y-0 table-fixed *:text-center text-balance">
                <THead>
                  <TR>
                    {isMd && <TH>Показатель</TH>}
                    <TH>Москва</TH>
                    <TH>Дубай</TH>
                  </TR>
                </THead>
                <TBody className={[
                  'max-md:[&_tr]:odd:bg-black/7 max-md:[&_tr]:odd:font-bold',
                  'md:[&_td]:first:font-bold md:[&_td]:first:text-left md:[&_tr]:even:bg-black/7',
                ].join(' ')}>
                  {isMaxMd && <TR><TD colSpan={2}>Средняя ставка по ипотеке</TD></TR>}
                  <TR>
                    {isMd && <TD>Средняя ставка по ипотеке</TD>}
                    <TD>28.44%</TD>
                    <TD>4%</TD>
                  </TR>
                  {isMaxMd && <TR><TD colSpan={2}>Годовая доходность аренды</TD></TR>}
                  <TR>
                    {isMd && <TD>Годовая доходность аренды</TD>}
                    <TD>1-1.5% в ₽</TD>
                    <TD>6-9% в $</TD>
                  </TR>
                  {isMaxMd && <TR><TD colSpan={2}>Срок окупаемости недвижимости арендой</TD></TR>}
                  <TR>
                    {isMd && <TD>Срок окупаемости недвижимости арендой</TD>}
                    <TD>15-20 лет в ₽</TD>
                    <TD>8-10 лет в $</TD>
                  </TR>
                  {isMaxMd && <TR><TD colSpan={2}>Окупаемость ипотеки арендой</TD></TR>}
                  <TR>
                    {isMd && <TD>Окупаемость ипотеки арендой</TD>}
                    <TD>аренда в 2-4 раза ниже ипотечных платежей</TD>
                    <TD>100% окупаемость + 3-5% годовых сверху</TD>
                  </TR>
                  {isMaxMd && <TR><TD colSpan={2}>Удорожание недвижимости</TD></TR>}
                  <TR>
                    {isMd && <TD>Удорожание недвижимости</TD>}
                    <TD>на данный момент идет тенденция к снижению цен</TD>
                    <TD>5-15% в $</TD>
                  </TR>
                  {isMaxMd && <TR><TD colSpan={2}>Вероятность пузыря на рынке недвижимости</TD></TR>}
                  <TR>
                    {isMd && <TD>Вероятность пузыря на рынке недвижимости</TD>}
                    <TD>появляются признаки пузыря</TD>
                    <TD>входит в тройку городов мира с наименьшим риском возникновения пузыря</TD>
                  </TR>
                  {isMaxMd && <TR><TD colSpan={2}>Налоги на личные доходы</TD></TR>}
                  <TR>
                    {isMd && <TD>Налоги на личные доходы</TD>}
                    <TD>13%</TD>
                    <TD>0%</TD>
                  </TR>
                </TBody>
                {isMaxSm && <THead>
                  <TR>
                    <TH>Москва</TH>
                    <TH>Дубай</TH>
                  </TR>
                </THead>}
              </Table>
            </TabContent>
            <TabContent className="sm:text-justify">
              <p>
                Недвижимость Москвы и Дубая находится в близком ценовом сегменте, но многие аналитики склоняются в пользу того, что за почти равную цену Дубай предлагает более современную и комфортную недвижимость с очень высоким уровнем сервиса и опциями мест общего пользования
              </p>
              <p>
                Относительно инвестиционной привлекательности, окупаемости аренды, динамики удорожания, переоцененности - вся аналитика свидетельствует о безоговорочном преимуществе Дубая по всем метрикам в сравнении с Москвой
              </p>
              <p>
                Среди всех современных мегаполисов мира реальным конкурентом Дубая является только единственный город - Абу-Даби, который находится в ОАЭ
              </p>
            </TabContent>
          </TabContents>
        </Tabs>

        <Title2 id={ElementIdEnum.ApartmentsOnTheMarket}>Недвижимость на рынке</Title2>
      </Container>

      <Tabs className="mt-emirocks-sm" scrollUpTargetId={ElementIdEnum.ApartmentsOnTheMarket} scrollUpFn={navScroll}>
        <Container>
          <TabList className="justify-center">
            {APARTMENTS.map((apartment, i) => <Tab key={i}>{apartment.title}</Tab>)}
          </TabList>
        </Container>
        <TabContents>
          {APARTMENTS.map((apartment, i) => (
            <TabContent key={i} className="space-y-emirocks-sm">
              <Carousel
                options={{ loop: true }}
                className="max-md:[--slide-size:90%] [--slide-size:auto]"
                paginationWrapper={Container}
              >
                {apartment.photos.map((photo) => (
                  <CarouselItem key={photo.jpeg.src}>
                    <picture>
                      <source {...sourceProps(photo.webp)} />
                      <Img
                        {...imgProps(photo.jpeg)}
                        alt=""
                        sizes="(width < 48rem) 90vw, 55vh"
                        className="object-cover max-md:aspect-square md:h-[55vh] w-full max-w-[90vw] rounded-emirocks"
                      />
                    </picture>
                  </CarouselItem>
                ))}
              </Carousel>
              <Container>
                <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: apartment.description }} />
              </Container>
            </TabContent>
          ))}
        </TabContents>
      </Tabs>
    </>
  );
}

const RUN_LINE_TEXTS = [
  'Ставка от 3.75% годовых',
  'Срок займа до 25 лет',
  'Аренда окупает ипотеку',
  'Удорожание недвижимости 10% в год',
  'Инвестиции в 3 раза выгоднее',
  'Рентабельность инвестиций от 20% годовых',
];

const MORTGAGE = {
  defaultAge: '30' as string,
  defaultApartmentCost: '300 000' as string,

  minClientYears: 21,
  maxClientYears: 64,

  minMortgageYears: 1,
  maxMortgageYears: 25,

  minApartmentCost: 300_000,
  maxApartmentCost: 100_000_000,
} as const;

function MortgageCalc() {
  const [isExpandProcessingCosts, toggleIsProcessingCostsSpread] = useReducer((prev): boolean => !prev, false);

  const [_age, setAge] = useState(MORTGAGE.defaultAge);
  const [_apartmentCost, setApartmentCost] = useState(MORTGAGE.defaultApartmentCost);

  const ageUnchecked = +_age.replace(/\D/g, '') || MORTGAGE.minClientYears;
  const age = Math.max(MORTGAGE.minClientYears, ageUnchecked);
  const apartmentCost = Math.max(MORTGAGE.minApartmentCost, +_apartmentCost.replace(/\D/g, '') || MORTGAGE.minApartmentCost);

  const calculations = useMemo(() => {
    const Финасирование = 80 / 100;
    const СуммаЗайма = apartmentCost * Финасирование;
    const ПервоначальныйВзнос = (1 - Финасирование) * apartmentCost;
    const Ставка = 4.5 / 100;
    const ЛетИпотеки = Math.min(MORTGAGE.maxMortgageYears, Math.max(MORTGAGE.minMortgageYears,
      65 - age,
    ));

    const _УслугиEmirocks = 6 / 100; // От стоимости недвижимости
    const УслугиEmirocks = apartmentCost * _УслугиEmirocks;

    const _КомиссияАгентстваНедвижимости = 2 / 100; // От стоимости недвижимости
    const КомиссияАгентстваНедвижимости = apartmentCost * _КомиссияАгентстваНедвижимости;

    const _СтрахованиеНедвижимости = 0.05 / 100; // От стоимости займа
    const СтрахованиеНедвижимости = СуммаЗайма * _СтрахованиеНедвижимости;

    const _СтрахованиеЖизни = 0.1 / 100; // От стоимости займа
    const СтрахованиеЖизни = СуммаЗайма * _СтрахованиеЖизни;

    const _ЗемельныйНалог = 4 / 100; // От стоимости недвижимости
    const ЗемельныйНалог = apartmentCost * _ЗемельныйНалог;

    const НотариальноеЗаверение = 1_144; // Фикс.
    const ПодтверждениеПраваСобственности = 79; // Фикс.
    const ОценкаНедвижимости = 858; // Фикс.

    const _РегистрацияИпотеки = 0.25 / 100; // От стоимости займа
    const РегистрацияИпотеки = СуммаЗайма * _РегистрацияИпотеки;

    const _КомиссияБанкаЗаОформление = 1 / 100; // От стоимости займа
    const КомиссияБанкаЗаОформление = СуммаЗайма * _КомиссияБанкаЗаОформление;

    const РасходыПоОформлению = КомиссияБанкаЗаОформление + ОценкаНедвижимости + РегистрацияИпотеки + ПодтверждениеПраваСобственности + НотариальноеЗаверение + СтрахованиеЖизни + СтрахованиеНедвижимости + ЗемельныйНалог + КомиссияАгентстваНедвижимости + УслугиEmirocks;

    // =(D21*(B15/12)*(1+(B15/12))^(B16*12))/((1+(B15/12))^(B16*12)-1)
    // const ЕжемесячныйПлатеж = СуммаЗайма * (Ставка / 12) / (1 - (1 + (Ставка / 12)) ** (-ЛетИпотеки * 12));

    const СтавкаВМесяц = Ставка / 12;
    const МесяцевИпотеки = ЛетИпотеки * 12;
    const ЕжемесячныйПлатеж = (
      СуммаЗайма * СтавкаВМесяц * (1 + СтавкаВМесяц) ** МесяцевИпотеки
    ) / (
      (1 + СтавкаВМесяц) ** МесяцевИпотеки - 1
    );

    const ОбщаяСуммаВсехРасходов = ПервоначальныйВзнос + КомиссияБанкаЗаОформление + ОценкаНедвижимости + РегистрацияИпотеки + ЗемельныйНалог + ПодтверждениеПраваСобственности + НотариальноеЗаверение + СтрахованиеЖизни + СтрахованиеНедвижимости + КомиссияАгентстваНедвижимости + УслугиEmirocks;

    return {
      Финасирование,
      СуммаЗайма,
      ПервоначальныйВзнос,
      ЕжемесячныйПлатеж,
      Ставка,
      ЛетИпотеки,
      РасходыПоОформлению,
      ОбщаяСуммаВсехРасходов,

      КомиссияБанкаЗаОформление,
      ОценкаНедвижимости,
      РегистрацияИпотеки,
      ПодтверждениеПраваСобственности,
      НотариальноеЗаверение,
      СтрахованиеЖизни,
      СтрахованиеНедвижимости,
      ЗемельныйНалог,
      КомиссияАгентстваНедвижимости,
      УслугиEmirocks,
    };
  }, [age, apartmentCost]);

  const TRTransition = useCallback(({ className, isShow, ...props }: ComponentProps<'tr'> & { isShow: boolean }) => (
    <Transition show={isShow}>
      <TR className={clsx(
        'group transition-all opacity-100 duration-500',
        'data-closed:opacity-0',

        '*:transition-all *:duration-500 *:overflow-hidden *:leading-[150%]',
        'data-closed:*:leading-[0%] data-closed:*:py-0 sm:data-closed:*:tracking-[-.5ch]',
        className,
      )} {...props} />
    </Transition>
  ), []);

  const TDExpanded = useCallback(({ className, ...props }: ComponentProps<'td'>) => (
    <TD className={cn(className)} {...props} />
  ), []);

  return (
    <div className="flex max-w-full w-max mx-auto">
      <Table>
        <THead>
          <TR>
            <TH colSpan={2}>Предварительные расчеты по ипотеке</TH>
          </TR>
        </THead>
        <TBody className="[&_tr]:even:bg-black/7 [&_td]:last:text-end">
          <TR>
            <TD>Возраст клиента</TD>
            <TD>
              <div className="flex justify-end h-full">
                <Input
                  value={_age}
                  onInput={(e) => setAge(e.currentTarget.value)}
                  suffix={`${NBSP}${yearsSuffix(ageUnchecked)}`}
                  isAutoWidth

                  maskitoOptions={maskitoNumberOptionsGenerator({
                    min: MORTGAGE.minClientYears,
                    max: MORTGAGE.maxClientYears,
                  })}
                  inputMode="numeric"
                />
              </div>
              <span className="hidden">{age}</span>
            </TD>
          </TR>
          <TR>
            <TD>Стоимость недвижимости</TD>
            <TD>
              <div className="flex justify-end h-full">
                <Input
                  value={_apartmentCost}
                  onInput={(e) => setApartmentCost(e.currentTarget.value)}
                  prefix="$"
                  isAutoWidth

                  maskitoOptions={maskitoNumberOptionsGenerator({
                    thousandSeparator: ' ',
                    min: MORTGAGE.minApartmentCost,
                    max: MORTGAGE.maxApartmentCost,
                  })}
                  inputMode="numeric"
                />
              </div>
            </TD>
          </TR>
          <TR>
            <TD>Финансирование</TD>
            <TD>{fmtPercent(calculations.Финасирование)}</TD>
          </TR>
          <TR>
            <TD>Cумма займа</TD>
            <TD>{fmtDollars(calculations.СуммаЗайма)}</TD>
          </TR>
          <TR>
            <TD>Первоначальный взнос</TD>
            <TD>{fmtDollars(calculations.ПервоначальныйВзнос)}</TD>
          </TR>
          <TR>
            <TD>Ежемесячный платеж</TD>
            <TD>{fmtDollars(calculations.ЕжемесячныйПлатеж)}</TD>
          </TR>
          <TR>
            <TD>Ставка</TD>
            <TD>{fmtPercent(calculations.Ставка)}</TD>
          </TR>
          <TR>
            <TD>Срок ипотеки</TD>
            <TD>{fmtYears(calculations.ЛетИпотеки)}</TD>
          </TR>
          <TR>
            <TD
              colSpan={isExpandProcessingCosts ? 2 : 1}
              onClick={toggleIsProcessingCostsSpread}
              className={cn(
                'cursor-pointer transition hover:bg-emirocks-violet/5 active:bg-emirocks-violet/20',
                isExpandProcessingCosts && '!border-r-0 border-t-2',
              )}
            >
              <div className={cn('flex justify-between items-center', isExpandProcessingCosts && 'justify-center gap-3')}>
                <span>Расходы по оформлению</span>
                <IconExpandVertical className="text-emirocks-violet size-3" isOpen={isExpandProcessingCosts} />
              </div>
            </TD>
            <TD className={isExpandProcessingCosts ? 'hidden' : undefined}>
              {fmtDollars(calculations.РасходыПоОформлению)}
            </TD>
          </TR>
          <TRTransition className="border-t-2" isShow={isExpandProcessingCosts}>
            <TDExpanded>Комиссия банка за оформление</TDExpanded>
            <TD>{fmtDollars(calculations.КомиссияБанкаЗаОформление)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Оценка недвижимости</TDExpanded>
            <TD>{fmtDollars(calculations.ОценкаНедвижимости)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Регистрация ипотеки</TDExpanded>
            <TD>{fmtDollars(calculations.РегистрацияИпотеки)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Подтверждение права собственности</TDExpanded>
            <TD>{fmtDollars(calculations.ПодтверждениеПраваСобственности)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Нотариальное заверение</TDExpanded>
            <TD>{fmtDollars(calculations.НотариальноеЗаверение)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Страхование жизни</TDExpanded>
            <TD>{fmtDollars(calculations.СтрахованиеЖизни)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Страхование недвижимости</TDExpanded>
            <TD>{fmtDollars(calculations.СтрахованиеНедвижимости)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Земельный налог</TDExpanded>
            <TD>{fmtDollars(calculations.ЗемельныйНалог)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Комиссия агентства недвижимости</TDExpanded>
            <TD>{fmtDollars(calculations.КомиссияАгентстваНедвижимости)}</TD>
          </TRTransition>
          <TRTransition isShow={isExpandProcessingCosts}>
            <TDExpanded>Услуги Emirocks</TDExpanded>
            <TD>{fmtDollars(calculations.УслугиEmirocks)}</TD>
          </TRTransition>
          <TR className="!bg-emirocks-violet text-white font-bold">
            <TD className="border-dashed">Общая сумма всех расходов</TD>
            <TD>{fmtDollars(calculations.ОбщаяСуммаВсехРасходов)}</TD>
          </TR>
        </TBody>
      </Table>
    </div>
  );
}

export function Input({
  className, isAutoWidth, prefix, suffix, maskitoOptions,
  ...props
}: ComponentProps<'input'> & {
  maskitoOptions?: MaskitoOptions,
  isAutoWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}) {
  const maskitoRef = useMaskito({ options: maskitoOptions });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAutoWidth) return;
    const controller = new AbortController();
    const handler = () => {
      const input = inputRef.current;
      if (!input) return;
      const span = document.createElement('span');
      span.className = 'fixed invisible whitespace-pre';
      document.body.appendChild(span);
      span.textContent = input.value;
      input.style.width = `${span.offsetWidth}px`;
      document.body.removeChild(span);
    };
    handler();
    pageReady().then(handler);
    inputRef.current?.addEventListener('input', handler, { signal: controller.signal });
    return () => controller.abort();
  }, [isAutoWidth]);

  const onPenClick = () => inputRef.current?.select();

  return (
    <>
      <div onClick={onPenClick} className={clsx(
        'flex items-center cursor-text select-none rounded-l-lg transition pl-2',
        'bg-emirocks-violet/20',
      )}>
        {prefix}
        <input
          onClick={e => e.stopPropagation()}
          ref={node => {
            maskitoRef(node);
            inputRef.current = node;
          }}
          className={cn(
            'outline-hidden selection:bg-emirocks-gray selection:text-white py-[2px]',
            className,
          )}
          style={{ width: isAutoWidth ? `10px` : undefined }}
          {...props}
        />
        {suffix}
        <div className="ml-2 w-[2px] h-full bg-emirocks-violet rounded-xl" />
      </div>
    </>
  );
}
