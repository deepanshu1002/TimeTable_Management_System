import { useState } from "react";
import { toast } from 'react-toastify';

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
          <h1 style={{ textAlign: 'center', margin: 10 }}>Add Lecture Data</h1>
    
          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <div className='form'>
                <div className='mb-3'>
                  <label htmlFor=''>Lecture Data</label>
                  <textarea
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setLectureData(e.target.value)
                    }}
                  />
                </div>
                <div className='mb-3'>
              <label htmlFor=''>tomorrow Agenda</label>
              <textarea
                type='text'
                className='form-control'
                onChange={(e) => {
                  setTommorrowAgenda(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Topics Covered</label>
              <textarea
                type='number'
                className='form-control'
                onChange={(e) => {
                  setTopicsCovered(e.target.value)
                }}
              />
            </div>

            <div>
            <button onClick={AddLectureData} className='btn btn-success'>
                Add Data
              </button>
            </div>
            </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default AddLectureData
