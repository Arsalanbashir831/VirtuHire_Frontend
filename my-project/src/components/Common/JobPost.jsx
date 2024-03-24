import React, { useState } from "react";
import ApplyModal from "../Modals/ApplyModal"; // Import your modal component
import { Link } from "react-router-dom";

const JobPost = ({onClick, jobTitle, companyName, location, postedDate, rolesAndResponsibilities, hasAccess , jobDocument,jobUrl}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4 cursor-pointer">
      <div onClick={openModal} className="flex justify-between items-center mb-4">
        {/* Company details */}
        <div className="flex items-center gap-4">
          <div className="bg-black w-16 h-10 rounded-full">
            <img className="w-full h-full" src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?rs=1&pid=ImgDetMain" />
          </div>
          <h3 className="text-lg font-semibold text-blue-600">{companyName}</h3>
          <span className="text-sm text-gray-500">{location}</span>
        </div>

        {/* Posted date */}
        <span className="text-sm text-gray-400">{postedDate}</span>
      </div>

      {/* Job title and short description */}
      <div className="mb-4">
        <h4 className="text-md font-semibold">Job Title: <span className="font-normal">{jobTitle}</span></h4>
        <h4 className="text-md font-semibold">Roles & Responsibilities: <span className="font-normal"> {rolesAndResponsibilities.slice(0, 100)}</span></h4>
        <h4 className="text-md font-semibold">Location: <span className="font-normal"> {location}</span></h4>
       
      </div>

      <div className="flex justify-end items-center gap-4">
        {hasAccess && <button className="btn btn-warning text-white ">Edit</button>}
        {hasAccess && <button className="btn btn-danger bg-red-600 text-white">Delete</button>}
        {hasAccess && <button onClick={onClick} className="btn btn-danger bg-blue-600 text-white">Recommended Candidates</button>}
        {hasAccess===false && <>  <button onClick={openModal} className="btn btn-primary text-white">Apply</button></>}
     
      </div>

      {isModalOpen  && (
        <ApplyModal
          jobtitle={jobTitle}
          desc={rolesAndResponsibilities}
          CompanyName={companyName}
          jobDocument={jobDocument}
          jobUrl={jobUrl}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default JobPost;
