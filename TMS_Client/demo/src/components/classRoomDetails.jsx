import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { addClassroomApi } from '../services/classroom';
function AddClassroom()
{
    const [deptId,setDeptId] = useState('')
    const [classroomName, setClassroomName] = useState('')
   
    var addClassroom=async()=>
    {
        const response = await addClassroomApi(classroomName,deptId)
         
          // parse the response
          if (response != null) {
            toast.success('Successfully registered a new user')
    
          //   // go back to login
            // navigate('/')
          } else {
            toast.error('Error while registering a new user, please try again')
          }
    }
    return (
      <div>
        <h1 style={{ textAlign: 'center', margin: 10 }}>Add Classroom</h1>
  
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>
            <div className='mb-3'>
                <label htmlFor=''>Classroom Name</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={(e) => {
                    setClassroomName(e.target.value)
                  }}
                />
              </div>
  
              <div className='mb-3'>
                <label htmlFor=''>Department Id</label>
                <input
                  type='number'
                  className='form-control'
                  onChange={(e) => {
                    setDeptId(e.target.value)
                  }}
               />
                 <button onClick={addClassroom} className='btn btn-primary' style={{marginTop:'20px'}}>
                    Add Classroom
                  </button>
              </div>
  
             
            
             
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
    
}
export default AddClassroom;