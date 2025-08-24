import { type ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import ButtonLanguage from '@/ui/ButtonLanguage';
import Navigation from '@/ui/Navigation';
import SocialMediaNavigation from '@/ui/SocialMediaNavigation';
import SearchBar from '@/ui/SearchBar';

import { menuData } from './menuData';

type Props = ComponentProps<'div'>;

export default function DesktopMenu({ className, ...spread }: Props) {
  const { menuItems, menuLanguage, menuSocialMedia } = menuData;
  const { label } = menuLanguage;

  return (
    <div className={cn('flex w-full justify-end', className)} {...spread}>
      <Navigation menuItems={menuItems} />
      <SearchBar />
      <SocialMediaNavigation menuSocialMedia={menuSocialMedia} />
      <ButtonLanguage>{label}</ButtonLanguage>
    </div>
  );
}
