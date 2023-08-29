import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createUrl, log } from "../utils/utils";
import "../Timetable.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getTimetable } from "../services/timeTable.js";
import "../Button.css";
import axios from "axios";

function ViewTimetable() {
  const [timetableSlot, setTimetableSlot] = useState([]);
  const [deptName, setDeptName] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const [opacity, setOpacity] = useState("1");
  const [formattedDate, setFormattedDate] = useState("");
  const [day, setDay] = useState("");
  const [startDay, setStartDay] = useState();
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [display, setDisplay] = useState("none");
  const [lectureData, setLectureData] = useState([
    {
      lectureData: "no data",
      topicsCovered: "no data",
      tommorrowAgenda: "no data",
    },
  ]);
  const [feedback, setFeedback] = useState("none");
  const [dayColor, setDayColor] = useState([
    "tomato",
    "black",
    "black",
    "black",
    "black",
    "black",
  ]);
  const [date, setDate] = useState("");
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [lectureDataId, setLectureDataId] = useState("");
  const [departmentId, setDepartmentId] = useState(sessionStorage['deptId']);

  // useEffect(() => {
  //   setDate();
  //   loadSlots();
  // }, []);

  useEffect(() => {
    const startWeekDate = setDateToStartOfWeek();
    setDate(startWeekDate);
    setStartDay(new Date(startWeekDate));
  }, []);

  // useEffect(() => {
  //   if (year !== "" && month !== "" && day !== "") {
  //     const formattedDate = `${year}-${month}-${day}`;
  //     log(formattedDate);
  //     loadSlots(formattedDate);
  //   }
  // }, [year, month, day]);

  useEffect(() => {
    debugger;
    log(date);
    if (date !== "") loadSlots(date, departmentId); //set the id for student from session storage
  }, [date]);

  const showSubjectData = (rowData) => {
    debugger;
    setSelectedRowData(rowData);
    setDisplay("block");
    setOpacity("0.2");

    const url = createUrl(
      `/lecture/slotLectureData/${rowData["deptId"]}/${rowData["date"]}/${rowData["startTime"]}`
    );
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        log(data);
        setLectureData([
          {
            // lectureData: data["lectureData"],
            topicsCovered: data["topicsCovered"],
            tommorrowAgenda: data["tommorrowAgenda"],
          },
        ]);
        setLectureDataId(data["id"]);
      })
      .catch((error) => {
        setLectureData([
          {
            lectureData: "no data",
            topicsCovered: "no data",
            tommorrowAgenda: "no data",
          },
        ]);
      });
  };

  const setDateToStartOfWeek = () => {
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

    const newFormattedDate = `${newYear}-${newMonth}-${newDay}`;
    return newFormattedDate;
  };

  const loadSlots = async (currentDate, deptId) => {
    debugger;

    const response = await getTimetable(currentDate, deptId); //set deptId as second parameter.
    log(response);
    if (response["status"] === 200) {
      log(response.data);
      setDeptName(response.data[0].deptName);
      setWeekDate(response.data[0].date);
      setTimetableSlot(response["data"]);
    } else {
      toast.error("Error while calling timetable");
    }
  };

  // const loadDays = async (noOfDays) => {
  //   debugger;
  //   let day = parseInt(startDay) + noOfDays;
  //   setDay(day);
  // };
  const loadDays = async (noOfDays) => {
    debugger;
    let modifiedDate = new Date(startDay);
    modifiedDate.setDate(modifiedDate.getDate() + noOfDays);

    // if (modifiedDate.getMonth() !== startDate.getMonth()) {
    //   modifiedDate.setDate(1);
    //   modifiedDate.setMonth(startDate.getMonth() + 1);

    //   if (modifiedDate.getYear() !== startDate.getYear()) {
    //     modifiedDate.setDate(1);
    //     modifiedDate.setMonth(0);
    //     modifiedDate.setYear(startDate.getYear() + 1);
    //   }
    // }

    setDate(modifiedDate.toISOString().split("T")[0]); // Convert to YYYY-MM-DD format
  };

  const sendFeedback = async () => {
    debugger;
    log(`row data = ${selectedRowData}`);
    const currentDateTime = new Date();
    const lectureEndTime = new Date(
      `${selectedRowData.date} ${selectedRowData.endTime}`
    );

    if (currentDateTime < lectureEndTime) {
      toast.error("Lecture time has not passed yet.");
      return;
    }

    if (selectedRating === 0) {
      toast.error("Please select a rating before submitting.");
      return;
    }

    if (feedback.trim() === "") {
      toast.error("Please enter your feedback before submitting.");
      return;
    }

    const url = createUrl(`/feedback`);
    const body = {
      studentId: 3, //set the userid through sessionstrorage
      subjectId: selectedRowData["subjectId"],
      deptId: selectedRowData["deptId"],
      date: selectedRowData["date"],
      rating: selectedRating,
      feedback: feedback,
    };
    axios
      .post(url, body)
      .then((response) => {
        toast.success("Feedback submitted successfully");
        setSelectedRating(1);
        setFeedback("none");
        setDisplay("none");
        setOpacity("1");
      })
      .catch((error) => {
        toast.error("Error sending feedback try again later");
      });
  };

  const downloadData = () => {
    const url = createUrl(`/lecture/download/${lectureDataId}`);
    axios
      .get(url)
      .then((response) => {
        debugger;
        const blob = new Blob([response.data], { type: "application/zip" }); // Set content-type to "application/zip"
        const url = URL.createObjectURL(blob);

        window.location.href = url; // Navigate to the generated URL
        toast.success("Downloaded successfully");

        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        toast.error("No data found try again later");
      });
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div class="event-schedule-area-two bg-color pad100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title-text">
                <center>
                  <h2 style={{ color: "blue" }}>
                    <b>
                      {deptName} {weekDate}
                    </b>
                  </h2>
                </center>
              </div>

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
                    <ul
                      class="nav custom-tab"
                      id="myTab"
                      role="tablist"
                      // style={{ backgroundColor: "Highlight" }}
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
                            loadDays(0);
                            setDayColor((prevColors) => {
                              const newColors = [...prevColors]; // Create a copy of the array
                              newColors[0] = "tomato"; // Set the color for the first day
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
                              newColors[1] = "tomato";
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
                              newColors[2] = "tomato";
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
                              newColors[3] = "tomato";
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
                              newColors[4] = "tomato";
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
                              newColors[5] = "tomato";
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
                                    onClick={() => {
                                      showSubjectData(t);
                                    }}
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
                <span
                  class="popup-close-btn"
                  onClick={() => {
                    setDisplay("none");
                    setOpacity("1");
                  }}
                >
                  &#10006;
                </span>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    color: "midnightblue",
                  }}
                >
                  LECTURE DATA
                </p>
                {/* <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Lecture Agenda :{" "}
                </b>{" "}
                <p>{lectureData[0].lectureData}</p> */}
                <div class="categories">
                <button
                  type="button"
                  class="btn btn-blue btn-custom waves-effect waves-light m-b-5"
                  onClick={downloadData}
                >
                  Download Data
                </button>
                  
                </div>
                <br/>
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
                <p>{lectureData[0].tommorrowAgenda}</p>
                <div class="rate">
                  <b>Lecture Rating :</b>
                  <br></br>
                  <input
                    type="radio"
                    id="star5"
                    name="rate"
                    value="5"
                    onClick={() => setSelectedRating(5)}
                  />
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <input
                    type="radio"
                    id="star4"
                    name="rate"
                    value="4"
                    onClick={() => setSelectedRating(4)}
                  />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input
                    type="radio"
                    id="star3"
                    name="rate"
                    value="3"
                    onClick={() => setSelectedRating(3)}
                  />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input
                    type="radio"
                    id="star2"
                    name="rate"
                    value="2"
                    onClick={() => setSelectedRating(2)}
                  />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input
                    type="radio"
                    id="star1"
                    name="rate"
                    value="1"
                    onClick={() => setSelectedRating(1)}
                  />
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
                <button
                  type="button"
                  class="btn btn-blue btn-custom waves-effect waves-light m-b-5"
                  onClick={sendFeedback}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewTimetable;
