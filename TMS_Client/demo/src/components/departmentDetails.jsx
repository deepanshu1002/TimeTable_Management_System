import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { addClassroomApi } from '../services/classroom';
import { addDepartmentApi } from '../services/department';
function AddDepartment()
{
  
    const [deptName, setDeptName] = useState('')
   
    var addDepartment=async()=>
    {
        const response = await addDepartmentApi(deptName)
         
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
        <h1 style={{ textAlign: 'center', margin: 10 }}>Add Department</h1>
  
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>
            <div className='mb-3'>
                <label htmlFor=''>Department Name</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={(e) => {
                    setDeptName(e.target.value)
                  }}
                />
                 <button onClick={addDepartment} className='btn btn-primary' style={{marginTop:'20px'}}>
                    Add Department
                  </button>
              </div>         
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
    
}
export default AddDepartment;