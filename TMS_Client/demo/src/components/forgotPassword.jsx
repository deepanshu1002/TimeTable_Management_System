import React from 'react';
import { useState, useEffect } from 'react'
import '../css_file/forgotPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { forgotPasswordApi } from '../services/forgotPasswordApi';
import { toast } from 'react-toastify'
import { createUrl, log } from '../utils/utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css_file/forgotPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgotPassword() {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const sendEmail = async () => {
        debugger

        if (email.length == '') {
            toast.error('Please enter email')
        }
        else {
            // call register api
            console.log(email)
            // const response = await forgotPasswordApi(email)
            // if (response.status === 200) {
            //     toast.success('check your email and enter the verification code')
            // } else {
            //     toast.error('enter valid email')
            // }
            const url = createUrl("/forgotpassword/email");
            const body = { email };
            // wait till axios is making the api call and getting response from server

           await axios.post(url, body)
                .then((response) => {
                    debugger
                    log(response.data);
                    toast.success("success");
                    navigate(`/updatepassword/${email}`);
                })
                .catch((error) => {
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
                                    Enter your email to reset your password.
                                </p>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <div class="m-sm-4">
                                        <form>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                                                 onChange={(e)=>setEmail(e.target.value)} />
                                            </div>
                                            <div class="text-center mt-3">
                                                <a class="btn btn-lg btn-primary" onClick={sendEmail}>Send Email</a>

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
    );
}
export default ForgotPassword;