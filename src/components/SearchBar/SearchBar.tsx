import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className='h-10 flex gap-2 w-60 justify-end'>
      <Image src='/images/search-icon.svg' alt='Search icon' width={16} height={16} priority />

      <div className=''>
        <label htmlFor='search' className='hidden'>
          Szukaj
        </label>
        <input className='border-b border-b-black p-1 w-28' type='text' id='search' name='search' />
      </div>
    </div>
  );
}
