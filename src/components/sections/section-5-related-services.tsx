'use client';

import { Container } from '@/components/Container';
import { Button } from '@/components/ui/Button';
import { IconSolarPhoneBold } from '@/components/icons/IconSolarPhoneBold';
import { Title } from '@/components/ui/Title';
import { HeadingIdEnum } from '@/constants/selectors';
import type { ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import { RunningLine } from '@/components/ui/RunningLine';
import { modalConsultationOpen } from '@/components/ModalConsultation/modal-consultation.store';


export function Section5RelatedServices() {
  return (
    <>
      <RunningLine parts={RUN_LINE_TEXTS} />
      <Container>
        <Title id={HeadingIdEnum.Services}>Другие услуги</Title>
        <div className="mt-emirocks-md grid grid-cols-5 gap-emirocks-sm lg:gap-7 max-lg:flex max-lg:flex-wrap max-lg:[&>div]:grow">
          <Card variant="violet" className="col-span-5">
            <CardTitle>Поиск недвижимости с помощью искусственного интеллекта</CardTitle>
            <CardDescription>непредвзятый анализ всех предложений первичной и вторичной недвижимости ОАЭ, отбор лучших объектов по заданным критериям, совершение сделок с лучшими комиссиями</CardDescription>
          </Card>
          <Card variant="gray" className="col-span-3">
            <CardTitle>ВНЖ</CardTitle>
            <CardDescription>разрешение на постоянное проживание, ведение бизнеса, трудоустройство, открытие счетов, получение кредитов, доступ к услугам всех инстанций</CardDescription>
            <Button onClick={modalConsultationOpen} color="violet" className="self-end">
              Получить консультацию
              <IconSolarPhoneBold />
            </Button>
          </Card>
          <Card variant="milk" className="col-span-2">
            <CardTitle>Флиппинг</CardTitle>
            <CardDescription>поиск ликвидной изношенной недвижимости для покупки в ипотеку, организация ремонтных работ, сдача в аренду или перепродажа</CardDescription>
          </Card>
          <Card variant="green" className="col-span-2">
            <CardTitle>Компания в ОАЭ</CardTitle>
            <CardDescription>регистрация местной (в обычной или свободной зоне) или оффшорной компании</CardDescription>
          </Card>
          <Card variant="white" className="col-span-3">
            <CardTitle>Банковские счета</CardTitle>
            <CardDescription>для физических и юридических лиц</CardDescription>
            <Button onClick={modalConsultationOpen} color="violet" className="self-end">
              Получить консультацию
              <IconSolarPhoneBold />
            </Button>
          </Card>
          <Card variant="milk" className="col-span-3">
            <CardTitle>Сопровождение бизнеса</CardTitle>
            <CardDescription>администрирование, бухгалтерский и налоговый учет, оформление лицензий, таможенная очистка, решение сложных задач</CardDescription>
          </Card>
          <Card variant="gray" className="col-span-2">
            <CardTitle>Налоговое резидентство</CardTitle>
            <CardDescription>получение сертификата налогового резидента для физических и юридических лиц</CardDescription>
          </Card>
          <Card variant="green" className="col-span-5">
            <CardTitle>Платежный агент</CardTitle>
            <CardDescription>международные платежи в фиате и криптовалюте для бизнеса и личных целей</CardDescription>
          </Card>
        </div>
      </Container>
    </>
  );
}


function Card({ className, variant, ...props }: ComponentProps<'div'> & { variant?: 'white' | 'gray' | 'violet' | 'green' | 'milk' }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 justify-around rounded-emirocks py-5 px-8 lg:py-5 lg:px-10', {
          'border border-gray-300': !variant || variant === 'white',
          'bg-emirocks-gray text-white': variant === 'gray',
          'bg-emirocks-violet text-white': variant === 'violet',
          'bg-emirocks-green': variant === 'green',
          'bg-emirocks-milk': variant === 'milk',
        }, className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-3xl font-bold', className)} {...props} />
  );
}

function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cn(className)} {...props} />
  );
}

const RUN_LINE_TEXTS = [
  'ВНЖ',
  'Флиппинг',
  'Компания в ОАЭ',
  'Банковские счета',
  'Сопровождение бизнеса',
  'Налоговое резидентство',
  'Платежный агент',
];
