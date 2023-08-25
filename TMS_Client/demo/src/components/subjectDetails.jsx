import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { addSubjectApi } from '../services/subject'
import { toast } from 'react-toastify'

function AddSubjectDetails()
{
    const [deptId,setDeptId] = useState('')
    const [teacherId, setTeacherId] = useState('')
    const [subjectName, setSubjectName] = useState('')
    const [labId, setLabId] = useState('')
    var addSubject = async() =>
    {
           const response = await addSubjectApi(
            deptId,
            teacherId,
            subjectName,
            labId
          )
          if (response != null) {
            toast.success('Successfully registered a new user')
          } else {
            toast.error('Error while registering a new user, please try again')
          }
    
    }
    return (
        <div>
          <h1 style={{ textAlign: 'center', margin: 10 }}>Add Subject</h1>
    
          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <div className='form'>
                <div className='mb-3'>
                  <label htmlFor=''>Department Id</label>
                  <input
                    type='number'
                    className='form-control'
                    onChange={(e) => {
                      setDeptId(e.target.value)
                    }}
                  />
                </div>
    
                <div className='mb-3'>
                  <label htmlFor=''>Teacher Id</label>
                  <input
                    type='number'
                    className='form-control'
                    onChange={(e) => {
                      setTeacherId(e.target.value)
                    }}
                  />
                </div>
    
                <div className='mb-3'>
                  <label htmlFor=''>Subject Name</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setSubjectName(e.target.value)
                    }}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor=''>Lab Id</label>
                  <input
                    type='number'
                    className='form-control'
                    onChange={(e) => {
                      setLabId(e.target.value)
                    }}
                  />
                 
    
                  <button onClick={addSubject} className='btn btn-primary' style={{marginTop:'20px'}}>
                    Add Subject
                  </button>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
      )
    }
    export default AddSubjectDetails;