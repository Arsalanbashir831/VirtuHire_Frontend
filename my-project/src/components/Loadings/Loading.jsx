import React, { useState, useEffect } from 'react'

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full' id='my-modal'>
      <div className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded w-[20%] text-center'>
        {loading ? (
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 text-center m-auto'></div>
        ) : (
          <div className='text-center'>
            <svg className='mx-auto mb-4 w-10 h-10 text-green-600 text-center' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
              <path d='M5 13l4 4L19 7'></path>
            </svg>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Success</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Loading