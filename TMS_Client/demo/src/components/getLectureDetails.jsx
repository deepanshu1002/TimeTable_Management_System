import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { createUrl } from '../utils/utils';

function  GetLectureDetails(){

    const [lectureDetails, setLectureDetails] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const url = createUrl('/')  
        console.log(url)
        axios.get(url)
          .then(response => {
            console.log(response.data);
            //setLeaveApplications(response.data);
          })
          .catch(error => {
            console.log(error.response)
            console.error('Error fetching leave applications:', error);
          });
      }, []);

}