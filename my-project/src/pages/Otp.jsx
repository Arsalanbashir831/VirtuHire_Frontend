import React, { useState } from 'react'
import OtpBox from '../components/Common/OtpBox'
import PlainButton from '../components/Buttons/PlainButton';
import Loading from '../components/Loadings/Loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(0);
  const [err,setErr]=useState({status:false,msg:""})
  const navigation=useNavigate()
  const { email } = location.state;

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/v1/verify_otp", { otp: otp, email: email })
      .then((res) => {
        navigation('/')
        console.log(res.data);
      })
      .catch((err) => {
     
        setErr({ status: true, msg: "Invalid OTP"}); 
        console.error(err); 
      });
  };
  
  
  return (
    <div className='h-screen flex justify-center items-center bg-blue-100'>
    {/* <Loading/> */}
    {err!=''?<><h1>Invalid OTP</h1></> :""}
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