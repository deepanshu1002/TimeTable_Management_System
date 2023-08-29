import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createUrl, log } from "../utils/utils";
import "../Timetable.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getTimetable } from "../services/timeTable.js";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewTimetableAdmin() {
  const [timetableSlot, setTimetableSlot] = useState([]);
  const [deptName, setDeptName] = useState("");
  const [weekDate, setWeekDate] = useState("");
  const [opacity, setOpacity] = useState("1");
  const [formattedDate, setFormattedDate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [display, setDisplay] = useState("none");
  const [lectureData, setLectureData] = useState([
    { lectureAgenda: "", topicsCovered: "", tomLecture: "" },
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
  const [uri, setUri] = useState(useParams());
  const [date, setDate] = useState(uri["date"]);
  const [startDate, setStartDate] = useState(new Date(uri["date"]));
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState();
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState();

  useEffect(() => {
    const url1 = createUrl(`/subject/getallsubjects/${uri["deptId"]}`);
    axios
      .get(url1)
      .then((response) => {
        log(response);
        setSubjects(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching subjects data");
      });

    const url2 = createUrl(`/classroom`);
    axios
      .get(url2)
      .then((response) => {
        log(response);
        setClassrooms(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching classrooms data");
      });
  }, []);

  useEffect(() => {
    debugger;
    loadSlots(date, uri["deptId"]);
    log(date);
  }, [date]);

  const editData = (rowData) => {
    debugger;
    setSelectedRowData(rowData); // Store the data of the clicked row
    log("row data");
    log(rowData);
    setDisplay("block"); // Show the edit popup
    setOpacity("0.3"); // Dim the background
  };

  const loadSlots = async (currentDate, deptId) => {
    debugger;

    const response = await getTimetable(currentDate, deptId); //set deptId as second parameter.
    if (response["status"] === 200) {
      log(response.data);
      setDeptName(response.data[0].deptName);
      setWeekDate(response.data[0].date);
      setTimetableSlot(response["data"]);
    } else {
      toast.error("Error while calling timetable");
    }
  };

  const loadDays = async (noOfDays) => {
    debugger;
    let modifiedDate = new Date(startDate);
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

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleClassroomChange = (event) => {
    setSelectedClassroom(event.target.value);
  };

  const updateData = () => {
    debugger;
    const body = {
      timetableSlotId: selectedRowData["timetableSlotId"],
      teacherId: subjects.find((s) => {
        debugger;
        if (s.subjectId === parseInt(selectedSubject)) {
          return s.teacherId;
        }
      }).teacherId,
      subjectId: selectedSubject,
      classroomId: selectedClassroom,
    };

    const url = createUrl(`/timetableSlot/update`);
    axios
      .put(url, body)
      .then((response) => {
        toast.success("Updated successfully");
        setDisplay("none");
        setOpacity("1");
        loadSlots(selectedRowData['date'], uri["deptId"]);
      })
      .catch((error) => {
        toast.error("Error updating data");
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
                            Edit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {timetableSlot.map((t) => {
                          return (
                            <tr key={t.timetableSlotId} class="inner-box">
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
                                    onClick={() => {
                                      editData(t);
                                    }}
                                    style={{ color: "whitesmoke" }}
                                  >
                                    Edit
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
                  EDIT DATA
                </p>

                <center>
                  <div className="mb-3">
                    <label htmlFor="">
                      <b>Subject :</b>
                    </label>
                    &nbsp;&nbsp;
                    <select
                      value={selectedSubject}
                      onChange={handleSubjectChange}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s.subjectId} value={s.subjectId}>
                          {s.subjectName}
                        </option>
                      ))}
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="">
                      <b>Venue :</b>
                    </label>
                    &nbsp;&nbsp;
                    <select
                      value={selectedClassroom}
                      onChange={handleClassroomChange}
                    >
                      <option value="">Select a Venue</option>
                      {classrooms.map((s) => (
                        <option key={s.classroomId} value={s.classroomId}>
                          {s.classroomName}
                        </option>
                      ))}
                    </select>
                    <br />
                    <button
                      type="button"
                      class="btn btn-blue btn-custom waves-effect waves-light m-b-5"
                      onClick={updateData}
                      style={{
                        height: "30px",
                        width: "80px",
                        paddingTop: "3px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewTimetableAdmin;
