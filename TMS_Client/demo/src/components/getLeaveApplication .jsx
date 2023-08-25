import React, { useEffect, useState } from "react";
import { getAllLeaveApplicationsAPI } from "../services/user"; // Replace with your actual API service function

function LeaveApplicationList() {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    // Fetch the list of leave applications from your API
    // Replace with your actual API call
    getAllLeaveApplicationsAPI()
      .then((data) => setLeaveApplications(data))
      .catch((error) => console.error("Error fetching leave applications:", error));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Leave Applications</h1>

      {leaveApplications.length === 0 ? (
        <div>No leave applications found.</div>
      ) : (
        <div>
          {leaveApplications.map((leaveApplication, index) => (
            <div key={index} className="mb-4">
              <h2>Leave Application {index + 1}</h2>
              <p><strong>Start Date:</strong> {leaveApplication.fromDate}</p>
              <p><strong>End Date:</strong> {leaveApplication.toDate}</p>
              <p><strong>Reason:</strong> {leaveApplication.reason}</p>
              <p><strong>Status:</strong> {leaveApplication.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LeaveApplicationList;
