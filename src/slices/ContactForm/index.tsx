import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Form } from './Form';
import { Bounded } from '@/ui/Bounded';

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm: FC<ContactFormProps> = () => {
  return (
    <Bounded as='section'>
      <Form />
    </Bounded>
  );
};

export default ContactForm;
