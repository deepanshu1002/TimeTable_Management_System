import axios from "axios";
import { createUrl, log } from "../utils/utils";

export async function timetableData(
  deptId,
  collegeStartTime,
  collegeEndTime,
  noOfBreaks,
  breakStartTime1,
  breakEndTime1,
  breakStartTime2,
  breakEndTime2,
  breakStartTime3,
  breakEndTime3,
  noOfLabHrsDaily,
  noOfLectursPerDay,
  noOfDaysThisWeek,
  startDate
) {
  const url = createUrl("/metadata");
  const body = {
    deptId,
    collegeStartTime,
    collegeEndTime,
    noOfBreaks,
    breakStartTime1,
    breakEndTime1,
    breakStartTime2,
    breakEndTime2,
    breakStartTime3,
    breakEndTime3,
    noOfLabHrsDaily,
    noOfLectursPerDay,
    noOfDaysThisWeek,
    startDate,
  };

  // wait till axios is making the api call and getting response from server
  try {
    log(body)
    const response = await axios.post(url, body);
    log(response.data);
    return response;
  } catch (ex) {
    log(ex);
    return 500;
  }
}

export async function getTimetableData(date,deptId) {
  const url = createUrl(`/metadata/${date}/${deptId}`)

  try {
    const response = await axios.get(url,)
    log(response);
    return response
  } catch (ex) {
    log(ex)
    return 500
  }
}
