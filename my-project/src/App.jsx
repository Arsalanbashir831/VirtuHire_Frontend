import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Otp from './pages/Otp'
import PostHistory from './pages/PostHistory'
import AppliedJobs from './pages/AppliedJobs'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <>
       <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/posthistory" element={<PostHistory />} />
      <Route path="/appliedjobs" element={<AppliedJobs />} />
       </Routes>
    </>
  
  )
}

export default App