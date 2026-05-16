import { asText } from '@prismicio/client';
import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';

type Props = { lang: string };

export default async function Navigation({ lang }: Props) {
  const client = createClient();

  const navigation = await client.getSingle('navigation', {
    lang,
  });

  return (
    <nav className='flex w-full items-center justify-center'>
      <ul className='flex gap-8 rounded-xl px-12 py-3 transition-all duration-300'>
        {navigation.data?.links.map((item) => (
          <li key={asText(item.label)} className='text-sm uppercase'>
            <PrismicNextLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
