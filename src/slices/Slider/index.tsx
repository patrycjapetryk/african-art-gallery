import { FC } from 'react';
import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';

export type SliderProps = SliceComponentProps<Content.SliderSlice>;

const Slider: FC<SliderProps> = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <section className='relative h-[90vh] mb-8'>
      {isFilled.image(image) && (
        <PrismicNextImage
          field={image}
          fill={true}
          className='pointer-events-none select-none object-cover'
        />
      )}
    </section>
  );
};

export default Slider;
