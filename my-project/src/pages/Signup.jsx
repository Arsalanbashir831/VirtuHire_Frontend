import React, { useState } from 'react';
import TextInput from '../components/Forms/TextInput';
import Labels from '../components/Forms/Labels';
import Checkbox from '../components/Forms/Checkbox';
import PlainButton from '../components/Buttons/PlainButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
const [authData , setAuthData]= useState({
    first_name:'',
    last_name:'',   
    username:'',
    email:'',
    password:'',
    confirmpass:''
})
const [err,setErr]=useState({
    status:false,
    msg :""
})
const navigation = useNavigate()

const handleChange=(e)=>{
    const {name,value}=e.target
    setAuthData({...authData,[name]:value})
}
const {first_name,last_name,email,username ,password,confirmpass}=authData

const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmpass) {
    setErr({ status: true, msg: "Password and Confirm Password do not match" });
  } else {
    try {
      const { confirmpass, ...data } = authData; 
      console.log(data);
      const response = await axios.post('http://127.0.0.1:8000/api/v1/signup', data).then((res) => {
        navigation('/otp')
        console.log(res.data);
      }).catch((err) => setErr(err));
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  }
};


    return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-md"> 
   {err.status && <><h1 className='bg-red-600 text-white text-center p-5 rounded-md'>{err.msg}</h1></>}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please Register to continue
          </p>
        </div>
        <div className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">
          <div className='grid grid-cols-6 gap-2'>
            <div className='col-span-3'>
            <TextInput name={'first_name'} type={'text'} 
           placeholder={"First Name"} onChange={handleChange} value={first_name}  />
            </div>
            <div className='col-span-3'>
            <TextInput name={'last_name'} type={'text'} 
           placeholder={"Last Name"} onChange={handleChange} value={last_name}  />
            </div>
          </div>
          <div>
          <TextInput name={'username'} type={'text'} 
           placeholder={"Username"} onChange={handleChange} value={username}  />
          </div>
          <div>
          <TextInput name={'email'} type={'text'} 
           placeholder={"Email"} onChange={handleChange} value={email}  />
          </div>
            <div>
           <TextInput name={'password'} type={'password'} 
           placeholder={"Password"} onChange={handleChange} value={password}  />
            </div>
            <div>
           <TextInput  name={'confirmpass'} type={'password'} placeholder={"Confirm Password"}  s
           tyles={"rounded-b-md rounded-t-sm"} onChange={handleChange} value={confirmpass} />
            </div>
          </div>

      
          <div>
          <PlainButton Onclick={handleSubmit}  buttonText={'Register'} />
          </div>
        </div>
        <div>
            <h5 className='text-gray-500 text-sm text-center'>Already Have Account ? <span className='text-indigo-500 font-bold cursor-pointer'>Login</span></h5>
        </div>
      </div>
    </div>
  );
};

export default Signup;