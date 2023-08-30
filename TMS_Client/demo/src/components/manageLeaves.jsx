import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
import { createUrl } from '../utils/utils';


function  ManageLeaves() {
    const [leaveApplications, setLeaveApplications] = useState([])
    useEffect(() => {
        const url = createUrl('/leaveapp/pending')  
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
      
      const getLeaveApp=()=>
      {
        const url = createUrl('/leaveapp/pending')  
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
      }
      const approve = (leavApplicationId, status) => {
        const url = createUrl(`/leaveapp/${leavApplicationId}/${status}`);
        axios
          .put(url)
          .then(() => {
            getLeaveApp();
            toast.success('Application Approved') // Refresh the user list after successful approval
          })
          .catch((error) => {
            console.error('Error in approve:', error);
          });
      };
    
      const reject = (leavApplicationId, status) => {
        debugger;
        const url = createUrl(`/leaveapp/${leavApplicationId}/${status}`);
        axios.put(url).then(() => {
          getLeaveApp(); // Refresh the user list after successful rejection
        });
      };
    
      return (
        <div className="manage-users-container" style={{marginTop:'75px', backgroundColor:"lightcyan"}}>
         <div
  style={{
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  }}
>
  <h2
    className="dashboard-heading"
    style={{
      fontSize: "36px",
      color: "#007bff",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      fontFamily: 'Montserrat, sans-serif',
      margin: "0",
    }}
  >
    Manager Leaves
  </h2>
</div>
         <table className="table table-striped" style={{marginTop:'20px'}}>
            <thead>
              <tr>
                <th  style={{backgroundColor:"lightblue"}}>From Date</th>
                <th  style={{backgroundColor:"lightblue"}}>To Date</th>
                <th  style={{backgroundColor:"lightblue"}}>Reason</th>
                <th  style={{backgroundColor:"lightblue"}}>Status</th>
                <th  style={{backgroundColor:"lightblue"}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.map((leaveApp) => (
                <tr key={leaveApp.leaveApplicationId}>
                  <td>{leaveApp.fromDate}</td>
                  <td>{leaveApp.toDate}</td>
                  <td>{leaveApp.reason}</td>
                  <td>{leaveApp.status}</td> 
                  <td>
                <button
                  className="btn btn-primary"
                  onClick={() => approve(leaveApp.leaveApplicationId,"approved")}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => reject(leaveApp.leaveApplicationId,"rejected")}
                >
                  Reject
                </button>
              </td>              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ManageLeaves;

