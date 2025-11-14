import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import type { SliceComponentProps } from '@prismicio/react';

import { Heading } from '@/ui/Heading';
import { Button } from '@/ui/Button';

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const { backgroundImage, title, text, buttonLink } = slice.primary;

  return (
    <section className='relative bg-slate-900 text-white h-[75vh] mb-6 flex'>
      {isFilled.image(backgroundImage) && isFilled.link(buttonLink) && (
        <PrismicNextLink field={buttonLink} className='flex w-full p-10'>
          <PrismicNextImage
            field={backgroundImage}
            alt=''
            fill={true}
            className='pointer-events-none select-none object-cover opacity-80'
          />
          <div className='relative w-full flex flex-col justify-between items-center mb-1'>
            <div className='self-end max-w-[700px] text-right mr-4 -mt-1'>
              <p className='uppercase text-xs'>{text}</p>
              <Heading as='h1' size='xl' className='italic'>
                {title}
              </Heading>
            </div>
            <div>
              <Button>{buttonLink.text || 'Learn More'}</Button>
            </div>
          </div>
        </PrismicNextLink>
      )}
    </section>
  );
};

export default Hero;
