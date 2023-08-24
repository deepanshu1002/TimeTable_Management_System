import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { registerUserApi } from '../services/user'
import '../App.css';
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
  const [roleId, setRoleId] = useState('')
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
    setSelectedDepartment(event.target.value);
    console.log(event.target.value)
    setDeptId(selectedDepartment)
  };

  const RegisterUser = async () => {
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
    } else if (roleId == '') {
      toast.error('please enter role')
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
        roleId,
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
  }



  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Register User</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>RollNo/UserId</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setUserId(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>RoleId</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setRoleId(e.target.value)
                }}
              />
            </div>


           <div className='mb-3'>
              <label htmlFor=''>Department</label>
            <select value={selectedDepartment} onChange={handleDepartmentChange}>
              <option value="">Select a department</option>
                  {departments.map(department => (
                    <option key={department.deptName} value={department.deptId}>
                      {department.deptName}
                     </option>
                ))}
            </select>
           </div>


            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                className='form-control'
                onChange={(e) => {
                  setMobileNo(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
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
