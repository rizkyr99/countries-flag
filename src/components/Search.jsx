import React from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from '../features/search/searchSlice';

const Search = () => {
  const search = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between gap-y-10 p-4 md:px-8 lg:px-24'>
      <div className='flex items-center sm:flex-1 sm:max-w-sm gap-x-4 h-12 px-8 bg-white dark:bg-darkblue shadow rounded-md'>
        <MagnifyingGlassIcon className='h-4 w-4 text-darkgray' />
        <input
          type='text'
          placeholder='Search for a country...'
          className='text-sm sm:text-lg sm:placeholder:text-base placeholder:text-xs text-dark dark:text-verylightgray font-semibold flex-1 p-2 bg-transparent outline-none'
          value={search}
          onChange={(e) => dispatch(changeSearch(e.target.value))}
        />
      </div>
      <div className='bg-white dark:bg-darkblue max-w-[200px] shadow rounded-md'>
        <div className='flex h-12 w-full items-center justify-between text-xs sm:text-base text-verydarkblue dark:text-verylightgray font-semibold gap-x-2 px-6 cursor-pointer'>
          Filter by Region
          <ChevronDownIcon
            className='h-3 w
          -3'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
