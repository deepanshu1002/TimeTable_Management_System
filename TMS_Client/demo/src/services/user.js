import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUserApi(
    firstName,
    lastName,
    email,
    password,
    mobileNo,
    userId,
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
export async function leaveApplicationAPI(startDate,endDate,reason){
  const url = createUrl('/user/leaveApplication')
  //no need to write key and value if both are same
  const body = {
    startDate, endDate, reason
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
