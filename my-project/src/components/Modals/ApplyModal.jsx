import React from 'react'
import PlainButton from '../Buttons/PlainButton'

const ApplyModal = ({jobtitle, skills , desc  }) => {
  return (
  
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full' id='my-modal'>
    <div className='relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded w-[80%] text-center'>
    <p className='text-red-800 font-bold text-right w-full p-5 cursor-pointer'>X</p>
    <div className='h-60 overflow-y-scroll p-4 border rounded-md shadow-md bg-white'>
  <h3 className="text-xl font-bold text-blue-600 mb-2 text-left">Job Title</h3>
  <p className="text-sm text-gray-800 text-left">{jobtitle}</p>

  <h3 className="text-xl font-bold text-blue-600 mt-4 mb-2 text-left">Skills</h3>
  <p className="text-sm text-gray-800 text-left">{skills}</p>

  <h3 className="text-xl font-bold text-blue-600 mt-4 mb-2 text-left">Description</h3>
  <p className="text-sm text-gray-800 text-left">{desc}</p>
</div>
    
    <div className="bg-white shadow rounded-lg p-6 mb-4 ">
    <h3 className="text-lg font-semibold text-blue-600 mb-4">Upload Your Resume</h3>
    <input type="file" className="border w-full p-2 rounded-md" />
  </div>

  <PlainButton buttonClass={"btn btn-primary"} buttonText={"Apply"}/>
    </div>
  </div>
   
  )
}

export default ApplyModal




