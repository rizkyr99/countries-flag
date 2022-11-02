import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const FlagDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/name/${params.name}`)
      .then((res) => {
        setDetail(res.data[0]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className='p-6'>
        <Link to='/'>
          <button className='flex items-center justify-center gap-x-2 py-2 px-6 shadow-md bg-white dark:bg-darkblue dark:text-verylightgray text-sm font-semibold rounded-sm'>
            <ArrowLongLeftIcon className='h-6' />
            Back
          </button>
        </Link>
      </div>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 p-6 lg:px-24 dark:text-verylightgray'>
          <img src={detail?.flags?.svg} alt='' className='w-full my-4 md:m-0' />
          <div className='md:mt-4'>
            <h1 className='text-2xl font-extrabold mb-6'>
              {detail?.name?.official}
            </h1>

            <div className='space-y-2 mb-10'>
              <p>
                <span className='font-extrabold text-sm'>Native Name:</span>{' '}
                {
                  detail?.name?.nativeName?.[
                    Object.keys(detail.name.nativeName)[0]
                  ].official
                }
              </p>
              <p>
                <span className='font-extrabold text-sm'>Population:</span>{' '}
                <NumericFormat
                  displayType='text'
                  thousandsGroupStyle='thousand'
                  thousandSeparator=','
                  value={detail?.population}
                />
              </p>
              <p>
                <span className='font-extrabold text-sm'>Region:</span>{' '}
                {detail?.region}
              </p>
              <p>
                <span className='font-extrabold text-sm'>Sub Region:</span>{' '}
                {detail?.subregion}
              </p>
              <p>
                <span className='font-extrabold text-sm'>Capital:</span>{' '}
                {detail?.capital}
              </p>
            </div>
            <div className='space-y-2 mb-10'>
              <p>
                <span className='font-extrabold text-sm'>
                  Top Level Domain:
                </span>{' '}
                {detail?.tld?.[0]}
              </p>
              <p>
                <span className='font-extrabold text-sm'>Currencies:</span>{' '}
                {detail?.currencies?.[Object.keys(detail.currencies)[0]].name}
              </p>
              <p>
                <span className='font-extrabold text-sm'>Languages:</span>{' '}
                {detail?.languages &&
                  Object?.values?.(detail?.languages).join(', ')}
              </p>
            </div>
            <div>
              <h2 className='text-xl font-extrabold mb-4'>Border Countries:</h2>
              <div className='flex flex-wrap items-center justify-start gap-2 mb-8'>
                {detail?.borders?.map((border) => (
                  <div className='px-6 py-1.5 shadow-md flex-grow sm:flex-grow-0 text-sm text-center dark:border-0 bg-white dark:bg-darkblue sm:px-12'>
                    {border}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlagDetail;
