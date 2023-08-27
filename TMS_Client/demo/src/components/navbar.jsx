import React, { useState } from 'react';
import '../css_file/navbar.css'; // Make sure to create this CSS file for styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, login } from '../features/authSlice'
import navBarImg from '/home/saurav/dac_march/New project/Timetable_Management_System/TMS_Client/demo/src/pics/timetable.png';
// import timetable from '../timetable.png';
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const logoutUser = () => {
    // clear the session storage changes
                sessionStorage.removeItem('firstName')
                sessionStorage.removeItem('lastName')
                sessionStorage.removeItem('userId')
                sessionStorage.removeItem('deptId')
                sessionStorage.removeItem('roleId')

    // hide the navigation bar
    dispatch(logout())

    // redirect to login page
    navigate('/')
  }

  return (
<nav className="navbar navbar-expand-lg navbar-light position-end container-fluid " style={{backgroundColor:'#14b5fa'}} >
  <div className='col-7'></div>
  <img src={navBarImg} style={{height:'50px', width:'50px'}} alt="My Image" />
  &nbsp;&nbsp;
  <a className="navbar-brand" href="#">Timetable</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  &nbsp;&nbsp;
  <div className="col-7" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      &nbsp;&nbsp;
      <li className="nav-item">
        <a className="nav-link" href="#">About <span className="sr-only">(current)</span> </a>
      </li>
      &nbsp;&nbsp;
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      &nbsp;&nbsp;
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {sessionStorage['firstName']}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Edit Profile</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" onClick={logoutUser}>Logout</a>
        </div>
      </li>
      &nbsp; &nbsp;
    </ul>
  </div>
</nav>
  );
}


export default Navbar;
