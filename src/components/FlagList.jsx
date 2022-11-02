import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FlagItem from './FlagItem';

const FlagList = () => {
  const [loading, setLoading] = useState(false);
  const [flags, setFlags] = useState([]);

  const getFlags = () => {
    setLoading(true);
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setFlags(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFlags();
  }, []);

  return (
    <div className='grid grid-cols-[minmax(220px,270px)] justify-center sm:grid-cols-2 md:grid-cols-3 lg:px-24 xl:grid-cols-4 xl:gap-12 gap-4 p-8'>
      {flags.map((flag, index) => (
        <FlagItem key={index} flag={flag} />
      ))}
    </div>
  );
};

export default FlagList;
