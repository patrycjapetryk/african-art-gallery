import DesktopMenu from './DesktopMenu';
// import MobileMenu from './MobileMenu';

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
  lang: string;
}

export default function Menu({ locales, lang }: LanguageSwitcherProps) {
  return (
    <>
      <DesktopMenu locales={locales} lang={lang} />
      {/* <DesktopMenu className='hidden lg:flex' /> */}
      {/* <MobileMenu className='lg:hidden' /> */}
    </>
  );
}
