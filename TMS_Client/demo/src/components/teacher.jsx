import React from "react";
import "../css_file/tryAdmin.css";
import '../css_file/link_Button.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <h1
          className="dashboard-heading"
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontSize: "36px",
            color: "#007bff",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Welcome to the Teacher Dashboard
        </h1>
      </div>
      <section class="py-6 bg-light-primary">
        <div class="container">
          <div
            class="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate"
            data-aos="fade-up" style={{marginTop:'100px'}}
          >
             <div class="col my-3">
              <button
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
                onClick={() => navigate("/timetable")}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/timetable.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">View/Edit Timetable</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div class="col my-3">
              <button
                onClick={() => navigate("/getLeaveApplication")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/leaves.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Leave Applications</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/leaveapplication")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/applyleave.png"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Apply Leave</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/checkteacherrating")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/ratings.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Check Ratings</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TeacherDashboard;
