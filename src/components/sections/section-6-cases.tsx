import { Container } from '@/components/Container';
import { Carousel } from '@/components/ui/Carousel/Carousel';
import { CarouselItem } from '@/components/ui/Carousel/CarouselItem';
import { CASES } from '@/constants/CASES';
import type { CaseItem } from '@/types';
import { HeadingIdEnum } from '@/constants/selectors';
import { RunningLine } from '@/components/ui/RunningLine';
import { Title } from '@/components/ui/Title';
import { fmtPower } from '@/utils/fmt';


export function Section6Cases() {
  return (
    <>
      <RunningLine parts={RUN_LINE_TEXTS} />
      <Container>
        <Title id={HeadingIdEnum.Cases}>Кейсы</Title>
        <Carousel
          isAutoHeight
          options={{ loop: true }}
          className="[--slide-size:100%] [--slide-spacing:calc(var(--spacing)*5)]"
          containerClassName="items-start transition-[height] mt-emirocks-md"
        >
          {CASES.map((caseItem, i) => (
            <CarouselItem key={i}>
              <CaseElement caseItem={caseItem} number={i + 1} />
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

function CaseElement({ caseItem, number }: { caseItem: CaseItem, number: number }) {
  return (
    <div className="space-y-5">
      <div>
        <div className="rounded-t-emirocks flex items-center justify-between gap-3 px-5 py-4 text-3xl font-bold bg-emirocks-violet text-white">
          {caseItem.tasks.length > 1 ? 'Задачи' : 'Задача'}
          <span className="text-base px-2 py-1 bg-black/10 rounded-full text-white font-normal">
            #{number.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="bg-gray-200 rounded-b-emirocks px-5 py-4">
          <ul className="list-disc pl-4 space-y-1">
            {caseItem.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-emirocks overflow-hidden bg-gray-200">
        <div className="px-5 py-4 text-3xl font-bold bg-emirocks-green">Результат</div>
        <div className="flex flex-col justify-around lg:justify-between px-5 py-4 space-y-3">
          <ul className="list-disc pl-4 flex flex-col gap-1 whitespace-pre-wrap">
            {caseItem.result.map((task, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: fmtPower(task) }} />
            ))}
          </ul>
          <p className="font-bold">{caseItem.deadline}</p>
        </div>
      </div>
    </div>
  );
}

const RUN_LINE_TEXTS = [
  'Ипотека для проживания',
  'Ипотека для инвестиций',
  'Ипотека для погашения рассрочки',
  'Ипотека для покупки 3 объектов вместо 1',
  'Ипотека для реновации',
  'Самое выгодное получение золотой визы',
  'Продажа непогашенной ипотеки и покупка новой',
];
