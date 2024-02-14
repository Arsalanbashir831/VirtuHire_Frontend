import React from 'react'
import PlainButton from '../Buttons/PlainButton'

const Filters = ({ options, onSelect }) => {
  return (

    <div className='bg-white w-full p-3 my-2 flex justify-center items-center '>
    <select className='w-full outline-none' onChange={(e) => onSelect(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <div>
    <PlainButton buttonClass={"btn btn-primary"} buttonText={"Sort"}/>
    </div>
    </div>
  )
}

export default Filters
