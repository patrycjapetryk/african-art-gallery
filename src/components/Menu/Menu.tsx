import DesktopMenu from './DesktopMenu';
// import MobileMenu from './MobileMenu';

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
}

export default function Menu({ locales }: LanguageSwitcherProps) {
  return (
    <>
      <DesktopMenu locales={locales} />
      {/* <DesktopMenu className='hidden lg:flex' /> */}
      {/* <MobileMenu className='lg:hidden' /> */}
    </>
  );
}
