import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export default async function Logo() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <PrismicNextLink href='/' className='text-xl font-semibold tracking-tight'>
      <PrismicNextImage field={settings.data.logo_image} />
    </PrismicNextLink>
  );
}
