import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import type { SliceComponentProps } from '@prismicio/react';

import { Bounded, Heading, Button } from '@/ui';

export type ExhibitionProps = SliceComponentProps<Content.ExhibitionSlice>;

const Exhibition: FC<ExhibitionProps> = ({ slice }) => {
  const { backgroundImage, title, name, buttonLink, date } = slice.primary;

  return (
    <Bounded as='section' className='[&>*]:grid [&>*]:gap-10'>
      <Heading as='h2' className='text-center'>
        {title || ''}
      </Heading>

      <div className='text-white relative bg-slate-900'>
        {isFilled.image(backgroundImage) && (
          <PrismicNextImage
            field={backgroundImage}
            fill={true}
            fallbackAlt=''
            className='pointer-events-none select-none object-cover opacity-60 w-full'
          />
        )}
        <Bounded yPadding='xl' className='relative'>
          <div className='grid justify-items-center gap-8'>
            <div className='max-w-2xl text-center'>
              <Heading as='h3' size='xl' className='italic'>
                {name || ''}
              </Heading>
              <p> {date || ''}</p>
            </div>
            {isFilled.link(buttonLink) && (
              <PrismicNextLink field={buttonLink}>
                <Button variant='secondary'>{buttonLink.text || 'See more'}</Button>
              </PrismicNextLink>
            )}
          </div>
        </Bounded>
      </div>
    </Bounded>
  );
};

export default Exhibition;
