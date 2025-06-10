'use client';

import { Container } from '@/components/Container';
import { Title } from '@/components/ui/Title';
import { clsx } from 'clsx';
import { HeadingIdEnum } from '@/constants/selectors';
import { Img } from '@/components/ui/Img';
import { imgProps, sourceProps } from '@/utils/img-utils';
import { useTranslations } from 'next-intl';
import { PUBLIC } from '@/backbone/public';
import type MessagesRU from '@/i18n/messages/ru';


export function Section6Articles() {
  const t = useTranslations('articles');
  const articles = t.raw('list') as typeof MessagesRU['articles']['list'];

  return (
    <Container>
      <Title id={HeadingIdEnum.Articles}>{t('title')}</Title>
      <div className={clsx('grid md:grid-cols-2 ~md:grid-cols-3 gap-3 mt-space-sm', 'lg:w-2/3 lg:mx-auto')}>
        {articles.map((article, i) => {
          // const isLast = i === ARTICLES.length - 1;
          return (
            <a
              className={clsx(
                'group flex flex-col rounded-radius-md overflow-hidden',
                // isLast && 'sm:max-md:col-span-full sm:max-md:w-1/2 sm:max-md:mx-auto',
              )}
              key={article.url}
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='relative overflow-hidden aspect-video w-full rounded-t-radius-md'>
                <picture>
                  <source{...sourceProps(IMAGES[i]!.webp)} sizes='100vw' />
                  <Img
                    {...imgProps(IMAGES[i]!.jpeg)}
                    alt=''
                    className='absolute inset-0 size-full object-cover group-hover:scale-105 transition duration-500'
                  />
                </picture>
              </div>
              <span className='grow px-4 py-2 flex flex-col justify-around border-x border-b border-gray-300 rounded-b-radius-md'>
                <span className='text-lg line-clamp-3'>{article.title}</span>
                <span className='text-gray-500 line-clamp-2'>{article.textStart}</span>
                <span className='text-gray-500 mt-3 ml-auto text-sm'>
                  {article.date}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </Container>
  );
}

const IMAGES = [
  PUBLIC.images.articles.img1,
  PUBLIC.images.articles.img2,
];
