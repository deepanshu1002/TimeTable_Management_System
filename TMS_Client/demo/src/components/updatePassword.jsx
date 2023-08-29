import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { registerUserApi } from '../services/user'
import "../TimetableMetadata.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createUrl, log } from '../utils/utils'
import '../css_file/forgotPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdatePassword() {
  debugger
 
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [code, setCode] = useState('')
  const { email } = useParams();
  const navigate = useNavigate()

  const verify = async () => {
    debugger
   
    if (password.length == '') {
      toast.error('Please enter password')
    } else if (confirmPassword.length == '') {
      toast.error('Please confirm password')
    } else if (password !== confirmPassword) {
      toast.error('Password does not match')
    } else if (code == '') {
      toast.error('please enter code')
    }
    else {
        // call register api
        debugger
        // console.log(email)
        const url = createUrl("/forgotpassword");
        const body = {email, code, password};
        // wait till axios is making the api call and getting response from server

        axios.put(url, body)
            .then((response) => {
                debugger
                log(response.data);
                toast.success("Successfully updated password");
                navigate('/')

            })
            .catch((error) => {
                debugger
                toast.error("error")
            });
    }
  }



  return (
    <div>
    <div class="container h-100">
        <div class="row h-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">

                    <div class="text-center mt-4">
                        <h1 class="h2">Reset password</h1>
                        <p class="lead">
                           Verify Code and Update Password
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="m-sm-4">
                                <form>
                                    <div class="form-group">
                                        <label>Verification Code</label>
                                        <input class="form-control form-control-lg" type="number" name="email" placeholder="Enter Verification Code"
                                         onChange={(e)=>setCode(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control form-control-lg" type="password" name="email" placeholder="Enter Password"
                                         onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control form-control-lg" type="password" name="email" placeholder="Re-Enter Password"
                                         onChange={(e)=>setConfirmPassword(e.target.value)} />
                                    </div>
                                    <div class="text-center mt-3">
                                        <a class="btn btn-lg btn-primary" onClick={verify}>Reset password</a>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdatePassword
