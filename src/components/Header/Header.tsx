import { Logo } from '@/ui/Logo';
import Menu from '@/components/Menu/Menu';

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
  lang: string;
}

type Props = LanguageSwitcherProps;

export default function Header({ locales, lang }: Props) {
  return (
    <header className='w-full'>
      <div className='flex w-full items-center justify-between gap-2 px-4 md:px-[7.5%] py-6 md:pt-4 md:pb-3'>
        <Logo lang={lang} />
        <Menu locales={locales} lang={lang} />
      </div>
    </header>
  );
}
