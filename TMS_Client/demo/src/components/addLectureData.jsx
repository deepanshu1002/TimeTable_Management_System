import { useState } from "react";
import { toast } from 'react-toastify';
import "../TimetableMetadata.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";

function AddLectureData(){

    const [lectureData, setLectureData] = useState('')
    const [tommorrowAgenda, setTommorrowAgenda] = useState('')
    const [topicsCovered , setTopicsCovered] = useState('')

    const AddLectureData = async () => {
        if (lectureData.length == '') {
          toast.error('Please enter lecture data')
        } else if (tommorrowAgenda.length == '') {
          toast.error('Please enter tomorrow agenda')
        } else if (topicsCovered.length == '') {
          toast.error('Please enter topics covered')
        }
        else{
            const response = await  AddLectureData(
            lectureData,
            tommorrowAgenda,
            topicsCovered)

            if (response != null) {
                toast.success('Successfully registered a new user')
        
              //   // go back to login
                // navigate('/')
              } else {
                toast.error('Error while registering a new user, please try again')
              }
        
        }
    }


    return (
      <div>
      <div className="row" style={{ fontWeight: "bold" }}>
        <div className="col"></div>
        <div
          className="col-lg-6"
          style={{
            backgroundColor: "Highlight",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <div
            className="mb-3"
            style={{ backgroundColor: "blue", borderRadius: "10px" }}
          >
            <h2
              style={{ textAlign: "center", margin: 10, color: "whitesmoke" }}
            >
              <b>Add Lecture data</b>
            </h2>
          </div>
        <div className="mb-3">
              <label htmlFor="">Topics Covered</label>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => {
                  setTopicsCovered(e.target.value);
                }}
              />
        <div className="mb-3">
              <label htmlFor="">Lecture Data</label>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => {
                  setLectureData(e.target.value);
                }}
              />

            <div className="mb-3">
              <label htmlFor="">Tomorrow's Agenda</label>
              <textarea
                type="text"
                className="form-control"
                onChange={(e) => {
                  setTommorrowAgenda(e.target.value);
                }}
              />

              <div className='mb-3'>
                <br></br>
              <button onClick={AddLectureData} className='btn btn-success'>
               Add Data
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default AddLectureData
