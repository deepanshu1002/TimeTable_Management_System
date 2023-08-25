import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/utils';
import { toast } from 'react-toastify'
import { addLabVenueApi } from '../services/lab';

function AddLabVenue()
{
    const [deptId,setDeptId] = useState('')
    const [labVenue, setLabVenue] = useState('')
   
    var addLabVenue=async()=>
    {
      const response = await addLabVenueApi(
         labVenue,
         deptId
       )
      
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
        <h1 style={{ textAlign: 'center', margin: 10 }}>Add Lab Venue</h1>
  
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>
            <div className='mb-3'>
                <label htmlFor=''>Lab Venue</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={(e) => {
                    setLabVenue(e.target.value)
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
                 <button onClick={addLabVenue} className='btn btn-primary' style={{marginTop:'20px'}}>
                    Add Lab Venue
                  </button>
              </div>
  
             
            
             
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
    
 }
    export default AddLabVenue;
   