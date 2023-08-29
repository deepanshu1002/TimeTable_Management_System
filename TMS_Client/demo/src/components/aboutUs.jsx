import React from "react";
import "../css_file/aboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossOrigin="anonymous"
      />
      <div className="container" style={{ backgroundColor: "lightcyan" }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      {/* Pink */}
                      <img
                        src="http://127.0.0.1:3000/pics/indian_flag.jpg"
                        className="img-fluid"
                        alt=""
                        style={{ height: "450px" }}
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      {/* Blue */}
                      <img
                        src="http://127.0.0.1:3000/pics/programming.jpg"
                        className="img-fluid"
                        alt=""
                        style={{ height: "350px" }}
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      {/* Orange */}
                      <img
                        src="http://127.0.0.1:3000/pics/schedule-time-table.jpeg"
                        className="img-fluid"
                        alt=""
                        style={{ height: "250px" }}
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
              <h5 className="text-custom font-weight-normal mb-3">About Us</h5>
              <h4 className="title mb-4">
                Our mission is to <br />
                make your life easier.
              </h4>
              <p className="text-muted mb-0">
                Timetable management software helps design timetables. It helps
                to regulate proper schedules and allocate faculty according to
                their availability by outlining the classes, sections, and other
                details fed into the system.
              </p>

              <div className="row">
                <div className="col-lg-6 mt-4 pt-2">
                  <div
                    className="media align-items-center rounded shadow p-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa fa-play h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">Easy to use</h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div
                    className="media align-items-center rounded shadow p-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa fa-file-download h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">Free Available </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div
                    className="media align-items-center rounded shadow p-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa fa-user h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">Support</h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div
                    className="media align-items-center rounded shadow p-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="fa fa-image h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">Development</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
