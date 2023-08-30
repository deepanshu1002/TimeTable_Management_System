import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { registerUserApi } from '../services/user'
import "../TimetableMetadata.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createUrl, log } from '../utils/utils'

function RegisterUser() {
  debugger
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userId, setUserId] = useState('')
  const [deptId, setDeptId] = useState('')

  var [departments, setDepartments] = useState([]);
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
    const newSelectedDepartment = event.target.value;
    setSelectedDepartment(newSelectedDepartment);
    console.log(event.target.value)
    setDeptId(newSelectedDepartment )
  };

  const RegisterUser = async () => {
    debugger
    if (firstName.length == '') {
      toast.error('Please enter first name')
    } else if (lastName.length == '') {
      toast.error('Please enter last name')
    } else if (email.length == '') {
      toast.error('Please enter email')
    } else if (mobileNo.length == '') {
      toast.error('Please enter mobile')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else if (confirmPassword.length == '') {
      toast.error('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('Password does not match')
    } else if (userId == '') {
      toast.error('please enter user Id')
    } else if (deptId == '') {
      toast.error('Please enter department')
    }
    else {
      // call register api
      const response = await registerUserApi(
        firstName,
        lastName,
        email,
        password,
        mobileNo,
        userId,
        selectedDepartment
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
  }



  return (
    <div>
    <div className="row" style={{ fontWeight: "bold" }}>
      <div className="col"></div>
      <div
        className="col-lg-4"
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
            <b>Register User</b>
          </h2>
        </div>

        <div className="mb-3">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Role No</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              />
            </div>

 <div className="mb-3" >
 <label className="mb-3" style={{ color: "#343a40", fontSize: "18px" }}>
      Department
    </label>
  <div className="col-sm-3">
  </div>
  <div className="mb-3">
     <select
      className="form-select form-select-lg"
      value={selectedDepartment}
      onChange={handleDepartmentChange}
      style={{
        backgroundColor: "#fff",
        borderRadius: "6px",
        padding: "10px",
        border: "2px solid #ced4da",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        fontSize: "18px",
        width: "550px",
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
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

           
            <div className="mb-3">
              <label htmlFor="">Mobile No</label>
              <input
                type="mobile"
                className="form-control"
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
              />
            </div>

          
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>

            <div className='mb-3'>
              <div className='mb-3'>
                Already got an account? <Link to='/'>Login here</Link>
              </div>
              <button onClick={RegisterUser} className='btn btn-success'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default RegisterUser
