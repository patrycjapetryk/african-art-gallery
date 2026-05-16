import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

type Props = { lang: string };

export async function Logo({ lang }: Props) {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <PrismicNextLink href={'/' + lang} className='ml-0.5 w-48'>
      <PrismicNextImage field={settings.data.logo_image} />
    </PrismicNextLink>
  );
}
