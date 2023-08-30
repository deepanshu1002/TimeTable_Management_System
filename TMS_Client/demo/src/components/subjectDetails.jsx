import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { addSubjectApi } from '../services/subject'
import { toast } from 'react-toastify'
import '../css_file/rating.css'

function AddSubjectDetails()
{
    const [deptId,setDeptId] = useState('')
    const [teacherId, setTeacherId] = useState('')
    const [subjectName, setSubjectName] = useState('')
    const [labId, setLabId] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedLabVenue, setSelectedLabVenue] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    var [labVenues, setLabVenues] = useState([]);
    var [teachers, setTeachers] = useState([]);
    var [departments, setDepartments] = useState([]); 

    useEffect(() => {
      const url = createUrl('/department')
      axios.get(url)
        .then(response => {
          setDepartments(response.data);
        })
        .catch(error => {
          console.error('Error fetching departments:', error);
        });
         const url1 = createUrl(`/user/2`)
        axios.get(url1)
          .then(response => {
            setTeachers(response.data);
          })
          .catch(error => {
            console.error('Error fetching departments:', error);
          });

           const url2 = createUrl('/labvenue')
          axios.get(url2)
            .then(response => {
              setLabVenues(response.data);
            })
            .catch(error => {
              console.error('Error fetching departments:', error);
            });
    }, []);

    const handleDepartmentChange = (event) => {
      const newSelectedDepartment = event.target.value;
      setSelectedDepartment(newSelectedDepartment);
      console.log(event.target.value)
      setDeptId(newSelectedDepartment )
    };
    const handleTeacherChange = (event) => {
      const newSelectedTeacher = event.target.value;
      setSelectedTeacher(newSelectedTeacher);
      console.log(event.target.value)
      setTeacherId(newSelectedTeacher)
    };
    const handleLabVenueChange = (event) => {
      const newSelectedLabVenue = event.target.value;
      setSelectedLabVenue(newSelectedLabVenue);
      console.log(event.target.value)
      setLabId(newSelectedLabVenue)
    };
    var addSubject = async() =>
    {
           const response = await addSubjectApi(
            deptId,
            teacherId,
            subjectName,
            labId
          )
          if (response != null) {
            toast.success('Successfully registered a new user')
          } else {
            toast.error('Error while registering a new user, please try again')
          }
    
    }
    return (
      <div>
        <div className="row" style={{ fontWeight: "bold" ,marginTop:'80px'}}>
          <div
            className="col-lg-6 m-auto" 
            style={{
              backgroundColor: "lightcyan",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div
              className="mb-3"
            >
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
    Add Subject
  </h2>
</div>

            </div>
            <div className="form">         
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
      Professor
    </label>
  </div>
  <div className="col-sm-9">
    <select
      className="form-select form-select-lg"
      value={selectedTeacher} 
      onChange={handleTeacherChange}
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
      <option value="">Select Professor</option>
      {teachers.map((teacher) => (
        <option key={teacher.firstName} value={teacher.userId}>
          {teacher.firstName}
        </option>
      ))}
    </select>
  </div>
</div>
<div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Subject Name
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
                    setSubjectName(e.target.value);
                  }}
                />
              </div>
              </div>
  
              <div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Lab Venue
    </label>
  </div>
  <div className="col-sm-9">
    <select
      className="form-select form-select-lg"
      value={selectedLabVenue}
      onChange={handleLabVenueChange}
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
      <option value="">Select Lab Venue</option>
      {labVenues.map((lab) => (
        <option key={lab.labVenue} value={lab.labId}>
          {lab.labVenue}
        </option>
      ))}
    </select>
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
          }} onClick={addSubject} className="btn btn-success">Add Subject</button>
                
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      );
    }
    export default AddSubjectDetails;