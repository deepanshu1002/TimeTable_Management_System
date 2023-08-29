import React from "react";
import "../css_file/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function contact() {
  return (
    <div style={{padding: "50px"}}>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="contact-box center-version">
              <a href="#profile.html">
                <img
                  alt=""
                  class="img-circle"
                  src="http://127.0.0.1:3000/pics/Prathamesh.jpeg"
                  style={{ height: "250px", width: "180px" }}
                />
                <h3 class="m-b-xs">
                  <strong>Prathamesh Patil</strong>
                </h3>

                <div class="font-bold">Full Stack Developer</div>
                <address class="m-t-md">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/prathamesh-patil-524645204"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prathamesh Patil
                  </a>
                  <br />
                  <abbr title="Phone">P:</abbr> (+91) 9637972261
                </address>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="contact-box center-version">
              <a href="#profile.html">
                <img
                  alt=""
                  class="img-circle"
                  src="http://127.0.0.1:3000/pics/Rohan.jpg"
                  style={{ height: "250px", width: "220px" }}
                />
                <h3 class="m-b-xs">
                  <strong>Rohan Khidrapure</strong>
                </h3>

                <div class="font-bold">Full Stack Developer</div>
                <address class="m-t-md">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/rohan-khidrapure-74b1a9144"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rohan Khidrapure
                  </a>
                  <br />
                  <abbr title="Phone">P:</abbr> (+91) 8747927051
                </address>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="contact-box center-version">
              <a href="#profile.html">
                <img
                  alt=""
                  class="img-circle"
                  src="http://127.0.0.1:3000/pics/Deepanshu.jpeg"
                  style={{ height: "250px", width: "200px" }}
                />
                <h3 class="m-b-xs">
                  <strong>Deepanshu Jain</strong>
                </h3>

                <div class="font-bold">Full Stack Developer</div>
                <address class="m-t-md">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/rohan-khidrapure-74b1a9144"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deepanshu Jain
                  </a>
                  <br />
                  <abbr title="Phone">P:</abbr> (+91) 9625919835
                </address>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="contact-box center-version">
              <a href="#profile.html">
                <img
                  alt=""
                  class="img-circle"
                  src="http://127.0.0.1:3000/pics/Saurav.jpeg"
                  style={{ height: "250px", width: "200px" }}
                />
                <h3 class="m-b-xs">
                  <strong>Saurav S. Sanap</strong>
                </h3>

                <div class="font-bold">Full Stack Developer</div>
                <address class="m-t-md">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/saurav-sanap-948a7124b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saurav Sanap
                  </a>
                  <br />
                  <abbr title="Phone">P:</abbr> (+91) 9420381868
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;
