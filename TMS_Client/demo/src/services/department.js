import axios from 'axios'
import { createUrl, log } from '../utils/utils'


export async function getDepartmentDetails()
{
    const url = createUrl('/department')

    try {
        const response = await axios.get(url)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return null
      }
}