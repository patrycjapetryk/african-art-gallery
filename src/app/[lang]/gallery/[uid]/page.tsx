import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asText } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { getLocales } from '@/utils/getLocales';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

type Params = Promise<{ uid: string; lang: string }>;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID('gallery', uid).catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? '' }],
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid, lang } = await params;
  const client = createClient();

  const page = await client
    .getByUID('gallery', uid, {
      lang: (await params).lang,
    })
    .catch(() => notFound());

  const locales = await getLocales(page, client);

  return (
    <>
      <Header locales={locales} lang={lang} />
      <SliceZone
        slices={page.data.slices}
        components={components}
        // context={{
        //   lang: { lang },
        // }}
      />
      ;
      <Footer lang={lang} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('gallery');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
