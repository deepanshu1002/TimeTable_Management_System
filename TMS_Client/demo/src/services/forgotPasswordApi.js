import axios from "axios";
import { createUrl, log } from "../utils/utils";

export async function forgotPasswordApi(email) {
  const url1 = createUrl("/forgotpassword/email");
  const body = { email };
  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url1, body);
    debugger
    log(response.data);
    return response;
  } catch (ex) {
    log(ex);
    return null;
  }
}
