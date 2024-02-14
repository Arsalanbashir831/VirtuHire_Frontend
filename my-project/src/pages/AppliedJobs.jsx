import React, { useState } from 'react';
import Navbar from '../components/Common/Navbar';
import ReactPaginate from 'react-paginate';
// import 'react-paginate/dist/react-paginate.css';
const AppliedJobs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const data = [
    { id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', color: 'Blue' },
    { id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', color: 'Purple' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', color: 'Red' },
    // ... Add more data
  ];

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const displayData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <>
      <Navbar />

      <div className="overflow-x-auto h-[100vh]">
        <br />
        <table className="table bg-white">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row) => (
              <tr key={row.id}>
                <th>{row.id}</th>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination justify-center my-4 w-full flex gap-2'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link p-2'}
          previousClassName={'page-item '}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active bg-blue-500 text-white'}
        />
      </div>
    </>
  );
};

export default AppliedJobs;
