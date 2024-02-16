import React, { useState } from 'react'
import OtpBox from '../components/Common/OtpBox'
import PlainButton from '../components/Buttons/PlainButton';
import Loading from '../components/Loadings/Loading';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(0);
  const [err,setErr]=useState({status:false,msg:""})
  const [isVerified,setIsVerified]=useState(0)
  const location = useLocation();
  const { email } = location.state;

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/v1/verify_otp", { otp: otp, email: email })
      .then((res) => {
        setIsVerified(1);
        console.log(res.data);
      })
      .catch((err) => {
        setIsVerified(2);
        setErr({ status: true, msg: "Invalid OTP"}); 
        console.error(err); 
      });
  };
  
  
  return (
    <div className='h-screen flex justify-center items-center bg-blue-100'>
    {/* <Loading/> */}
      <div className='max-w-sm mx-auto p-8 bg-white rounded-xl shadow-lg space-y-8'>
    {isVerified==2 && <h1 className='bg-red-600 text-white text-center p-5 rounded-md'>{err.msg}</h1>}
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