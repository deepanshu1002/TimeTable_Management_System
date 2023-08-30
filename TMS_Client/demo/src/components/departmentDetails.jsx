import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { addClassroomApi } from '../services/classroom';
import { addDepartmentApi } from '../services/department';
function AddDepartment()
{
  
    const [deptName, setDeptName] = useState('')
   
    var addDepartment=async()=>
    {
        const response = await addDepartmentApi(deptName)
         
          // parse the response
          if (response != null) {
            toast.success('Successfully registered a new user')
    
          //   // go back to login
            // navigate('/')
          } else {
            toast.error('Error while registering a new user, please try again')
          }
    }
    return (
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
    Add Department
  </h2>
</div>
            </div>
            <div className="form">         
  
            <div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Department Name
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

                  type="text"
                  
                  onChange={(e) => {
                    setDeptName(e.target.value);
                  }}
                />
              </div>
              </div>
  

              
              <div className="mb-3" style={{ textAlign: "center" }}>
                <button style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "16px",
            width:'200px'
          }} onClick={addDepartment} className="btn btn-success">Add Department</button>
                
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
}
export default AddDepartment;