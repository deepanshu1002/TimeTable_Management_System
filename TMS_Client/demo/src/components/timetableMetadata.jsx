import React, { useEffect, useState } from "react";
import "../TimetableMetadata.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUrl } from "../utils/utils";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getTimetableData, timetableData } from "../services/timetableMetadata";
import { toast } from "react-toastify";
import SubjectWeeklyHours from "./subjectWeeklyHours";

function TimeTableMetadata() {
  const [clgStartTime, setClgStartTime] = useState("");
  const [clgEndTime, setClgEndTime] = useState("");
  const [noOfLectursPerDay, setNoOfLectursPerDay] = useState("");
  const [noOfDaysThisWeek, setNoOfDaysThisWeek] = useState("");
  const [startDate, setStartDate] = useState("");
  const [breakStartTime, setBreakStartTime] = useState([
    "00:00",
    "00:00",
    "00:00",
  ]);
  const [breakEndTime, setBreakEndTime] = useState(["00:00", "00:00", "00:00"]);
  const [noOfBreaks, setNoOfBreaks] = useState("");
  const [noOfLabHrsDaily, setNoOfLabHrsDaily] = useState("");
  const [deptId, setDeptId] = useState("");

  var [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const url = createUrl("/department");
    axios
      .get(url)
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
       toast.error("Error fetching departments:", error);
      });
  }, []);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setDeptId(selectedDepartment);
  };

  const noOfBreaksCheck = (no) => {
    if (no > 3) {
      setNoOfBreaks("3");
    }
  };

  const sendData = async () => {
    const response = await timetableData(
      selectedDepartment,
      clgStartTime,
      clgEndTime,
      noOfBreaks,
      breakStartTime[0],
      breakEndTime[0],
      breakStartTime[1],
      breakEndTime[1],
      breakStartTime[2],
      breakEndTime[2],
      noOfLabHrsDaily,
      noOfLectursPerDay,
      noOfDaysThisWeek,
      startDate
    );
    if (response["status"] === 201) {
      toast.success("Data entered successfully");
      navigate(`/subjectweeklyhours/${selectedDepartment}/${startDate}`);
    } else {
      toast.error("Error while sending data");
    }
  };

  const getData = async () => {
    const response = await getTimetableData(startDate, selectedDepartment);
    if (response["status"] === 200) {
      const data = response["data"];
      setSelectedDepartment(data["deptId"]);
      setClgStartTime(data["collegeStartTime"]);
      setClgEndTime(data["collegeEndTime"]);
      setNoOfBreaks(data["noOfBreaks"]);
      setBreakStartTime([
        data["breakStartTime1"],
        data["breakStartTime3"],
        data["breakStartTime3"],
      ]);
      setBreakEndTime([
        data["breakEndTime1"],
        data["breakEndTime2"],
        data["breakEndTime3"],
      ]);
      setNoOfLabHrsDaily(data["noOfLabHrsDaily"]);
      setNoOfLectursPerDay(data["noOfLectursPerDay"]);
      setNoOfDaysThisWeek(data["noOfDaysThisWeek"]);
      setStartDate(data["startDate"]);
    } else {
      toast.error("Error while getting data");
    }
  };

  return (
    <div>
      <div className="row" style={{ fontWeight: "bold" }}>
        <div className="col"></div>
        <div
          className="col-lg-6"
          style={{
            backgroundColor: "lightcyan",
            borderRadius: "20px",
            padding: "30px",
            marginTop:'40px'
          }}
        >
          <div
            className="mb-3">
            <div
  style={{
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  }}
>
  <h2
    className="dashboard-heading"
    style={{
      fontSize: "36px",
      color: "#007bff",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      fontFamily: 'Montserrat, sans-serif',
      margin: "0",
    }}
  >
    Timetable Data
  </h2>
</div>

          </div>
          <div className="form">
            <div className="row mb-5 align-items-center">
  <div className="col-sm-3">
    <label className="mb-0" style={{ color: "#343a40", fontSize: "18px" }}>
      Department
    </label>
  </div>
  <div className="col-sm-9">
     <select
      className="form-select form-select-lg"
      value={selectedDepartment}
      onChange={handleDepartmentChange}
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "10px",
        border: "2px solid #ced4da",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        fontSize: "18px",
        width: "100%",
      }}
    >
      <option value="">Select a department</option>
      {departments.map((department) => (
        <option key={department.deptName} value={department.deptId}>
          {department.deptName}
        </option>
      ))}
    </select>
  </div>
</div>

            <div className="mb-3">
              <label htmlFor="">College Start Time</label>
              <input
                type="time"
                className="form-control"
                value={clgStartTime}
                onChange={(e) => {
                  setClgStartTime(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">College End Time</label>
              <input
                type="time"
                id="collegeEndTimeId"
                value={clgEndTime}
                className="form-control"
                onChange={(e) => {
                  setClgEndTime(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">No of Breaks</label>
              <input
                max="3"
                type="number"
                id="noOfBreaksId"
                value={noOfBreaks}
                className="form-control"
                onChange={(e) => {
                  setNoOfBreaks(e.target.value);
                  noOfBreaksCheck(e.target.value);
                }}
              />
            </div>

            {Array.from({ length: noOfBreaks }, (_, index) => (
              <div className="mb-3" key={index}>
                <div className="row">
                  <div className="col">
                    <label htmlFor={`breakStartTime${index + 1}`}>
                      Break Start Time {index + 1}
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      value={breakStartTime[index]}
                      onChange={(e) => {
                        let copyArr = [...breakStartTime];
                        copyArr[index] = e.target.value;
                        setBreakStartTime(copyArr);
                      }}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor={`breakEndTime${index + 1}`}>
                      Break End Time {index + 1}
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      value={breakEndTime[index]}
                      onChange={(e) => {
                        let copyArr = [...breakEndTime];
                        copyArr[index] = e.target.value;
                        setBreakEndTime(copyArr);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="mb-3">
              <label htmlFor="">No of lab hrs Daily</label>
              <input
                type="number"
                className="form-control"
                value={noOfLabHrsDaily}
                onChange={(e) => {
                  setNoOfLabHrsDaily(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">No of Lectures per Day</label>
              <input
                type="number"
                className="form-control"
                value={noOfLectursPerDay}
                onChange={(e) => {
                  setNoOfLectursPerDay(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">No of Days this Week</label>
              <input
                type="number"
                className="form-control"
                value={noOfDaysThisWeek}
                onChange={(e) => {
                  setNoOfDaysThisWeek(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="">Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </div>

            <div className="mb-3" style={{ textAlign: "center" }}>
              <button style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "16px",
            width:'200px'
          }}  className="btn btn-success" onClick={sendData}>
                Submit
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "16px",
            width:'200px'
          }}  className="btn btn-primary" onClick={getData}>
                Previous Data
              </button>
              <br />
              <br />
              <small style={{ color: "red" }}>
                *select department and previous weeks start date to get previous
                data
              </small>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default TimeTableMetadata;
