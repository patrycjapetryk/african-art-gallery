import Logo from '@/ui/Logo';
import Menu from '@/components/Menu/Menu';

export default function Header() {
  return (
    <header className='w-full'>
      <div className='m-auto flex w-full max-w-screen-3xl items-center justify-between py-6 md:px-[5%] md:pt-4 md:pb-3 md:pl-0 lg:pl-10 xl:px-[7%] 2xl:px-[10%]'>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}
