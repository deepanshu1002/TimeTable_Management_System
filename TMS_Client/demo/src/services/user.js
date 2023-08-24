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