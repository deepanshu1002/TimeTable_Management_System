import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function addLectureDataApi(
    lectureData,
    tommorrowAgenda,
    topicsCovered
)
{
    const url = createUrl('/lecture')
    const body = {
    lectureData,
    tommorrowAgenda,
    topicsCovered
    }

    try {
        const response = await axios.post(url, body)
        log(response.data)
        return response.data
      } catch (ex) {
        log(ex)
        return null
      }
    
}