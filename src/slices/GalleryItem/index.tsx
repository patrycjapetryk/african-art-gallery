import { FC } from 'react';
import { Content, isFilled } from '@prismicio/client';
import { PrismicRichText, PrismicText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import Image from 'next/image';

import { Bounded } from '@/ui/Bounded';
import { Heading } from '@/ui/Heading';
import { Button } from '@/ui/Button';

export type GalleryItemProps = SliceComponentProps<Content.GalleryItemSlice>;

const GalleryItem: FC<GalleryItemProps> = ({ slice }) => {
  const { image, heading, description, text, pdfLink, leftArrow, rightArrow } = slice.primary;

  return (
    <Bounded as='section'>
      <div className='flex flex-col gap-5 w-full items-center justify-center'>
        <div className='flex items-center justify-center'>
          <PrismicNextLink field={leftArrow} className='flex justify-center w-30'>
            <Image src='/images/left-arrow.svg' alt='Search icon' width={16} height={16} priority />
          </PrismicNextLink>

          <div className='w-md'>
            <PrismicNextImage field={image} sizes='100vw' className='w-full' alt='' />
          </div>

          <PrismicNextLink field={rightArrow} className='flex justify-center w-30'>
            <Image
              src='/images/right-arrow.svg'
              alt='Search icon'
              width={16}
              height={16}
              priority
            />
          </PrismicNextLink>
        </div>
        {isFilled.richText(heading) && (
          <Heading className='text-center italic'>
            <PrismicText field={heading} />
          </Heading>
        )}
        {isFilled.richText(description) && (
          <div className='text-center -mt-4 text-xs uppercase'>
            <PrismicRichText field={description} />
          </div>
        )}
        {/* <div className='text-center'>
          <PrismicRichText field={text} />
        </div> */}
        {isFilled.link(pdfLink) && (
          <div className='mt-10'>
            <PrismicNextLink field={pdfLink} className='font-semibold'>
              <Button variant='third'>{pdfLink.text || 'More Info'}</Button>
            </PrismicNextLink>
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default GalleryItem;
