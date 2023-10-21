import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import UserCard from "./UserCard";

const userDatas = [
  {
    employeeName: "Sanny",
    employeeID: "EMP12345",
    emailID: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    workingDay: "Monday",
    currentMonth: "10/21/2023",
    address: "123 Main Street, City, Country",
    salary: 300,
  },
  {
    employeeName: "Sai",
    employeeID: "EMP98765",
    emailID: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    workingDay: "Friday",
    currentMonth: "10/21/2023",
    address: "456 Elm Street, City, Country",
    salary: 800,
  },
  // Add more objects as needed
];

function UserDetails({ user, onGeneratePDF, isSelected }) {
  return (
    <tr>
      <td>{user.employeeName}</td>
      <td>{user.employeeID}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.salary}</td>
      <td>
        <button className="btn btn-success" onClick={() => onGeneratePDF(user)}>
          PDF
        </button>
      </td>
    </tr>
  );
}

function UserDetailsListing() {
  const componentPDF = useRef();
  const [selectedUser, setSelectedUser] = useState(null);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "EmployeeData",
    onAfterPrint: () => alert("Data saved in PDF"),
  });

  const handleGeneratePDF = (user) => {
    setSelectedUser(user);
    setTimeout(() => {
      generatePDF();
    }, 10);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2">All Employee List</h5>
          <div className="d-grid d-md-flex justify-content-md-end mb-3">
            {/* Add New User Link */}
          </div>
          <div style={{ width: "100%" }}>
            <table className="table table-bordered">
              <thead className="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Employee ID</th>
                  <th>Phone No</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userDatas.map((user, index) => (
                  <UserDetails
                    key={index}
                    user={user}
                    onGeneratePDF={handleGeneratePDF}
                    isSelected={selectedUser === user}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {selectedUser && (
            <div ref={componentPDF} className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <UserCard user={selectedUser} componentPDF={componentPDF} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetailsListing;
