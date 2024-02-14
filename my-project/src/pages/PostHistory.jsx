import React from 'react'
import Navbar from '../components/Common/Navbar'
import JobPost from '../components/Common/JobPost'
import Filters from '../components/Common/Filters'

const PostHistory = () => {
  return (
   <>
    <Navbar/>
    <Filters options={
      [
        { label: "Latest", value: "Latest" },
        { label: "Onsite", value: "Onsite" },
        { label: "Remote", value: "Remote" },
      ]
    } onSelect={(value) => console.log(value) 
    }/>
    <div>
    <JobPost hasAccess={true} companyName={"Arbisoft"} jobTitle={"Web Developer"} rolesAndResponsibilities={"A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end"} applicantCount={30} location={"Remote"} postedDate={'3 days ago'} />
    <JobPost hasAccess={true} companyName={"Arbisoft"} jobTitle={"Web Developer"} rolesAndResponsibilities={"A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end"} applicantCount={30} location={"Remote"} postedDate={'3 days ago'} />
    </div>  
   </>
  )
}

export default PostHistory