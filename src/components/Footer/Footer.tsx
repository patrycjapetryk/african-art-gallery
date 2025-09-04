import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';

import { components } from '@/slices';

export default async function Footer() {
  const client = createClient();

  const footer = await client.getSingle('footer');

  return (
    <footer>
      <SliceZone slices={footer.data.slices} components={components} />
    </footer>
  );
}
