import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function addLabVenueApi(
    labVenue,
    deptId
  ) {
    const url = createUrl('/labvenue')
    const body = {
    labVenue,
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