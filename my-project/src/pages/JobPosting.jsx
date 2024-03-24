import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, Upload, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Navbar from "../components/Common/Navbar";
import useUserData from "../customhooks/useUserData";


const { TextArea } = Input;
const { Title } = Typography;

const JobPosting = () => {
    const userdata = useUserData();
  const [file, setFile] = useState(null);
  const [userformData, setFormData] = useState({
    experience: "",
    roles: "",
    skills: "",
    title: "",
    company: "",
  });
  const [loading, setLoading] = useState(false); // Loading state


const token = localStorage.getItem('token')
const handleSubmit = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('Token not found in localStorage');
            return;
        }
        
        // Make sure file, userformData.title, and userformData.company are defined
        if (!file || !userformData.title || !userformData.company) {
            console.error('File or form data is missing');
            return;
        }
      
        const formData = new FormData();
        formData.append("job_document", file);
        formData.append('job_title', userformData.title);
        formData.append('company', userformData.company);
        formData.append('address', "Pakistan");
        formData.append('start_date', "2024-02-10");
        formData.append('end_date', "2024-02-11");
        formData.append('description', userformData.roles); // Assuming userformData.roles is defined
        formData.append('recruiter', `http://127.0.0.1:8000/api/v1/user/${userdata.id}/`); // Assuming userData.id is defined
        // console.log(userdata.id);
        const response = await axios.post("http://127.0.0.1:8000/api/v1/job/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Token ${token}`
            }
        });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
        // Handle error, e.g., display an error message to the user
    }
};


  const handleFileChange = async (info) => {
    const selectedFile = info.file.originFileObj;
    setFile(selectedFile);
    setLoading(true); // Enable loading

    try {
      const formData = new FormData();
      formData.append("job_pdf", selectedFile);

      const response = await axios.post(
        "http://127.0.0.1:5000/jobDescriptionParser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      setFormData({
        experience: data.entities.EXPERIENCE[0],
        roles: data.entities.ROLES[0],
        skills: data.entities.SKILLS.join(", "),
        title: data.entities.TITLE[0],
        company: data.entities.TITLE[1],
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    } finally {
      setLoading(false); // Disable loading
    }
  };

  return (
    <>
        
    <Navbar/>
    <div className="container mx-auto mt-8">
      <Title level={2}>Job Posting</Title>
      <Form layout="vertical">
        <Form.Item label="Upload Resume">
          <Upload onChange={handleFileChange} accept=".pdf">
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
          {loading && <Spin />}
        </Form.Item>
        <Form.Item label="Experience">
          <TextArea rows={4} value={userformData.experience}  />
        </Form.Item>
        <Form.Item label="Roles">
          <TextArea rows={4} value={userformData.roles}  />
        </Form.Item>
        <Form.Item label="Skills">
          <TextArea rows={4} value={userformData.skills}  />
        </Form.Item>
        <Form.Item label="Title">
          <Input value={userformData.title}  />
        </Form.Item>
        <Form.Item label="Company">
          <Input value={userformData.company}  />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
            loading={loading}
            disabled={!file}
            style={{ width: "100%", height: "40px", borderRadius: "8px",background:'#1f7dc4',color:'white' }} // Custom style
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
};

export default JobPosting;
