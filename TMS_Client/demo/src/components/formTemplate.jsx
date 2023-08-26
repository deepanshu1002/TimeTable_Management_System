import React, { useEffect, useState } from "react";
import "../TimetableMetadata.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUrl } from "../utils/utils";
import axios from "axios";
import { Link } from "react-router-dom";

function FormTemplate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [deptId, setDeptId] = useState("");

  var [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    const url = createUrl("/department");
    axios
      .get(url)
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }, []);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    console.log(event.target.value);
    setDeptId(selectedDepartment);
  };

  return (
    <div>
      <div className="row" style={{ fontWeight: "bold" }}>
        <div className="col"></div>
        <div
          className="col-lg-6"
          style={{
            backgroundColor: "Highlight",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <div
            className="mb-3"
            style={{ backgroundColor: "blue", borderRadius: "10px" }}
          >
            <h2
              style={{ textAlign: "center", margin: 10, color: "whitesmoke" }}
            >
              <b>Timetable Data</b>
            </h2>
          </div>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Department :</label>
              &nbsp;&nbsp;
              <select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
              >
                <option value="">Select a department</option>
                {departments.map((department) => (
                  <option key={department.deptName} value={department.deptId}>
                    {department.deptName}
                  </option>
                ))}
              </select>
            </div>

            

            <div className="mb-3">
              <label htmlFor="">No of lab hrs Daily</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setRoleId(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">No of Lectures per Day</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">No of Days this Week</label>
              <input
                type="tel"
                className="form-control"
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Start Date</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-3" style={{ textAlign: "center" }}>
              <button className="btn btn-success">Submit</button>
              
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default FormTemplate;
