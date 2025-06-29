import localFont from 'next/font/local';

export const univers = localFont({
  src: [
    {
      path: '../../public/fonts/univers-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/univers-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-univers',
});

export const ivymode = localFont({
  src: [
    {
      path: '../../public/fonts/ivymode-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ivymode-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-ivymode',
});
