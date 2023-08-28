import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { registerUserApi } from '../services/user'
import "../TimetableMetadata.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createUrl, log } from '../utils/utils'

function UpdatePassword() {
  debugger
  const location = useLocation()
  const email = location.search.slice(7)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const updatePass = async () => {
   
   if (password.length == '') {
      toast.error('Please enter password')
    } else if (confirmPassword.length == '') {
      toast.error('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('Password does not match')
    } 
   
    else {
        const response = ""
      // call register api
      
      const SendEmail=  async ()=>{
        const url = createUrl('/set-password')
        try {
          response = await axios.put(url, {email,password})
          log(response.data)
          return response.data
        }catch(ex){
          log(ex)
          return null
        }
      }

      SendEmail()
      // parse the response
      if (response != null) {
        toast.success('Successfully updated a new user')

      //   // go back to login
        // navigate('/')
      } else {
        toast.error('Error while updating password')
      }

    }
  }



  return (
    <div>
    <div className="row" style={{ fontWeight: "bold" }}>
      <div className="col">{email}</div>
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
            <b>Update Password</b>
          </h2>
        </div>

            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                name='password'
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
              <button onClick={updatePass} className='btn btn-success'>
               Update Password
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
  )
}

export default UpdatePassword
