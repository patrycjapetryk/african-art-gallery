import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import Navigation from '@/components/Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import SocialMediaNavigation from '../SocialMediaNavigation/SocialMediaNavigation';

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
  lang: string;
}

type Props = ComponentProps<'div'> & LanguageSwitcherProps;

export default function DesktopMenu({ className, locales, lang, ...spread }: Props) {
  return (
    <div className={cn('flex w-full justify-end items-center', className)} {...spread}>
      <Navigation lang={lang} />
      <SearchBar />
      <SocialMediaNavigation />
      <LanguageSwitcher locales={locales} />
    </div>
  );
}
