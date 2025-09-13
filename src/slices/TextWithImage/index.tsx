import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { Bounded } from '@/ui/Bounded';
import { PrismicRichText } from '@/ui/PrismicRichText';
import { Heading } from '@/ui/Heading';

type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  const { image, title, text } = slice.primary;

  return (
    <Bounded as='section'>
      <article className='w-full max-w-[95%] md:max-w-[72%] text-justify flex flex-col gap-10'>
        {isFilled.keyText(title) && (
          <Heading as='h2' className='text-center'>
            {title}
          </Heading>
        )}
        <div>
          {isFilled.image(image) && (
            <div className='bg-gray-100 float-left w-40 mr-6 mb-4 translate-y-1.5'>
              <PrismicNextImage field={image} sizes='100vw' className='w-full' alt='' />
            </div>
          )}
          <PrismicRichText field={text} />
        </div>
      </article>
    </Bounded>
  );
};

export default TextWithImage;
