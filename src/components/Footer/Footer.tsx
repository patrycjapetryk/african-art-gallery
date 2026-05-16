import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';

import { components } from '@/slices';

type Props = { lang: string };

export default async function Footer({ lang }: Props) {
  const client = createClient();

  const footer = await client.getSingle('footer', {
    lang,
  });

  return (
    <footer>
      <SliceZone slices={footer.data.slices} components={components} />
    </footer>
  );
}
