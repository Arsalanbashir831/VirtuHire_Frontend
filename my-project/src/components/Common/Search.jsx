import React, { useState } from 'react';
import TextInput from '../Forms/TextInput';
import PlainButton from '../Buttons/PlainButton';

const Search = ({ placeholder, handleSearch, searchValue, submission }) => {
  return (
    <div className="my-20 md:my-20  ">
      <div className='grid grid-cols-1 md:grid-cols-12 w-full bg-white p-3 rounded-lg'>
        <div className='md:col-span-11'>
          <TextInput styles={"border-none "} type={"text"} placeholder={placeholder} value={searchValue} onChange={handleSearch} />
        </div>
        <div className='md:col-span-1 mt-3 md:mt-0'>
          <PlainButton onClick={submission} buttonClass={""} buttonText={'Search'} />
        </div>
      </div>
    </div>
  );
};

export default Search;
