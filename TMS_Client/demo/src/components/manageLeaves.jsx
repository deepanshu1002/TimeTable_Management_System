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
        <div className="manage-users-container">
          <center><h1>Manage Leave Application</h1></center>
          <table className="table table-striped" style={{marginTop:'20px'}}>
            <thead>
              <tr>
                <th>From Date</th>
                <th>To Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
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

