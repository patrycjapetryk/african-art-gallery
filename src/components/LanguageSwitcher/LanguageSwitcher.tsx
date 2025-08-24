import Image from 'next/image';

export default function LanguageSwitcher() {
  return (
    <div className='text-sm uppercase w-30 flex justify-end'>
      Polski
      <Image
        src='/images/down-arrow-icon.svg'
        alt=''
        width={12}
        height={6}
        className='ml-4'
        priority
      />
    </div>
  );
}
