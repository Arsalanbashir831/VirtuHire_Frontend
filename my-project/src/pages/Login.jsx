import React, { useState } from 'react';
import TextInput from '../components/Forms/TextInput';
import Labels from '../components/Forms/Labels';
import Checkbox from '../components/Forms/Checkbox';
import PlainButton from '../components/Buttons/PlainButton';

const Login = () => {

const [authData , setAuthData]= useState({ username:'',  password:''  })
const [err,setErr]=useState({   status:false, msg :""   })


const handleChange=(e)=>{
    const {name,value}=e.target
    setAuthData({...authData,[name]:value})
}
const {username , password}=authData
    return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
   
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-md"> 
   {err.status && <><h1 className='bg-red-600 text-white text-center p-5 rounded-md'>{err.msg}</h1></>}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please login to continue
          </p>
        </div>
        <div className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
           <TextInput name={'username'} type={'text'} 
           placeholder={"Username"} onChange={handleChange} value={username}  />
            </div>
            <div>
           <TextInput  name={'password'} type={'password'} placeholder={"Password"}  s
           tyles={"rounded-b-md rounded-t-sm"} onChange={handleChange} value={password} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <Checkbox name={'remember-me'} value={'remember-me'} onChange={''}/>
            <Labels name="Remember me"/>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
          <PlainButton Onclick={handleSubmit}  buttonText={'Login'} />
          </div>
        </div>
        <div>
            <h5 className='text-gray-500 text-sm text-center'>Dont Have Account ? <span className='text-indigo-500 font-bold cursor-pointer'>Signup</span></h5>
        </div>
      </div>
    </div>
  );
};

export default Login;