import React,{useEffect, useState} from 'react'
import Navbar from '../components/Common/Navbar'
import SkeletonLoading from '../components/Loadings/SkeletonLoading'
import Loading from '../components/Loadings/Loading'
import Search from '../components/Common/Search'
import JobPost from '../components/Common/JobPost'
import ApplyModal from '../components/Modals/ApplyModal'
import axios from 'axios'

const Home = () => {
  const [search , setSearch] = useState("")
  const [jobs , setJobs] = useState(null)
  const handleSearchWords = (e) => {
    setSearch(e.target.value)
  }
  const searchSubmit = () => {
    console.log(search)
  }

useEffect(() => {
  
  const fetchJobs = async () => {
    const authToken = localStorage.getItem('token'); 
    const config = {
      headers: {
        'Authorization': `Token ${authToken}`
      }
    };
    const response = await axios.get("http://127.0.0.1:8000/api/v1/job",config).then((res) => {
      // console.log(res.data);
      setTimeout(() => {
        setJobs(res.data);
      }, 2000);
    }).catch((err) => console.error(err));
  }
  fetchJobs()
}, [])

  return (
   <>
    <Navbar />
    <Search submission={searchSubmit} handleSearch={handleSearchWords} searchValue={search}  placeholder="Search for jobs" />
    {/* <ApplyModal 
    jobtitle={"Web Developer"}
    desc={"A web developer is responsible fo A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-endr designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end"}
    skills={"React,Node,Express"}
    /> */}

    {jobs === null ?
      <><SkeletonLoading/> <SkeletonLoading/></>
      : (
  jobs.map((job) => (
    <JobPost
      key={job.id}
      hasAccess={false}
      companyName={job.company}
      jobTitle={job.job_title}
      rolesAndResponsibilities={job.description}
      location={job.location}
      postedDate={job.start_date}
    />
  ))
)}

   </>
  )
}

export default Home