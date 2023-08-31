import React, { useEffect, useState } from "react";
import "../SubjectWeeklyHours.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addSubjectWeeklyhrs,
  getSubjectWeeklyhrs,
} from "../services/subjectMetadata";
import { createUrl, log } from "../utils/utils";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SubjectWeeklyHours() {
  //const { deptId, date } = useParams();
  const [uri, setUri] = useState(useParams());
  const [subjects, setSubjects] = useState([]);
  const [weeklyHrs, setWeeklyHrs] = useState([]);
  const [totalWeeklyHrs, setTotalWeeklyHrs] = useState();
  const [totalHrs, setTotalHrs] = useState();
  const [departmentName, setDepartmentName] = useState();
  const [generateBtnDisplay, setGenerateBtnDisplay] = useState("none");
  const [viewBtnDisplay, setViewBtnDisplay] = useState("none");

    const navigate=useNavigate();

  useEffect(() => {
    const url1 = createUrl(`/subject/getallsubjects/${uri["deptId"]}`);
    axios
      .get(url1)
      .then((response) => {
        setSubjects(response.data);
        log(subjects);
      })
      .catch((error) => {
        toast.error("Error fetching data");
      });

    const url2 = createUrl(
      `/metadata/getnoofweeklyhrs/${uri["date"]}/${uri["deptId"]}`
    );

    axios
      .get(url2)
      .then((response) => {
        setTotalWeeklyHrs(response.data);
        setTotalHrs(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching data");
      });

    const url3 = createUrl(`/department/${uri["deptId"]}`);
    debugger;
    axios
      .get(url3)
      .then((response) => {
        setDepartmentName(response.data.deptName);
      })
      .catch((error) => {
        toast.error("Error fetching data");
      });
  }, []);

  useEffect(() => {
    const hrsArray = weeklyHrs.map((hrs) => parseInt(hrs) || 0); // Convert input values to float, or use 0 if NaN
    const total = hrsArray.reduce((acc, hrs) => acc + hrs, 0); // Sum up the valid values
    const newTotal = parseInt(totalHrs) - parseInt(total); // Calculate the new total
    debugger;
    if (isNaN(newTotal)) {
      setTotalWeeklyHrs(totalHrs); // Update the state with the new total if it's a valid number
    } else {
      setTotalWeeklyHrs(newTotal);
    }
  }, [weeklyHrs]);

  const constructSubjectMetadataArray = () => {
    const metadataArray = subjects.map((s, index) => {
      return {
        deptId: s.deptId,
        subjectId: s.subjectId,
        weeklyHrs: parseInt(weeklyHrs[index]) || 0,
        startDate: uri.date,
      };
    });
    return metadataArray;
  };

  const sendData = async () => {
    if (totalWeeklyHrs === 0) {
      const subjectMetadataArray = constructSubjectMetadataArray();

      const response = await addSubjectWeeklyhrs(subjectMetadataArray);
      debugger;
      if (response["status"] === 201) {
        toast.success("Data Added");
        setGenerateBtnDisplay("block");
      } else {
        toast.error("Data not added");
      }
    } else {
      toast.error("Total not zero");
    }
  };

  const generateTimetable= async () => {
    debugger
    const url = createUrl(`/timettable/${uri["deptId"]}/${uri["date"]}`);
    axios
      .get(url)
      .then((response) => {
        toast.success("TimeTable Generated");
        setViewBtnDisplay("block");
      })
      .catch((error) => {
        toast.error("Error generating Timetable");
      });
  };

  return (
    <div style={{paddingTop:"100px"}}>
      <div class="container">
        <div class="col-12 col-sm-12 col-md-12">
          <div class="card">
            <div class="card-header" style={{ backgroundColor: "Highlight" }}>
              <h3>
                <b>SUBJECT WEEKLY HOURS FOR {departmentName} </b>
              </h3>
            </div>
            <div class="card-body">
              <div class="media-list position-relative">
                <div
                  class="table-responsive"
                  id="project-team-scroll"
                  tabindex="1"
                  style={
                    {
                      /*height: 400px; overflow: hidden; outline: none;*/
                    }
                  }
                >
                  <table class="table table-hover table-xl mb-0">
                    <thead>
                      <tr>
                        <th>SR No</th>
                        <th>Subject Name</th>
                        <th>Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjects.map((s, index) => {
                        return (
                          <tr key={index}>
                            <td class="text-truncate">{index + 1}</td>
                            <td class="text-truncate">{s.subjectName}</td>
                            <td class="text-truncate">
                              <input
                                type="number"
                                style={{ width: "50px" }}
                                value={weeklyHrs[index]}
                                onChange={(e) => {
                                  var Hrs = [...weeklyHrs];
                                  Hrs[index] = e.target.value;
                                  log(Hrs);
                                  setWeeklyHrs(Hrs);
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <br />
                <b>Total Weekly Hrs Available:{totalWeeklyHrs}</b>

                <br />
                <center>
                  <button className="btn btn-success" onClick={sendData}>
                    Submit
                  </button>
                  <br />
                  <br />
                  <br />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        <button
          style={{ display: generateBtnDisplay }}
          type="button"
          class="btn btn-purple btn-custom waves-effect waves-light m-b-5"
          onClick={generateTimetable}
        >
          Click here to Generate timetable for {departmentName} for week{" "}
          {uri.date}
        </button>
        <br/>
        <button
          style={{ display: viewBtnDisplay }}
          type="button"
          class="btn btn-blue btn-custom waves-effect waves-light m-b-5"
          onClick={()=>{
            navigate(`/timetableadmin/${uri["deptId"]}/${uri["date"]}`);
          }}
        >
          Click here to View timetable for {departmentName} for week{" "}
          {uri.date}
        </button>
      </center>
    </div>
  );
}
export default SubjectWeeklyHours;
