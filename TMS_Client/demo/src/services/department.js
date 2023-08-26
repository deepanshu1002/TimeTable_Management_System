import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function addDepartmentApi(
    deptName
  ) {
    const url = createUrl('/department')
    const body = {
    deptName
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