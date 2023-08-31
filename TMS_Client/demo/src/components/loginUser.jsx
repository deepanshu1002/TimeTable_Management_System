import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUserApi } from '../services/user'
import '../App.css';
import { logout, login } from '../features/authSlice'

import { log } from '../utils/utils'
// import 'bootstrap/dist/css/bootstrap.min.css';
function LoginUser() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // get the navigation object
    const navigate = useNavigate()

    // get dispatcher object
    const dispatch = useDispatch()


    const SignUp = () => {

        navigate('/register')
    }

    const loginUser = async () => {
        if (email.length == '') {
            toast.error('Please enter email')
        } else if (password.length == '') {
            toast.error('Please enter password')
        } else {
            // call register api
            const response = await loginUserApi(email, password)

            if (response !== null) {
                // parse the response's data and extract the token
                
                 const firstName= response.firstName
                 const lastName= response.lastName
                 const eamil = response.email
                 const userId= response.userId
                 const deptId= response.deptId
                 const roleId= response.roleId
                 
                 log("roleId= "+roleId)
                // store the token for making other apis
                // sessionStorage['token'] = token
                sessionStorage['firstName'] = firstName
                sessionStorage['lastName']= lastName
                sessionStorage['userId'] = userId
                sessionStorage['deptId'] = deptId
                sessionStorage['roleId'] = roleId
                sessionStorage['email'] = email
                // sessionStorage['profileImage'] = profileImage
              
                // update global store's authSlice with status = true
                dispatch(login())
                if(roleId == '1'){
                    navigate('/admindashboard');
                }

                else if(roleId == '2'){
                    navigate('/teacherdashboard');
                }

                else{
                    navigate('/timetable');
                }
                
                toast.success(`login successful`)

                // go back to login
                // navigate('/product-gallery')
            } else {
                toast.error('Invalid user name or password')
            }

        }
    }

    return (<>

        <div style={{ paddingTop: "70px" }}>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <br />
            <br />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group mb-0">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h1>Login</h1>
                                    <p className="text-muted">Sign In to your account</p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        &nbsp;&nbsp;
                                        <input type="text" className="form-control" placeholder="Username"
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }} />
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        &nbsp;&nbsp;
                                        <input type="password" className="form-control" placeholder="Password"
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }} />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                        &nbsp;&nbsp;&nbsp;
                                            <button type="button" className="btn btn-primary px-4" onClick={loginUser}>Login</button>
                                        </div>
                                        <div className="col-6 text-right">
                                            <button type="button" className="btn btn-link px-0" onClick={()=> navigate("/forgotpassword")}>Forgot password?</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card text-white bg-primary py-5 d-md-down-none" style={{/*width:44%*/ }}>
                                <div className="card-body text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <br></br>
                                        <p>An email signup form is a type of contact form that allows visitors to subscribe to a website's email list.</p>
                                        <br></br>
                                        <button type="button" className="btn btn-primary active mt-3" onClick={SignUp}>Register Now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default LoginUser