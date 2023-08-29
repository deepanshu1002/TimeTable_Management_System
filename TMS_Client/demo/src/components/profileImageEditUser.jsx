import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { createUrl, log } from "../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { editUserAPI, removeProfilePictureAPI, uploadProfilePictureAPI } from "../services/user";

function ProfileEditUser({ userId }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    deptId: "",
    userId: "",
    imagePath: "",
  });

  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const userId1 = sessionStorage.getItem("userId");
  // Adding a state variables for profile picture
  const [profilePicture, setProfilePicture] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayOpacity, setDisplayOpacity] = useState("0.4");



  useEffect(() => {
    //disable button at launch
    disableButton();
    // Fetch the list of departments
    const departmentUrl = createUrl("/department"); // Make sure createUrl is defined
    axios
      .get(departmentUrl)
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching departments:", error);
      });

    // Fetch user data for a specific user (using userId)
    const userUrl = createUrl(`/user/editUser/${userId1}`);
    axios
      .get(userUrl)
      .then((response) => {
        const userData = response.data;
        log(response);
        setUser({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          mobileNo: userData.mobileNo,
          password: "",
          deptId: userData.deptId,
          userId: userData.userId,
          imagePath: userData.imagePath,
        });
        if (userData.imagePath != null){
          getImage();
        }
        //setSelectedDepartment(userData.deptId);
      })
      .catch((error) => {
        toast.error("Error fetching user data:", error);
      });
  }, [userId]);

  const handleDepartmentChange = (e) => {
    // setSelectedDepartment(event.target.value);
    setUser({ ...user, deptId: e.target.value });
    console.log(e.target.value);
    //setDeptId(selectedDepartment);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Function to handle profile picture upload
  // const handleProfilePictureUpload = async () => {
  //   debugger
  //   if (selectedFile) {
  //     const response = await uploadProfilePictureAPI(userId1, selectedFile);

  //     if (response) {
  //       // Handle a successful upload, e.g., show a success message
  //       toast.success('Profile picture uploaded successfully:', response);
  //     } else {
  //       // Handle errors, e.g., show an error message
  //       toast.error('Error uploading profile picture');
  //     }
  //   }
  // };

  const handleUpload = () => {
    debugger
    if(userId1===""){
      return
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    const url = createUrl(`/user/uploadImage/${userId1}`);
    axios.post(url, formData)
      .then(response => {
        toast.success("Upload successful")
        getImage();
      })
      .catch(error => {
        toast.error("error while uploading")
      });
  };

  const getImage = () =>{
    const url = createUrl(`/user/getImage/${userId1}`);
    axios.get(url, { responseType: 'arraybuffer' })
        .then(response => {
          const imageBase64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          debugger
          setProfilePicture(`data:image/jpeg;base64,${imageBase64}`);
        })
        .catch(error => {
          debugger
          toast.error('Error fetching image:', error);
        });
  }

// Function to remove profile picture
const removeProfilePicture = async () => {
  try {
    const response = await removeProfilePictureAPI(); // Replace with your API call to remove the picture
    if (response) {
      setProfilePicture(""); // Clear the profile picture URL
      toast.success("Profile picture removed successfully");
    } else {
      toast.error("Error removing profile picture");
    }
  } catch (error) {
    console.error("API error:", error);
    toast.error("An error occurred while removing profile picture");
  }
};
  
  //button enable and disable
  function enableButton () {
    var buttonEnable = document.getElementById("saveButton");
    buttonEnable.removeAttribute("disabled")
    setDisplayOpacity("1")
  }
  function disableButton () {
    var buttonDisable = document.getElementById("saveButton");
    buttonDisable.setAttribute("disabled","true")
  }

  const editUser = async () => {
    debugger;
    if (user.firstName === "") {
      toast.error("Please enter first name");
      return;
    } else if (user.lastName === "") {
      toast.error("Please enter last name");
      return;
    } else if (user.email === "") {
      toast.error("Please enter email");
      return;
    } else if (user.mobileNo === "") {
      toast.error("Please enter mobile");
      return;
    } else if (user.password === "") {
      toast.error("Please enter password");
      return;
    } else if (user.deptId === "") {
      toast.error("Please enter department");
      return;
    }

    try {
      log(user);
      const response = await editUserAPI(user); // Pass the user object to your API
      if (response) {
        toast.success("User details updated successfully");
        disableButton();
      } else {
        toast.error("Error while updating user details, please try again");
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error("An error occurred while updating user details");
    }
  };

  return (
    <div style={{padding: "35px"}}>
      <div className="container" >
        <div className="main-body" >
          <div className="row" >
            <div className="col-lg-4" >
              <div className="card"style={{backgroundColor: "lightcyan"}}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  <input
                    type="file"
                    accept="image/*"
                    id="profilePictureInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <img
                    src={profilePicture || "https://bootdey.com/img/Content/avatar/avatar6.png"}
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                    onClick={() => document.getElementById("profilePictureInput").click()}
                    style={{ cursor: "pointer" }}
                  />
                    <div className="mt-3">
                      <h4>
                        {user.firstName} {user.lastName}
                      </h4>
                      <p className="text-secondary mb-1"></p>
                      <p className="text-muted fontSize-sm"></p>
                      <button className="btn btn-info" onClick={enableButton}>Edit Profile</button>
                      &nbsp;&nbsp;&nbsp;
                      <button className="btn btn-warning" onClick={handleUpload}>Upload Profile Picture</button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-letter me-2 icon-inline text-primary"
                        >
                          <text x="5" y="18" fontSize="16" fontWeight="bold">
                            F
                          </text>
                        </svg>
                        First Name
                      </h6>
                      <span className="text-secondary">{user.firstName}</span>
                    </li>
                    <br/>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="blue"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-letter me-2 icon-inline text-primary"
                        >
                          <text x="5" y="18" fontSize="16" fontWeight="bold">
                            L
                          </text>
                        </svg>
                        Last Name
                      </h6>
                      <span className="text-secondary">{user.lastName}</span>
                    </li>
                    <br/>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="darkgreen"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-building me-2 icon-inline text-primary"
                        >
                          <rect x="3" y="4" width="18" height="16"></rect>
                          <line x1="9" y1="12" x2="15" y2="12"></line>
                          <line x1="12" y1="6" x2="12" y2="12"></line>
                          <line x1="7" y1="18" x2="17" y2="18"></line>
                        </svg>
                        Department
                      </h6>
                      <span className="text-secondary">{user.deptId}</span>
                    </li>
                    <br/>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="red"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-mail me-2 icon-inline text-primary"
                        >
                          <path d="M3 6l9 6 9-6"></path>
                          <path d="M21 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h18z"></path>
                        </svg>
                        Email
                      </h6>
                      <span className="text-secondary">{user.email}</span>
                    </li>
                    <br/>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="purple"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-smartphone me-2 icon-inline text-primary"
                        >
                          <rect
                            x="5"
                            y="2"
                            width="14"
                            height="20"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="12" y1="18" x2="12" y2="16"></line>
                          <circle cx="12" cy="16" r="2"></circle>
                          <path d="M16 1l-6 6"></path>
                        </svg>
                        Mobile
                      </h6>
                      <span className="text-secondary">{user.mobileNo}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{opacity: displayOpacity}} className="col-lg-8">
              <div className="card" style={{backgroundColor: "lightcyan"}}>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.firstName}
                        onChange={(e) =>
                          setUser({ ...user, firstName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.lastName}
                        onChange={(e) =>
                          setUser({ ...user, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Department</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <select
                        className="form-select"
                        value={user["deptId"]}
                        onChange={handleDepartmentChange}
                        style={{ backgroundColor: "white" }}
                      >
                        <option value="">Select a department</option>
                        {departments.map((department) => (
                          <option
                            key={department.deptName}
                            value={department.deptId}
                          >
                            {department.deptName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={user.mobileNo}
                        onChange={(e) =>
                          setUser({ ...user, mobileNo: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        id="saveButton"
                        onClick={editUser}
                        type="button"
                        className="btn btn-primary px-4"
                        value="Save Changes"
                      />
                    </div>
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
export default ProfileEditUser;
