import axios from "axios";
import { createUrl, log } from "../utils/utils";

export async function getSubjectWeeklyhrs(date,deptId) {
  const url = createUrl(`/getweeklyhrs/${deptId}/${date}`)

  try {
    const response = await axios.get(url)
    log(response);
    return response
  } catch (ex) {
    log(ex)
    return 500
  }
}

export async function addSubjectWeeklyhrs(data) {
  const url = createUrl(`/subjectmetadata/addweeklyhrs`)
  const body=data
  try {
    const response = await axios.post(url,body)
    log(response);
    return response
  } catch (ex) {
    log(ex)
    return 500
  }
}
