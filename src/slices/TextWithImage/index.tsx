import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import clsx from 'clsx';

import { Bounded } from '@/ui/Bounded';
import { PrismicRichText } from '@/ui/PrismicRichText';

type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as='section' yPadding='lg' className='bg-white'>
      <div
        className={clsx(
          'w-full flex gap-8 md:gap-14',
          slice.variation === 'leftImage' && 'flex-row-reverse',
        )}
      >
        <div className='w-full md:w-[68%] md:-translate-y-3'>
          <PrismicRichText field={slice.primary.text} />
        </div>

        <div className='w-full md:w-[32%]'>
          {isFilled.image(image) && (
            <div className='bg-gray-100'>
              <PrismicNextImage field={image} sizes='100vw' className='w-full' alt='' />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
