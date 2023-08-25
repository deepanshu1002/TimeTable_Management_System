import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/utils';
import {toast} from 'react-toastify';
import '../css_file/manageUser.css';

function ManageUsers() {
  var [isValidUsers, setIsValidUsers] = useState([]);

  useEffect(() => {
    const url = createUrl(`/validuser`);
    axios
      .get(url)
      .then((response) => {
        setIsValidUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const getIsValidUsers = () => {
    const url = createUrl(`/validuser`);
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
    const url = createUrl(`/validuser/${userId}/${newRoleId}`);
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
    const url = createUrl(`/deleteuser/${userId}`);
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
    <div className="manage-users-container">
      <h1>Manage Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Dept Id</th>
            <th>Role Id</th>
            <th>Actions</th>
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
