import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function getTimetable(date,deptId) {
  const url = createUrl(`/timetableSlot/${date}/${deptId}`)

  try {
    // get the current user's token from session storage
    //const { token } = sessionStorage

    // create a header to send the token
    // const header = {
    //   headers: {
    //     token,
    //   },
    // }

    // make the api call using the token in the header
    const response = await axios.get(url)
    //log(response);
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getTeacherTimetable(date,deptId,teacherId) {
  const url = createUrl(`/timetableSlot/${date}/${deptId}/${teacherId}`)

  try {
    // get the current user's token from session storage
    //const { token } = sessionStorage

    // create a header to send the token
    // const header = {
    //   headers: {
    //     token,
    //   },
    // }

    // make the api call using the token in the header
    const response = await axios.get(url)
    //log(response);
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}
