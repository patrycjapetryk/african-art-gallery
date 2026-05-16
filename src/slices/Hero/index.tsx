'use client';

import { FC, useEffect, useState } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import type { SliceComponentProps } from '@prismicio/react';

import { Heading } from '@/ui/Heading';
import { Button } from '@/ui/Button';

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const { title, text, buttonLink, photos } = slice.primary;

  // 🔥 bierzemy zdjęcia z grupy
  const images = (photos ?? []).map((item) => item.image).filter(isFilled.image);

  const [current, setCurrent] = useState(0);
  const isSlider = images.length > 1;

  useEffect(() => {
    if (!isSlider) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isSlider, images.length]);

  if (!isFilled.link(buttonLink) || images.length === 0) return null;

  return (
    <section className='relative bg-slate-900 text-white h-[89vh] mb-6 flex overflow-hidden'>
      <PrismicNextLink field={buttonLink} className='flex w-full p-10 relative'>
        {/* BACKGROUND IMAGES */}
        <div className='absolute inset-0'>
          {images.map((image, i) => {
            const active = i === current;

            return (
              <PrismicNextImage
                key={i}
                field={image}
                alt=''
                fill
                priority={i === 0}
                className={`
                  object-cover
                  ${isSlider ? 'transition-opacity duration-1000' : ''}
                  ${isSlider ? (active ? 'opacity-80' : 'opacity-0') : 'opacity-80'}
                `}
              />
            );
          })}
        </div>

        {/* CONTENT */}
        <div className='relative z-10 w-full flex flex-col justify-between items-center mb-1'>
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
    </section>
  );
};

export default Hero;
