import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export async function Logo() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <PrismicNextLink href='/' className='ml-0.5 w-48'>
      <PrismicNextImage field={settings.data.logo_image} />
    </PrismicNextLink>
  );
}
