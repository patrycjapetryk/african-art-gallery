import { FC } from 'react';
import { type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Heading } from '@/ui/Heading';
import { Bounded } from '@/ui/Bounded';

export type FooterProps = SliceComponentProps<Content.FooterSlice>;

const Footer: FC<FooterProps> = ({ slice }) => {
  const phone = slice.primary.phone[0];
  const email = slice.primary.email[0];
  const address = slice.primary.address[0];
  const socialMedia = slice.primary.socialMedia[0];
  const openingHours = slice.primary.openingHours[0];

  return (
    <Bounded as='footer' yPadding='lg' className='mt-24'>
      <ul className='grid md:grid-cols-5 gap-4 md:text-xs'>
        <li>
          <Heading as='h3' size='xs' className='mb-2'>
            {phone?.title || ''}
          </Heading>
          <p>{phone?.text || ''}</p>
        </li>
        <li>
          <Heading as='h3' size='xs' className='mb-2'>
            {email?.title || ''}
          </Heading>
          {email?.text && <a href={`mailto:${email?.text}`}>{email?.text}</a>}
        </li>
        <li>
          <Heading as='h3' size='xs' className='mb-2'>
            {address?.title || ''}
          </Heading>
          <p>{address?.address1 || ''}</p>
          <p>{address?.address2 || ''}</p>
        </li>
        <li>
          <Heading as='h3' size='xs' className='mb-2'>
            {socialMedia?.title || ''}
          </Heading>
        </li>
        <li>
          <Heading as='h3' size='xs' className='mb-2'>
            {openingHours?.title}
          </Heading>
          <p>{openingHours?.hours1 || ''}</p>
          <p>{openingHours?.hours2 || ''}</p>
        </li>
      </ul>
    </Bounded>
  );
};

export default Footer;
