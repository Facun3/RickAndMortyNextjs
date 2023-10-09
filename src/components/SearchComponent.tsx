'use client'

import { useAppContext } from '@/context/AppContext'
import { useEffect } from 'react'
import { useDebounce } from 'use-debounce'

const SearchComponent = () => {

  const { search, updateSearch } = useAppContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    updateSearch(searchText);
  };
  
  return (
    <div className='relative rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='h-5 w-5 text-gray-400' aria-hidden='true'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      <input
        value={search}
        placeholder={`Search`}
        onChange={handleSearchChange}
        className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
      />
    </div>
  )
}

export default SearchComponent