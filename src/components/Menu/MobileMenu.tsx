import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import Navigation from '@/components/Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import SocialMediaNavigation from '../SocialMediaNavigation/SocialMediaNavigation';

type Props = ComponentProps<'div'>;

export default function DesktopMenu({ className, ...spread }: Props) {
  return (
    <div className={cn('flex w-full justify-end items-center gap-4', className)} {...spread}>
      <Navigation />
      <SearchBar />
      <SocialMediaNavigation />
      <LanguageSwitcher />
    </div>
  );
}
