import React from "react";
import "../css_file/tryAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

function AdminDashboard() {
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
          Welcome to the Admin Dashboard
        </h1>
      </div>
      <section class="py-6 bg-light-primary">
        <div class="container">
          <div
            class="row row-cols-lg-3 row-cols-md-2 row-cols-1 text-center justify-content-center px-xl-6 aos-init aos-animate"
            data-aos="fade-up"
          >
            <div class="col my-3">
              <button
                onClick={() => navigate("/validuser")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/users.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Manage Users</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div class="col my-3">
              <button
                onClick={() => navigate("/manageleaves")}
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
                      <h3 class="font-weight-bold mb-3">Manage Leaves</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/managesubject")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/subjects.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Add Subject</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/managedepartment")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/departments.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Add Department</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/managelab")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/labs.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Add Lab Venue</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/manageclassroom")}
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/classrooms.jpeg"
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Add Classroom</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                onClick={() => navigate("/ratings")}
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
                      <h3 class="font-weight-bold mb-3">Teacher Ratings</h3>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div class="col my-3">
              <button
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
                // onClick={() => navigate("/timetablemetadata")}
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
            <div class="col mb-0 mt-3 mb-lg-3">
              <button
                className="border-0 shadow-none"
                style={{ backgroundColor: "white" }}
                onClick={() => navigate("/timetablemetadata")}
              >
                <div class="card border-hover-primary hover-scale">
                  <div class="card-body">
                    <div class="text-primary mb-5">
                      <img
                        src="http://127.0.0.1:3000/admin_specific_images/gentimetable.jpg  "
                        style={{ width: "250px", height: "250px" }}
                        alt=""
                      />
                      <br></br>
                      <br></br>
                      <h3 class="font-weight-bold mb-3">Generate Timetable</h3>
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
export default AdminDashboard;
