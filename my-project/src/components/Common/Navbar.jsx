import React from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  ">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">VirtuHire</a>
      <div>
      
    </div>
    </div>
   
    <div className="flex-none flex-row-reverse gap-5">
   
    <div className="drawer ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn bg-indigo-600  drawer-button"><IoMenu size={20} color='white' /></label>
    
  </div> 
  <div className="drawer-side z-[11]">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content justify-center">
  <li className="mb-2">
    <a className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300">Home</a>
  </li>

  <li className="mb-2 dropdown dropdown-right">

  <div tabIndex={0} role="button" className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ">Hire</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Create Job Post</a></li>
    <li><a>View Your Job Post</a></li>
  </ul>

  </li>

  <li className="mb-2">
    <a className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300">Applied Jobs</a>
  </li>

  <li className="mb-2">
    <a className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300">Try Mock Interview</a>
  </li>
</ul>

  </div>
</div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar