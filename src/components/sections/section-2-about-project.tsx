import { Title2, Title } from '../ui/Title';
import { Container } from '@/components/Container';
import { HeadingIdEnum, ElementIdEnum } from '@/constants/selectors';
import { PictureContainer } from '@/components/PictureContainer';
import { PUBLIC } from '@/backbone/public';
import { STATISTICS } from '@/constants/STATISTICS';
import { Tabs, TabList, Tab, TabContents, TabContent } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';


export function Section2AboutProject() {
  return (
    <Container>
      <Title id={HeadingIdEnum.AboutProject}>EMIROCKS</Title>
      <p className="sm:text-justify mt-emirocks-sm">
        <b>Профессиональные агентские и консалтинговые услуги</b>{' '}на территории ОАЭ. Реализуем самую прибыльную стратегию инвестирования в
        недвижимость с помощью ипотечного плеча. Повысим доходность инвестиций в 3 раза. Оформим золотую визу дешевле в 3 раза. Компетентно организуем
        ведение вашего бизнеса в ОАЭ и закроем все потребности по личному статусу.
      </p>

      <div className="mt-emirocks-md md:w-max mx-auto grid gap-emirocks-sm md:gap-emirocks-md grid-cols-1 md:grid-cols-[auto_1fr_auto] text-center">
        {STATISTICS.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-bold text-5xl sm:text-6xl text-emirocks-violet">{item.title}</span>
            <span className="text-balance">
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>

      <PictureContainer
        src={PUBLIC.centralBankOfUaeFilter}
        alt="Central Bank of UAE"
        isPictureRight

        imgClassName="object-right"
      >
        <Title2 id={ElementIdEnum.OurAdvantages} className="col-span-full mb-emirocks-sm">Наши преимущества вне конкуренции в ОАЭ</Title2>

        <Tabs scrollUpTargetId={ElementIdEnum.OurAdvantages} scrollUpFn={navScroll}>
          <TabList>
            <Tab>Фундаментальные</Tab>
            <Tab>Операционные</Tab>
          </TabList>
          <TabContents>
            <TabContent className="sm:text-justify">
              <p>
                Сервисом управляют коренные жители ОАЭ (local residents) с длительным стажем работы на руководящих должностях в крупных банках страны,
                которые имеют глубокое понимание функционирования банковской системы и обеспечивают премиальное обслуживание ипотечных заявок наших
                клиентов
              </p>
              <p>
                Работаем со всеми банками во всех эмиратах ОАЭ
              </p>
              <p>
                Берем в работу кейсы любой сложности и всегда находим пути решения
              </p>
              <p>
                Получаем максимально выгодные ипотечные условия
              </p>
              <p>
                Благодаря высокому профессионализму и безупречной репутации команды статистика отказов в предоставлении ипотеки нашим клиентам
                ничтожно мала или практически равна нулю
              </p>
            </TabContent>
            <TabContent className="sm:text-justify">
              <p>
                Услуги предоставляются на основании официального договора, который заключается в юрисдикции РФ, что значительно повышает и упрощает
                возможности клиента по защите своих прав и законных интересов
              </p>
              <p>
                По желанию клиента договор может быть заключен в юрисдикции ОАЭ
              </p>
              <p>
                Услуги предоставляются «под ключ» с юридической гарантией возврата клиенту внесенной предоплаты в случае отказа банка в выдаче ипотеки
              </p>
              <p>
                Любые способы оплаты услуг - безналичные платежи (в банки РФ или ОАЭ), наличные, чеки, криптовалюта (обменник ОАЭ выдает специальный
                чек)
              </p>
              <p>
                Оплата услуг в рассрочку (70-80% платежей вносится после одобрения ипотеки)
              </p>
              <p>
                Срок подготовки ипотечной заявки - 3 месяца / срок одобрения ипотеки - 14 дней
              </p>
              <p>
                Представляем интересы клиента в банке до погашения ипотеки
              </p>
            </TabContent>
          </TabContents>
        </Tabs>
      </PictureContainer>
    </Container>
  );
}
