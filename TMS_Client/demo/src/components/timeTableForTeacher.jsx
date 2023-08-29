import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createUrl, log } from "../utils/utils";
import "../Timetable.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getTeacherTimetable, getTimetable } from "../services/timeTable.js";
import "../Button.css";
import axios from "axios";

function ViewTimetableTeacher() {
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
  const [file, setFile] = useState(null);
  const [lectureDataId, setLectureDataId] = useState("");

 

  useEffect(() => {
    const startWeekDate = setDateToStartOfWeek();
    setDate(startWeekDate);
    setStartDay(new Date(startWeekDate));
  }, []);

  useEffect(() => {
    debugger;
    log(date);
    if (date !== "") loadSlots(date, 1, 3);
  }, [date]);

  useEffect(() => {
    handleUpload(lectureDataId)
  }, [lectureDataId]);

  const showSubjectData = (rowData) => {
    debugger;
    setSelectedRowData(rowData);
    setDisplay("block");
    setOpacity("0.2");
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

  const loadSlots = async (currentDate, deptId, teacherId) => {
    debugger;

    const response = await getTeacherTimetable(currentDate, deptId, teacherId); //set deptId as second parameter.
    log(response);
    if (response["status"] === 200) {
      log(response.data);
      setDeptName(response.data[0].deptName);
      setWeekDate(response.data[0].date);
      setTimetableSlot(response["data"]);
    } else if (response["status"] === 204) {
      setTimetableSlot([]);
      toast.info("No Lecture scheduled");
    } else {
      toast.error("Error while calling timetable");
    }
  };


  const loadDays = async (noOfDays) => {
    debugger;
    let modifiedDate = new Date(startDay);
    modifiedDate.setDate(modifiedDate.getDate() + noOfDays);
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

    if (
      // lectureData[0].lectureData.trim() === "" ||
      lectureData[0].tommorrowAgenda.trim() === "" ||
      lectureData[0].topicsCovered.trim() === ""
    ) {
      toast.error("Fields cannot be blank");
      return;
    }

    const url = createUrl(`/lecture`);
    const body = {
      subjectId: selectedRowData["subjectId"],
      startTime: selectedRowData["startTime"],
      endTime: selectedRowData["endTime"],
      deptartmentId: selectedRowData["deptId"],
      date: selectedRowData["date"],
      topicsCovered: lectureData[0].topicsCovered,
      // lectureData: lectureData[0].lectureData,
      tommorrowAgenda: lectureData[0].tommorrowAgenda,
    };
    axios
      .post(url, body)
      .then((response) => {
        toast.success("Lecture Data submitted successfully");
        setLectureDataId(response.data['id'])
        debugger
        setDisplay("none");
        setOpacity("1");
        setLectureData([
          {
            lectureData: "no data",
            topicsCovered: "no data",
            tommorrowAgenda: "no data",
          },
        ]);
      })
      .catch((error) => {
        toast.error("Error sending feedback try again later");
      });
  };

  const textChange = (event) => {
    debugger;
    const data = { ...lectureData[0] };
    data[event.target.name] = event.target.value;
    setLectureData([data]);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (id) => {
    debugger
    if(id===""){
      return
    }
    const formData = new FormData();
    formData.append('file', file);

    const url = createUrl(`/lecture/lecturedata/${id}`);
    axios.post(url, formData)
      .then(response => {
        toast.success("Upload successful")
      })
      .catch(error => {
        toast.error("error while uploading")
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
                            Data
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
                                    onClick={() => {
                                      showSubjectData(t);
                                    }}
                                    style={{ color: "whitesmoke" }}
                                  >
                                    Enter Data
                                  </a>
                                  <br />
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
              <div
                class="popup"
                id="popup"
                style={{ display: display, width: "1000px", height: "400px" }}
              >
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
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Lecture Agenda :{" "}
                </b>{" "}
                {/* <textarea
                  type="text"
                  name="lectureData"
                  value={lectureData[0].lectureData}
                  className="form-control"
                  onChange={textChange}
                /> */}
                <input type="file" onChange={handleFileChange} />
                <br/><br/>
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Topics Covered :{" "}
                </b>{" "}
                <textarea
                  type="text"
                  name="topicsCovered"
                  value={lectureData[0].topicsCovered}
                  onChange={textChange}
                  className="form-control"
                />
                <b
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    color: "blue",
                  }}
                >
                  Next Lectures Topics :{" "}
                </b>{" "}
                <textarea
                  type="text"
                  name="tommorrowAgenda"
                  value={lectureData[0].tommorrowAgenda}
                  className="form-control"
                  onChange={textChange}
                />
                <br />
                <button
                  type="button"
                  class="btn btn-blue btn-custom waves-effect waves-light m-b-5"
                  onClick={sendFeedback}
                >
                  Submit
                </button>
                <br />
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewTimetableTeacher;
