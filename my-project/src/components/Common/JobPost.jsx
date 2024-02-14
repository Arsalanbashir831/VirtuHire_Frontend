import React from "react";

const JobPost = ({ jobTitle, companyName, location, postedDate, rolesAndResponsibilities, applicantCount,hasAccess }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4 cursor-pointer" >
      <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
      <div className="bg-black w-16 h-10 rounded-full"> <img className="w-full h-full" src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?rs=1&pid=ImgDetMain"/></div>
        <h3 className="text-lg font-semibold text-blue-600">{companyName}</h3>
        <span className="text-sm text-gray-500">{location}</span>
      </div>
    
        <span className="text-sm text-gray-400">{postedDate}</span>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold">Job Title: <span className="font-normal">{jobTitle}</span></h4>
        <p className="text-sm text-gray-700 mt-1">Roles & Responsibilities: <span className="font-normal">{rolesAndResponsibilities}</span></p>
      </div>
      <div className="text-sm text-gray-600">
        {applicantCount} Applicants
      </div>

      <div className=" flex justify-end items-center gap-4">
      {hasAccess && <button className="btn btn-warning text-white ">Edit</button>}
      {hasAccess && <button className="btn btn-danger bg-red-600 text-white">Delete</button>}
      </div>
    </div>
  );
};

export default JobPost;