import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { log } from "../utils/utils";
import "../Timetable.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getTimetable } from "../services/timeTable.js";

function ViewTimetable() {
  const [timetableSlot, setTimetableSlot] = useState([]);
  const [deptName, setDeptName] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const [opacity, setOpacity] = useState("1");
  const [formattedDate, setFormattedDate] = useState("");
  const [day, setDay] = useState("");
  const [startDay, setStartDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [display, setDisplay] = useState("none");
  const [lectureData, setLectureData] = useState([
    { lectureAgenda: "", topicsCovered: "", tomLecture: "" },
  ]);
  const [feedback, setFeedback] = useState("none");
  const [dayColor, setDayColor] = useState([
    "royalblue",
    "black",
    "black",
    "black",
    "black",
    "black",
  ]);

  // useEffect(() => {
  //   setDate();
  //   loadSlots();
  // }, []);

  useEffect(() => {
    setDate();
  }, []);

  useEffect(() => {
    if (year !== "" && month !== "" && day !== "") {
      const formattedDate = `${year}-${month}-${day}`;
      log(formattedDate);
      loadSlots(formattedDate);
    }
  }, [year, month, day]);

  const showSubjectData = () => {
    debugger;
    setDisplay("block");
    setOpacity("0.2");
    setLectureData([
      {
        lectureAgenda: "This is todays lecture agenda",
        topicsCovered: "These are todays Topics covered",
        tomLecture: "These topics will be covered tommorow",
      },
    ]);
  };

  const setDate = () => {
    debugger;
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)

    if (dayOfWeek !== 1) {
      // Monday is 1
      const daysToMonday = dayOfWeek === 0 ? 1 : 1 - dayOfWeek;
      now.setDate(now.getDate() + daysToMonday);
    }

    const newYear = now.getFullYear();
    const newMonth = String(now.getMonth() + 1).padStart(2, "0");
    const newDay = String(now.getDate()).padStart(2, "0");

    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);
    setStartDay(newDay);

    const newFormattedDate = `${newYear}-${newMonth}-${newDay}`;
    setFormattedDate(newFormattedDate);
    log(newFormattedDate);
  };

  const loadSlots = async (currentDate) => {
    debugger;

    const response = await getTimetable(currentDate, 1); //set deptId as second parameter.
    log(response);
    if (response["status"] === 200) {
      setDeptName(response.data[0].deptName);
      setWeekDate(response.data[0].date);
      setTimetableSlot(response["data"]);
      log(timetableSlot);
    } else {
      toast.error("Error while calling timetable");
    }
  };

  const loadDays = async (noOfDays) => {
    debugger;
    let day = parseInt(startDay) + noOfDays;
    setDay(day);
  };

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div class="event-schedule-area-two bg-color pad100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center">
                <div class="title-text">
                  <h2 style={{ color: "blue" }}>
                    <b>{deptName}</b>
                  </h2>
                </div>
                <b style={{ color: "darkviolet" }}>
                  TimeTable for the week
                  <br />
                  {weekDate}
                </b>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <ul
                class="nav custom-tab"
                id="myTab"
                role="tablist"
                style={{ backgroundColor: "Highlight" }}
              >
                <li class="nav-item">
                  <a
                    class="nav-link active show"
                    id="home-taThursday"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => {
                      setDayColor((prevColors) => {
                        const newColors = [...prevColors]; // Create a copy of the array
                        newColors[0] = "royalblue"; // Set the color for the first day
                        newColors[1] = "black";
                        newColors[2] = "black";
                        newColors[3] = "black";
                        newColors[4] = "black";
                        newColors[5] = "black";
                        return newColors;
                      });
                    }}
                    style={{ color: dayColor[0] }}
                  >
                    Monday
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    onClick={() => {
                      loadDays(1);
                      setDayColor((prevColors) => {
                        const newColors = [...prevColors]; // Create a copy of the array
                        newColors[0] = "black"; // Set the color for the first day
                        newColors[1] = "royalblue";
                        newColors[2] = "black";
                        newColors[3] = "black";
                        newColors[4] = "black";
                        newColors[5] = "black";
                        return newColors;
                      });
                    }}
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    style={{ color: dayColor[1] }}
                  >
                    Tuesday
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    onClick={() => {
                      loadDays(2);
                      setDayColor((prevColors) => {
                        const newColors = [...prevColors]; // Create a copy of the array
                        newColors[0] = "black"; // Set the color for the first day
                        newColors[1] = "black";
                        newColors[2] = "royalblue";
                        newColors[3] = "black";
                        newColors[4] = "black";
                        newColors[5] = "black";
                        return newColors;
                      });
                    }}
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    style={{ color: dayColor[2] }}
                  >
                    Wednesday
                  </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    id="sunday-tab"
                    data-toggle="tab"
                    href="#sunday"
                    onClick={() => {
                      loadDays(3);
                      setDayColor((prevColors) => {
                        const newColors = [...prevColors]; // Create a copy of the array
                        newColors[0] = "black"; // Set the color for the first day
                        newColors[1] = "black";
                        newColors[2] = "black";
                        newColors[3] = "royalblue";
                        newColors[4] = "black";
                        newColors[5] = "black";
                        return newColors;
                      });
                    }}
                    role="tab"
                    aria-controls="sunday"
                    aria-selected="false"
                    style={{ color: dayColor[3] }}
                  >
                    Thursday
                  </a>
                </li>
                <li class="nav-item mr-0 d-none d-lg-block">
                  <a
                    class="nav-link"
                    id="monday-tab"
                    data-toggle="tab"
                    href="#monday"
                    onClick={() => {
                      loadDays(4);
                      setDayColor((prevColors) => {
                        const newColors = [...prevColors]; // Create a copy of the array
                        newColors[0] = "black"; // Set the color for the first day
                        newColors[1] = "black";
                        newColors[2] = "black";
                        newColors[3] = "black";
                        newColors[4] = "royalblue";
                        newColors[5] = "black";
                        return newColors;
                      });
                    }}
                    role="tab"
                    aria-controls="monday"
                    aria-selected="false"
                    style={{ color: dayColor[4] }}
                  >
                    Friday
                  </a>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    id="sunday-tab"
                    data-toggle="tab"
                    href="#sunday"
                    onClick={() => {
                      loadDays(5);
                      setDayColor((prevColors) => {
                        const newColors = [...prevColors]; // Create a copy of the array
                        newColors[0] = "black"; // Set the color for the first day
                        newColors[1] = "black";
                        newColors[2] = "black";
                        newColors[3] = "black";
                        newColors[4] = "black";
                        newColors[5] = "royalblue";
                        return newColors;
                      });
                    }}
                    role="tab"
                    aria-controls="sunday"
                    aria-selected="false"
                    style={{ color: dayColor[5] }}
                  >
                    Saturday
                  </a>
                </li>
              </ul>
              <div
                class="tab-content"
                id="myTabContent"
                style={{ opacity: opacity }}
              >
                <div
                  class="tab-pane fade active show"
                  id="home"
                  role="tabpanel"
                >
                  <div class="table-responsive">
                    <table class="table" style={{ border: "1px solid black" }}>
                      <thead
                        style={{ backgroundColor: "blue", color: "white" }}
                      >
                        <tr>
                          <th class="text-center" scope="col">
                            Time
                          </th>
                          <th scope="col">Speakers</th>
                          <th scope="col">Session</th>
                          <th scope="col">Venue</th>
                          <th class="text-center" scope="col">
                            Feedback
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {timetableSlot.map((t) => {
                          return (
                            <tr class="inner-box">
                              <th scope="row">
                                <div class="event-date">
                                  <h5>
                                    <b>{t.startTime}</b>
                                  </h5>
                                  <h5>
                                    <b>{t.endTime}</b>
                                  </h5>
                                </div>
                              </th>
                              <td>
                                <div class="event-img">
                                  <img
                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="event-wrap">
                                  <h3>
                                    <a>{t.subjectName}</a>
                                  </h3>
                                  <div class="meta">
                                    <div class="organizers">
                                      <a>Prof.{t.teacherName}</a>
                                    </div>
                                    <div class="categories">
                                      <a href="#/">Inspire</a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="r-no">
                                  <b
                                    style={{
                                      fontSize: "1.2rem",
                                      color: "darkmagenta",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {t.classroomName}
                                  </b>
                                </div>
                              </td>
                              <td>
                                <div class="primary-btn">
                                  <a
                                    class="btn btn-primary"
                                    onClick={showSubjectData}
                                    style={{ color: "whitesmoke" }}
                                  >
                                    Read More
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="popup" id="popup" style={{ display: display }}>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    color: "midnightblue",
                  }}
                >
                  LECTURE DATA
                </p>
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Lecture Agenda :{" "}
                </b>{" "}
                <p>{lectureData[0].lectureAgenda}</p>
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Topics Covered :{" "}
                </b>{" "}
                <p>{lectureData[0].topicsCovered}</p>
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Next Lectures Topics :{" "}
                </b>{" "}
                <p>{lectureData[0].tomLecture}</p>
                <div class="rate">
                  <b>Lecture Rating :</b>
                  <br></br>
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <b>Lecture Feedback :</b>
                <br />
                <input
                  type="text"
                  id="feedbackId"
                  name="feedbackTag"
                  value={feedback}
                  placeholder="Enter feedback"
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                />
                <br></br>
                <br></br>
                <a
                  onClick={() => {
                    setDisplay("none");
                    setOpacity("1");
                  }}
                >
                  Close
                </a>
              </div>

              <div class="primary-btn text-center">
                <a href="#/" class="btn btn-primary">
                  Download Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewTimetable;
