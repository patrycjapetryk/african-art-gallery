import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import type { SliceComponentProps } from '@prismicio/react';

import { Heading } from '@/ui/Heading';
import Button from '@/ui/Button';

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const { backgroundImage, title, text, buttonLink } = slice.primary;

  return (
    <section className='relative bg-slate-900 text-white h-[75vh] mb-6 flex p-10'>
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=''
          fill={true}
          className='pointer-events-none select-none object-cover opacity-80'
        />
      )}
      <div className='relative flex flex-col justify-end mb-1'>
        <p className='uppercase text-xs'>{text}</p>
        <Heading as='h1' size='xl' className='-translate-y-4 italic'>
          {title}
        </Heading>

        {isFilled.link(slice.primary.buttonLink) && (
          <PrismicNextLink field={buttonLink}>
            <Button>{buttonLink.text || 'Learn More'}</Button>
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
};

export default Hero;
