import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"; // Make sure to include the Bootstrap JavaScript bundle
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/authSlice'
import '../css_file/navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [roleId, setRoleId] = useState(sessionStorage['roleId'])
  // const dashboardForAdmin = [{prop:"admin",link:"/admindashboard"}, {prop:"ViewTimeTable", link:"/admindashboard"}, 
  //                                 {prop:"ManageUser",link:"/manageuser" }]
  const dashboardForTeacher = [{prop:"Show all Leave Applications", link:"/getLeaveApplication"},
                                    {prop:"Apply Leave Application", link:"leaveapplication"}, 
                                    {prop:"ViewTimeTable",link:"" }]
  const dashboardForStudent = [{prop:"Student", link:""},{prop:"Profile", link:""}, {prop:"ViewTimeTable", link:"/timetable"}]
  const [dashboard, setDashboard] = useState([]);

  const homeForAdmin= ["/admindashboard"]
  const homeForTeacher=["/teacher"]
  const homeForStudent =["/timetable"]

  const [home, setHome]= useState([]);

  useEffect(() => {
    if (roleId === '1') {
      // setDashboard(dashboardForAdmin)
      setHome(homeForAdmin)
    }
    else if (roleId === '2') {
      setDashboard(dashboardForTeacher)
      setHome(homeForTeacher)
    }
    else {
      setDashboard(dashboardForStudent)
      setHome(homeForStudent)
    }
  }, [roleId])

  const logoutUser = () => {
    // clear the session storage changes
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('roleId')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('deptId')

    // hide the navigation bar
    dispatch(logout())

    // redirect to login page
    navigate('/')
  }

  return (<>
    <nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top">
      <a className="navbar-brand" href="#" style={{ fontStyle: "normal", marginLeft: '8px', fontSize: '30px', color: 'white' }}>
        Timetable Management System
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        &nbsp;&nbsp;&nbsp;&nbsp;

        <ul className="navbar-nav mr-auto" style={{ fontSize: '20px' }}>
          <li className="nav-item">
            <a className="nav-link" href={home}>
              Home
            </a>
          </li>
          &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/aboutUs">
              About
            </a>
          </li>
          &nbsp;&nbsp;
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          &nbsp;&nbsp;
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {sessionStorage['firstName']}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/profileEdit">
                Profile
              </a>
              {dashboard.map((d) => {
                return (
                  <a className="dropdown-item" href={d.link}>
                    {d.prop}
                  </a>
                );

              })}

              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={logoutUser}>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    {/* <div style={{ height: '150px' }}></div> */}
  </>);
}

export default Navbar;
