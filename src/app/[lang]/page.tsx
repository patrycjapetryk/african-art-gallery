import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asText } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { getLocales } from '@/utils/getLocales';
import Header from '@/components/Header/Header';

type Params = Promise<{ uid: string; lang: string }>;

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('page', 'home').catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? '' }],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('page', 'home', {
      lang: (await params).lang,
    })
    .catch(() => notFound());
  const locales = await getLocales(page, client);

  return (
    <>
      <Header locales={locales} />
      <SliceZone slices={page.data.slices} components={components} />;
    </>
  );
}
