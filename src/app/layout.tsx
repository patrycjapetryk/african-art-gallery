import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';
import { univers, ivymode } from './fonts';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${univers.variable} ${ivymode.variable} scroll-smooth`}>
      <body className='font-sans overflow-x-hidden antialiased text-aag-black'>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
