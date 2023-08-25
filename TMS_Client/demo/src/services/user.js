import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUserApi(
    firstName,
    lastName,
    email,
    password,
    mobileNo,
    userId,
    roleId,
    deptId
  ) {
    const url = createUrl('/register')
    const body = {
        userId,
        firstName,
        lastName,
        email,
        mobileNo,
        password,
        roleId,
        deptId
      }
  
    // wait till axios is making the api call and getting response from server
    try {
      const response = await axios.post(url, body)
      log(response.data)
      return response.data
    } catch (ex) {
      log(ex)
      return null
    }
  }

// you cant call await in react without function async
export async function leaveApplicationAPI(fromDate, toDate, reason, status, userId, userName){
  const url = createUrl('/leaveapp')
  //no need to write key and value if both are same
  const body = {
    fromDate, toDate, reason, status, userId, userName
  }
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  }catch(ex){
    log(ex)
    return null
  }
}

//get all leave application for HOD or Admin 
export async function getAllLeaveApplicationsAPI() {
  const url = createUrl('/leaveapp'); // Replace with the actual endpoint for fetching all leave applications

  try {
    const response = await axios.get(url);
    // Check if the response status code indicates success (e.g., 200)
    if (response.status === 200) {
      // Log the data and return it
      log(response.data);
      return response.data;
    } else {
      // Handle non-successful response (e.g., return an error object)
      return { error: `Failed to fetch leave applications: Status ${response.status}` };
    }
  } catch (ex) {
    // Handle exceptions (e.g., network error)
    log(ex);
    return { error: 'Failed to fetch leave applications: Network error' };
  }
}



export async function loginUserApi(email, password) {
  const url = createUrl('/signIn')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}
