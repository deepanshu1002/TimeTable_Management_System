import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/utils';
import {toast} from 'react-toastify';
import '../css_file/manageUser.css';

function ManageUsers() {
  var [isValidUsers, setIsValidUsers] = useState([]);

  useEffect(() => {
    debugger
    const url = createUrl(`/user/validuser`);
    axios
      .get(url)
      .then((response) => {
        debugger
        setIsValidUsers(response.data);
      })
      .catch((error) => {
        toast.error('Error fetching users:', error);
      });
  }, []);

  const getIsValidUsers = () => {
    const url = createUrl(`/user/validuser`);
    axios
      .get(url)
      .then((response) => {
        setIsValidUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  const approve = (userId, newRoleId) => {
    const url = createUrl(`/user/validuser/${userId}/${newRoleId}`);
    axios
      .get(url)
      .then(() => {
        getIsValidUsers();
        toast.success('User Approved') // Refresh the user list after successful approval
      })
      .catch((error) => {
        console.error('Error in approve:', error);
      });
  };

  const reject = (userId) => {
    const url = createUrl(`/user/deleteuser/${userId}`);
    axios.delete(url).then(() => {
      getIsValidUsers(); // Refresh the user list after successful rejection
    });
  };

  const handleRoleIdChange = (userId, newRoleId) => {
    // Update the roleId in the local state for the specific user
    setIsValidUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.userId === userId ? { ...user, roleId: newRoleId } : user
      )
    );
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
    Manager Users
  </h2>
</div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{backgroundColor:"lightblue"}}>User Id</th>
            <th style={{backgroundColor:"lightblue"}}>Firstname</th>
            <th style={{backgroundColor:"lightblue"}}>Lastname</th>
            <th style={{backgroundColor:"lightblue"}}>Email</th>
            <th style={{backgroundColor:"lightblue"}}>Mobile No.</th>
            <th style={{backgroundColor:"lightblue"}}>Dept Id</th>
            <th style={{backgroundColor:"lightblue"}}>Role Id</th>
            <th style={{backgroundColor:"lightblue"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isValidUsers.map((isValidUser) => (
            <tr key={isValidUser.userId}>
              <td>{isValidUser.userId}</td>
              <td>{isValidUser.firstName}</td>
              <td>{isValidUser.lastName}</td>
              <td>{isValidUser.email}</td>
              <td>{isValidUser.mobileNo}</td>
              <td>{isValidUser.deptId}</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    handleRoleIdChange(isValidUser.userId, e.target.value)
                  }
                  value={isValidUser.roleId}
                  style={{ width: '50px' }}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => approve(isValidUser.userId, isValidUser.roleId)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => reject(isValidUser.userId)}
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

export default ManageUsers;
