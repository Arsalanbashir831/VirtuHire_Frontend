import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Table, Button } from "antd";
import Navbar from "../components/Common/Navbar";

const CandidateRecommendation = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const jobsUrl = location.state?.url;
  const parts = jobsUrl.split("/");
  const id = parts[parts.length - 2];
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v1/appliedjobs/${id}/get_candidate/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        // Sort candidates by score in descending order
        const sortedCandidates = response.data.sort(
          (a, b) => b.score - a.score
        );
        setCandidates(sortedCandidates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCandidates();
  }, []);

  const columns = [
    {
      title: "Candidate",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => `Candidate ${index + 1}`,
    },
    {
      title: "Applied Date",
      dataIndex: "applied_date",
      key: "applied_date",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Resume",
      key: "resume",
      render: (text, record) => (
        <Button
          type="primary"
          className="bg-red-500"
          onClick={() => window.open(record.resume, "_blank")}
        >
          Preview Resume
        </Button>
      ),
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2 className="mb-3">Recommended Candidates</h2>
      <Table dataSource={candidates} columns={columns} />
    </div>
    </>
  );
};

export default CandidateRecommendation;
