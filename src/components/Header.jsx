import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';

const Header = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <header>
      <div className='flex items-center justify-between bg-white dark:bg-darkblue shadow-md h-20 px-4 md:px-8 lg:px-24'>
        <div className='font-extrabold text-sm sm:text-lg text-verydarkblue dark:text-verylightgray'>
          Where in the world?
        </div>
        <button
          className='flex items-center gap-x-2 text-xs sm:text-base font-semibold text-verydarkblue dark:text-verylightgray transition duration-300 p-2 rounded-md hover:bg-verylightgray border border-transparent hover:border-darkgray dark:hover:bg-verydarkblue dark:hover:border-transparent'
          onClick={() => {
            dispatch(changeTheme());
          }}>
          {theme ? (
            <>
              <SunIcon className='h-4 w-4' />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <MoonIcon className='h-4 w-4' />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
