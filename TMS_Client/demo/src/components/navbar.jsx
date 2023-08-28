<<<<<<< HEAD
import React from 'react';
import '../css_file/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  
	return (
		<div>
			                      
<div class="navbar navbar-fixed-top header">
     <div class="col-md-12">
        <div class="navbar-header">
          <a class="navbar-brand" href="#/">Dey-Dey</a>
          <button data-target="#navbar-collapse1" data-toggle="collapse" class="navbar-toggle" type="button">
          <i class="glyphicon glyphicon-search"></i>
          </button>
      
        </div>
        <div id="navbar-collapse1" class="collapse navbar-collapse">
          <form class="navbar-form pull-left">
              <div style={{/*max-width:470px;*/}} class="input-group">
                <input type="text" id="srch-term" name="srch-term" placeholder="Search" class="form-control"/>
                <div class="input-group-btn">
                  <button type="submit" class="btn btn-default btn-primary"><i class="glyphicon glyphicon-search"></i></button>
                </div>
              </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
             <li><a target="_ext" href="http://www.bootdey.com">Bootdey.com</a></li>
             <li>
                <a data-toggle="dropdown" class="dropdown-toggle" href="#/"><i class="glyphicon glyphicon-bell"></i></a>
                <ul class="dropdown-menu">
                  <li><a href="#/"><span class="badge pull-right">40</span>Link</a></li>
                  <li><a href="#/"><span class="badge pull-right">2</span>Link</a></li>
                  <li><a href="#/"><span class="badge pull-right">0</span>Link</a></li>
                  <li><a href="#/"><span class="label label-info pull-right">1</span>Link</a></li>
                  <li><a href="#/"><span class="badge pull-right">13</span>Link</a></li>
                </ul>
             </li>
             <li><a id="btnToggle" href="#/"><i class="glyphicon glyphicon-th-large"></i></a></li>
             <li><a href="#/"><i class="glyphicon glyphicon-user"></i></a></li>
           </ul>
        </div>    
     </div>	
</div>

<div id="subnav" class="navbar navbar-default">
    <div class="col-md-12">
        <div class="navbar-header">
          
          <a data-toggle="dropdown" class="navbar-btn btn btn-default btn-plus dropdown-toggle" style={{/*margin-left:15px;*/}} href="#/"><i style={{/*color:#dd1111;*/}} class="glyphicon glyphicon-home"></i> Home <small><i class="glyphicon glyphicon-chevron-down"></i></small></a>
          <ul class="nav dropdown-menu">
              <li><a href="#/"><i style={{/*color:#1111dd;*/}} class="glyphicon glyphicon-user"></i> Profile</a></li>
              <li><a href="#/"><i style={{/*color:#0000aa;*/}} class="glyphicon glyphicon-dashboard"></i> Dashboard</a></li>
              <li><a href="#/"><i style={{/*color:#11dd11;*/}} class="glyphicon glyphicon-inbox"></i> Pages</a></li>
              <li class="nav-divider"></li>
              <li><a href="#/"><i style={{/*color:#dd1111;*/}} class="glyphicon glyphicon-cog"></i> Settings</a></li>
              <li><a href="#/"><i class="glyphicon glyphicon-plus"></i> More..</a></li>
          </ul>
          
          
          <button data-target="#navbar-collapse2" data-toggle="collapse" class="navbar-toggle" type="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
      
        </div>
        <div id="navbar-collapse2" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
             <li class="active"><a href="#/">Posts</a></li>
             <li><a data-toggle="modal" role="button" href="#loginModal">Login</a></li>
             <li><a data-toggle="modal" role="button" href="#aboutModal">About</a></li>
           </ul>
        </div>    
     </div>	
</div>                                                                                                                                            
		</div>
	);
}
export default Navbar;
=======
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
        <a className="nav-link" href="/teacher">Home <span className="sr-only">(current)</span></a>
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
          dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/edituser">Profile</a>
          <a className="dropdown-item" href="/edituser">Edit Profile</a>
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
>>>>>>> 3c55cd798def85d126df7cc76ea09021897e58a6
