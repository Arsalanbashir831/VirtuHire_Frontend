import React,{useState} from 'react'
import Navbar from '../components/Common/Navbar'
import SkeletonLoading from '../components/Loadings/SkeletonLoading'
import Loading from '../components/Loadings/Loading'
import Search from '../components/Common/Search'
import JobPost from '../components/Common/JobPost'
import ApplyModal from '../components/Modals/ApplyModal'

const Home = () => {
  const [search , setSearch] = useState("")
  const handleSearchWords = (e) => {
    setSearch(e.target.value)
  }
  const searchSubmit = () => {
    console.log(search)
  }
  return (
   <>
    <Navbar />
    <Search submission={searchSubmit} handleSearch={handleSearchWords} searchValue={search}  placeholder="Search for jobs" />
    {/* <ApplyModal 
    jobtitle={"Web Developer"}
    desc={"A web developer is responsible fo A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-endr designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end"}
    skills={"React,Node,Express"}
    /> */}
    <JobPost hasAccess={false} companyName={"Arbisoft"} jobTitle={"Web Developer"} rolesAndResponsibilities={"A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end"} applicantCount={30} location={"Remote"} postedDate={'3 days ago'} />
    <JobPost hasAccess={false} companyName={"Arbisoft"} jobTitle={"Web Developer"} rolesAndResponsibilities={"A web developer is responsible for designing and implementing innovative web solutions, translating client needs into functional and visually appealing websites. Their roles encompass front-end and back-end"} applicantCount={30} location={"Remote"} postedDate={'3 days ago'} />
    {/* <SkeletonLoading/>
    <SkeletonLoading/> */}
   </>
  )
}

export default Home