import { Container } from '@/components/Container';
import { Title } from '@/components/ui/Title';
import { HeadingIdEnum } from '@/constants/selectors';
import { fmtDollars } from '@/utils/fmt';
import { RunningLine } from '@/components/ui/RunningLine';
import imgRockGreen from '@/assets/rock-green.svg';
import { PictureContainer } from '@/components/PictureContainer';
import { PUBLIC } from '@/backbone/public';
import { Img } from '@/components/ui/Img';
import { ListDots } from '@/components/ui/List';
import { TabList, Tab, TabContents, Tabs, TabContent } from '@/components/ui/Tabs/Tabs';
import { navScroll } from '@/utils/nav-scroll';


export function Section4GoldenVisa() {
  return (
    <>
      <RunningLine parts={RUN_LINE_TEXTS} />
      <Container>
        <PictureContainer
          src={PUBLIC.bugattiInBusinessBayFilter}
          alt="Bugatti in Business Bay"
        >
          <Title id={HeadingIdEnum.GoldenVisa} className="col-span-full flex justify-center items-center gap-3 h-min antialiased">
            <Img src={imgRockGreen.src} width={463} height={512} alt="" className="size-10" />
            Золотая виза
          </Title>

          <p className="col-span-full my-emirocks-sm text-center text-lg font-bold text-balance">С ипотекой золотая виза дешевле в 3 раза</p>

          <Tabs scrollUpTargetId={HeadingIdEnum.GoldenVisa} scrollUpFn={navScroll}>
            <TabList className="max-lg:justify-center">
              <Tab>Золотая</Tab>
              <Tab>Обычная</Tab>
              <Tab>Оформление</Tab>
            </TabList>
            <TabContents>
              <TabContent>
                <ListDots>
                  <li>Срок действия: до 10 лет с возможностью продления</li>
                  <li>Можно находиться за пределами ОАЭ свыше 6 мес</li>
                  <li>Многократный въезд и выезд без ограничений</li>
                  <li>Визу получают все члены семьи</li>
                  <li>Семейное спонсорство</li>
                  <li>Отсутствие личных налогов</li>
                  <li>Привилегии для банковских продуктов</li>
                  <li>Привилегии для ведения бизнеса</li>
                  <li>Привилегии в области медицины и мед страхования</li>
                  <li>Привилегии в области образования</li>
                  <li>Карта привилегий Esaad в разных сферах жизни</li>
                </ListDots>
              </TabContent>
              <TabContent>
                <ListDots>
                  <li>Срок действия: до 2 лет</li>
                  <li>Можно находиться за пределами ОАЭ не более 6 мес</li>
                  <li>Въезд и выезд регламентирован</li>
                  <li>Члены семьи получают визу при наличии критериев</li>
                  <li>Семейное спонсорство в некоторых случаях</li>
                  <li>Общие условия налогообложения</li>
                  <li>Общие условия банковских продуктов</li>
                  <li>Общие условия для ведения бизнеса</li>
                  <li>Общие условия в области медицины и мед страхования</li>
                  <li>Общие условия в области образования</li>
                  <li>Отсутствие дополнительных привилегий</li>
                </ListDots>
              </TabContent>
              <TabContent>
                <ListDots>
                  <li>{fmtDollars('Минимальная сумма всех инвестиций в недвижимость от 550 000 $')}</li>
                  <li>{fmtDollars('Сумма займа должна быть не менее 550 000 $')}</li>
                  <li>{fmtDollars('Первоначальный взнос в размере 50% отменен')}</li>
                  <li>{fmtDollars('Стоимость ипотечной недвижимости не менее 687 500 $')}</li>
                  <li>{fmtDollars('Расходы по ипотеке и первоначальный платеж 229 780 $')}</li>
                  <li>{fmtDollars('С ипотекой золотая виза дешевле на 320 000 $ (-60%)')}</li>
                </ListDots>
              </TabContent>
            </TabContents>
          </Tabs>
        </PictureContainer>
      </Container>
    </>
  );
}

const RUN_LINE_TEXTS = [
  'Срок визы 10 лет',
  'Неоднократное продление',
  'Для всех членов семьи',
  'Въезд/выезд на любой срок',
  'Особый личный статус',
  'Привилегии во всех сферах жизни',
  'Лучшее образование, медицина, банкинг, налоги',
];
