import React from 'react';
import { Link } from 'react-router-dom';

const FlagItem = ({ flag }) => {
  return (
    <Link to={`/detail/${flag.name.official}`}>
      <div className='bg-white dark:bg-darkblue text-dark dark:text-verylightgray shadow rounded-md overflow-hidden h-full cursor-pointer'>
        <img
          src={flag.flags.svg}
          alt=''
          className='w-full aspect-[3/2] object-cover border-b dark:border-0'
        />
        <div className='p-6 pb-12'>
          <h2 className='mb-3 font-extrabold text-lg'>{flag.name.official}</h2>
          <div className='space-y-2'>
            <p className='text-sm font-semibold'>
              <span className='font-extrabold'>Population:</span>{' '}
              {flag.population}
            </p>
            <p className='text-sm font-semibold'>
              <span className='font-extrabold'>Region:</span> {flag.region}
            </p>
            <p className='text-sm font-semibold'>
              <span className='font-extrabold'>Capital:</span> {flag.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlagItem;
