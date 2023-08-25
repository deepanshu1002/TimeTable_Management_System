import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function addSubjectApi(
    deptId,
    teacherId,
    subjectName,
    labId
  ) {
    const url = createUrl('/subject')
    const body = {
    deptId,
    teacherId,
    subjectName,
    labId
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