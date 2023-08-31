import "../css_file/rating.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createUrl } from "../utils/utils";
import { Navigate,Route, Routes, useNavigate } from 'react-router-dom';

function AdminViewTimetable()
{
    const[deptId,setDeptId] = useState('');
    const[departments,setDepartments] = useState([]);
    const[selectedDepartment,setSelectedDepartment] = useState('');
    const[date,setDate] = useState('');
    const navigate = useNavigate()
    //const [teacherId,setTeacherId] = useState('');
    
    useEffect(() => {
        const url = createUrl('/department')
        axios.get(url)
          .then(response => {
            setDepartments(response.data);
          })
          .catch(error => {
            console.error('Error fetching departments:', error);
          });
      }, []);
      
      const handleDepartmentChange = (event) => {
        const newSelectedLabVenue = event.target.value;
        setSelectedDepartment(newSelectedLabVenue);
        console.log(event.target.value);
        setDeptId(newSelectedLabVenue);
       };

      const viewTimetable = () =>
      {
        navigate(`/timetableadmin/${deptId}/${date}`);
      }
      
      return(
        <>
         
    <div>
  <div className="row" style={{ fontWeight: "bold", marginTop:'80px'}}>
    <div className="col"></div>
    <div
      className="col-lg-6"
      style={{
        backgroundColor: "lightcyan",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      <div
        className="mb-3">
         <div
  style={{
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  }}
>
  <h2
    className="dashboard-heading"
    style={{
      fontSize: "36px",
      color: "#007bff",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      fontFamily: 'Montserrat, sans-serif',
      margin: "0",
    }}
  >
    View Timetable
  </h2>
</div>
      </div>
      <div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Department
    </label>
  </div>
  <div className="col-sm-9">
     <select
      className="form-select form-select-lg"
      value={selectedDepartment}
      onChange={handleDepartmentChange}
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "10px",
        border: "2px solid #ced4da",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        fontSize: "18px",
        width: "100%",
      }}
    >
      <option value="">Select a department</option>
      {departments.map((department) => (
        <option key={department.deptName} value={department.deptId}>
          {department.deptName}
        </option>
      ))}
    </select>
  </div>
</div>

<div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Date
    </label>
  </div>
  <div className="col-sm-9">
                <input className="form-control"
                 style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "10px",
                  border: "2px solid #ced4da",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  fontSize: "18px",
                  width: "100%",
                }}

                  type="date"
                  
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              </div>
  
              <div className="row mb-2 align-items-center"></div>

      <div className="mb-3" style={{ textAlign: "center" }}>
        <button
          onClick={viewTimetable}
          className="btn btn-success"
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "16px",
            width:"200px"
          }}
        >
         View Timetable
        </button>
      </div>
    </div>
    <div className="col"></div>
  </div>
</div>
        </>
      )
}
export default AdminViewTimetable;