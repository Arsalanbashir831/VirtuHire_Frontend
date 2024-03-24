import axios from "axios";
import React, { useState } from "react";
import useUserData from "../../customhooks/useUserData";

const ApplyModal = ({ onClose, jobDocument ,jobUrl}) => {
  const userdata = useUserData();
  const token = localStorage.getItem('token')
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    skills: "",
    experience: "",
    studies: "",
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setResume(file);

    const formData = new FormData();
    formData.append("resume_pdf", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/resumeParser", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      // Update the form data based on the parsed resume data
      setFormData({
        name: data.entities.NAME[0] || "",
        location: data.entities.LOCATION[0] || "",
        skills: data.entities.SKILLS.join(", ") || "",
        experience: data.entities["WORKED AS"].join(", ") || "",
        studies: data.entities.DEGREE.join(", ") || "",
      });
      console.log(data);
    } catch (error) {
      console.error("Error parsing resume:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("resume_pdf", resume);
      formData.append("jobdesc_pdf_url", jobDocument);
      console.log(resume);
      const response = await axios.post(
        "http://127.0.0.1:5000/matchingscore_latest",
        formData
      );
      console.log(response.data);
      if (response) {
        const currentDate = new Date();
        // Extract year, month, and day
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        // Format the date
        const formattedDate = `${year}-${month}-${day}`;
      const AppliedformData= new FormData()
      AppliedformData.append('applied_date',formattedDate)
      AppliedformData.append('resume',resume)
      AppliedformData.append('score',response.data.score)
      AppliedformData.append('candidate',`http://127.0.0.1:8000/api/v1/user/${userdata.id}/`)
      AppliedformData.append('job',jobUrl)
        const submission = await axios.post(
          "http://127.0.0.1:8000/api/v1/appliedjobs/",
          AppliedformData,
          {
            headers: {
              Authorization: `Token ${token}`, // Include the token in the Authorization header
            },
          }
        );
        console.log(submission);
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4 mt-14">
            <h2 className="text-xl font-bold">Easy Apply</h2>

            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Resume:
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
              />
            </div>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
            <div className="text-left">
              <a
                target="_blank"
                href={jobDocument}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
              >
                View PDF
              </a>
            </div>
            <br />

            <div className="text-right w-full">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
