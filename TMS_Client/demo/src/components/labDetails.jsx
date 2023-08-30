import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { toast } from 'react-toastify'
import { addLabVenueApi } from '../services/lab';

function AddLabVenue()
{
    const [deptId,setDeptId] = useState('')
    const [labVenue, setLabVenue] = useState('')
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
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
   
    var addLabVenue=async()=>
    {
      const response = await addLabVenueApi(
         labVenue,
         deptId
       )
      
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
                <b>Add Lab Venue</b>
              </h2>
            </div>
            <div className="form">      

            <div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Lab Venue
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
                    setLabVenue(e.target.value);
                  }}
                />
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
              <div className="mb-3" style={{ textAlign: "center" }}>
                <button onClick={addLabVenue} className="btn btn-success">Add Lab Venue</button>
                
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    ); 
 }
    export default AddLabVenue;
   