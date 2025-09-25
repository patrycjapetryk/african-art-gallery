import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';

import { Bounded } from '@/ui/Bounded';
import { Heading } from '@/ui/Heading';
import { ConditionalWrap } from '@/ui/ConditionalWrap';
import { Button } from '@/ui/Button';

type ItemProps = {
  news: Content.NewsSliceDefaultPrimaryNewsItem;
};

const NewsCard: FC<ItemProps> = ({ news }) => {
  const { image, title, text, link } = news;

  return (
    <li className='grid'>
      {isFilled.image(image) && (
        <ConditionalWrap
          condition={isFilled.link(link)}
          wrap={({ children }) => (
            <PrismicNextLink field={link} tabIndex={-1}>
              {children}
            </PrismicNextLink>
          )}
        >
          <PrismicNextImage field={image} sizes='100vw' className='w-full' alt='' />
        </ConditionalWrap>
      )}
      <Heading as='h3' size='xs' className='my-1'>
        {title}
      </Heading>
      <p className='text-sm'>{text || ''}</p>

      {isFilled.link(news.link) && (
        <PrismicNextLink field={link} className='text-xs uppercase'>
          {link.text || 'Zobacz'}
        </PrismicNextLink>
      )}
    </li>
  );
};

export type NewsProps = SliceComponentProps<Content.NewsSlice>;

const News: FC<NewsProps> = ({ slice }) => {
  const { news, title, link } = slice.primary;

  return (
    <Bounded as='section'>
      <div className='grid gap-10 w-full'>
        {isFilled.keyText(title) && (
          <Heading as='h2' className='text-center'>
            {title}
          </Heading>
        )}

        <ul className='grid grid-cols-2 items-start gap-y-8 gap-x-4 md:gap-4 md:grid-cols-4'>
          {news.map((item) => (
            <NewsCard key={item.image.url} news={item} />
          ))}
        </ul>

        {isFilled.link(link) && (
          <div className='flex justify-center mt-4'>
            <PrismicNextLink field={link}>
              <Button>{link.text || 'Zobacz'}</Button>
            </PrismicNextLink>
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default News;
