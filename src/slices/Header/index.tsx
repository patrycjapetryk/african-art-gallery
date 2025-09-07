import { FC } from 'react';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Heading } from '@/ui/Heading';
import { PrismicRichText } from '@/ui/PrismicRichText';
import { Bounded } from '@/ui/Bounded';

export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

const Header: FC<HeaderProps> = ({ slice }) => {
  const { title, text } = slice.primary;
  return (
    <Bounded yPadding='lg' className='text-center mt-10 [&>*]:gap-4'>
      <Heading as='h1' size='xl' className='uppercase'>
        {title}
      </Heading>
      {isFilled.richText(text) && (
        <div className='max-w-[86%] md:max-w-[76%]'>
          <PrismicRichText field={text} />
        </div>
      )}
    </Bounded>
  );
};

export default Header;
