import React from 'react'

const Checkbox = ({name, value, onChange}) => {
  return (
          <input
                id={name}
                name={name}
                type="checkbox"
                value={value}
                onChange={onChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
  )
}

export default Checkbox
