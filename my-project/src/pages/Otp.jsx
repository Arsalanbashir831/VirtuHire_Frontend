import React, { useState } from 'react'
import OtpBox from '../components/Common/OtpBox'
import PlainButton from '../components/Buttons/PlainButton';
import Loading from '../components/Loadings/Loading';

const Otp = () => {
  const [otp, setOtp] = useState(0);

  const handleOtpChange = (otp) => {
  
    setOtp(otp);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(otp)
  }

  return (
    <div className='h-screen flex justify-center items-center bg-blue-100'>
    {/* <Loading/> */}
      <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8'>
        <div className='flex flex-col gap-3 text-left'>
        <h1 className='text-center text-3xl font-semibold text-gray-900'>Enter OTP</h1>
        <span className='text-center text-gray-500'>Enter the OTP sent to your registered email address</span>
        </div>
     
        <OtpBox onChange={handleOtpChange} length={4}/>
        <PlainButton Onclick={handleSubmit} buttonText={"Verify"}/>
      
       
      </div>
    </div>
  )
}

export default Otp