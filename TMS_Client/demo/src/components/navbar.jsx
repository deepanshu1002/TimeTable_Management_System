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
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  &nbsp;&nbsp;
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      &nbsp;&nbsp;
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      &nbsp;&nbsp;
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      &nbsp; &nbsp;
      <li className="nav-item">
      <button onClick={logoutUser} className='btn'>
              Logout
            </button>
      </li>
    </ul>
  </div>
</nav>
  );
}


export default Navbar;
