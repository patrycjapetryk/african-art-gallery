import { type ReactNode } from 'react';

type Props = {
  link: string;
  children: ReactNode;
};

export default function ButtonLink({ link, children }: Props) {
  return (
    <a
      className='leading-2 rounded-xl bg-white px-12 py-[0.75rem] text-sm uppercase text-black transition-opacity hover:opacity-75'
      href={link}
    >
      {children}
    </a>
  );
}
