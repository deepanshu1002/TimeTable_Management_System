import { useState } from "react";
import { toast } from 'react-toastify';

import { useNavigate } from "react-router-dom";


function AddLectureData(){

    const [lectureData, setLectureData] = useState('')
    const [tommorrowAgenda, setTommorrowAgenda] = useState('')
    const [topicsCovered , setTopicsCovered] = useState('')

    // const RegisterUser = async () => {
    //     if (lectureData.length == '') {
    //       toast.error('Please enter lecture data')
    //     } else if (tommorrowAgenda.length == '') {
    //       toast.error('Please enter tomorrow agenda')
    //     } else if (topicsCovered.length == '') {
    //       toast.error('Please enter topics covered')
    //     else{
    //         const response = await registerUserApi(
    //             firstName,
    //             lastName,
    //             email,
    //             password,
    //             mobileNo,
    //             userId,
    //             roleId,
    //             deptId
    //           )
    //     }

    return (
        <div>
          <h1 style={{ textAlign: 'center', margin: 10 }}>Register User</h1>
    
          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <div className='form'>
                <div className='mb-3'>
                  <label htmlFor=''>Lecture Data</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setLectureData(e.target.value)
                    }}
                  />
                </div>
                <div className='mb-3'>
              <label htmlFor=''>tomorrow Agenda</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setTommorrowAgenda(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Topics Covered</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setTopicsCovered(e.target.value)
                }}
              />
            </div>
            </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )


}