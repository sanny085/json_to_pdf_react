import React from "react";

function UserCard({ user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.employeeName}</h5>
        <p className="card-text">
          <strong>Employee ID:</strong> {user.employeeID}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {user.emailID}
        </p>
        <p className="card-text">
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
        <p className="card-text">
          <strong>Working Day:</strong> {user.workingDay}
        </p>
        <p className="card-text">
          <strong>Current Month:</strong> {user.currentMonth}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {user.address}
        </p>
        <p className="card-text">
          <strong>Salary:</strong> {user.salary}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
