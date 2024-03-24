import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import JobPost from "../components/Common/JobPost";
import Filters from "../components/Common/Filters";
import { useNavigate } from "react-router";
import axios from "axios";
import useUserData from "../customhooks/useUserData";

const PostHistory = () => {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  const userdata = useUserData();
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios
        .get(
          `http://127.0.0.1:8000/api/v1/job/${userdata.id}/get_job_posting/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            setJobs(res.data);
          }, 2000);
        })
        .catch((err) => navigation("/login"));
    };
    fetchJobs();
  }, [userdata]);

  return (
    <>
      <Navbar />
      <Filters
        options={[
          { label: "Latest", value: "Latest" },
          { label: "Onsite", value: "Onsite" },
          { label: "Remote", value: "Remote" },
        ]}
        onSelect={(value) => console.log(value)}
      />
      <div>
        {jobs?.map((data, index) => {
          return (
            <>
              <JobPost
                key={index}
                hasAccess={true}
                onClick={() => {
                  navigation("/recommendation", {
                    state: {
                      url: data.url,
                    },
                  });
                }}
                companyName={data.company}
                jobTitle={data.title}
                rolesAndResponsibilities={data.description}
                location={data.address}
                postedDate={data.start_date}
                jobDocument={data.job_document}
                jobUrl={data.url}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostHistory;
