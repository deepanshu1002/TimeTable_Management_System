import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { createUrl } from '../utils/utils';

function  GetLectureDetails(){

    const [lectureDetails, setLectureDetails] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = createUrl('/lecture')  
        console.log(url)
        axios.get(url)
          .then(response => {
            console.log(response.data);
            setLectureDetails(response.data);
          })
          .catch(error => {
            console.log(error.response)
            console.error('Error fetching leave applications:', error);
          });
      }, []);


      return (
        <div className="manage-users-container">
          <center><h1>Manage Lecture Details</h1></center>
          <button style={{marginTop:'50px', marginLeft:'930px'}}type="button" 
          className="btn btn-primary"  onClick={()=>navigate("/addlecturedata")}>Add Lecture Details</button>
          <table className="table table-striped" style={{marginTop:'20px'}}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Topics Covered</th>
                <th>Lecture Data</th>
                <th>Tomorrow's Agenda</th>
              </tr>
            </thead>
            <tbody>
              {lectureDetails.map((lectureData) => (
                <tr key={lectureData.leaveApplicationId}>
                  <td>{lectureData.date}</td>
                  <td>{lectureData.startTime}</td>
                  <td>{lectureData.endTime}</td>
                  <td>{lectureData.topicsCovered}</td>
                  <td>{lectureData.lectureData}</td>    
                  <td>{lectureData.tommorrowAgenda}</td>        
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default GetLectureDetails
