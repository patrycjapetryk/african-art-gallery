import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className='h-10 flex gap-2 w-64 justify-center'>
      <Image src='/images/search-icon.svg' alt='Search icon' width={16} height={16} priority />

      <div className='flex items-center'>
        <label htmlFor='search' className='hidden'>
          Szukaj
        </label>
        <input
          className='border border-gray-400 p-1 w-28 h-7 rounded-xs'
          type='text'
          id='search'
          name='search'
        />
      </div>
    </div>
  );
}
