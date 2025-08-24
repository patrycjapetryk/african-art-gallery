import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { createClient } from '@/prismicio';

export default async function SocialMediaNavigation() {
  const client = createClient();

  const navigation = await client.getSingle('social_media_navigation');

  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex gap-7 items-center justify-center w-60'>
        {navigation.data?.navigation_item.map((item) => (
          <li key={item.label}>
            <PrismicNextLink field={item.link}>
              <PrismicNextImage field={item.icon} />
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
