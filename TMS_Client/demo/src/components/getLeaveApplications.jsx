import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { createUrl } from '../utils/utils';
import LeaveApplication from './leaveApplication';


function  GetLeaveApplication() {
    const [leaveApplications, setLeaveApplications] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const url = createUrl('/leaveapp')  
        console.log(url)
        axios.get(url)
          .then(response => {
            console.log(response.data);
            setLeaveApplications(response.data);
          })
          .catch(error => {
            console.log(error.response)
            console.error('Error fetching leave applications:', error);
          });
      }, []);

      return (
        <div className="manage-users-container" style={{marginTop:'80px'}}>
          <center><h1
           className="dashboard-heading"
           style={{
             textAlign: "center",
             marginTop: "10px",
             fontSize: "36px",
             color: "#007bff",
             textTransform: "uppercase",
             letterSpacing: "2px",
             fontWeight: "bold",
             textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
           }}
          >Leave Applications</h1>
          </center>
          

          <button style={{ marginLeft:'1600px'}}type="button" 
          className="btn btn-info"  onClick={()=>navigate("/leaveapplication")}>Add Leave</button>
          <table className="table table-striped" style={{marginTop:'20px'}}>
            <thead>
              <tr>
                <th>From Date</th>  
                <th>To Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.map((leaveApp) => (
                <tr key={leaveApp.leaveApplicationId}>
                  <td>{leaveApp.fromDate}</td>
                  <td>{leaveApp.toDate}</td>
                  <td>{leaveApp.reason}</td>
                  <td>{leaveApp.status}</td>               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default GetLeaveApplication

