import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
//used to register react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import RegisterUser from './components/registerUser'
import ManageUsers from './components/ManageUser'
import ClassRoom from './components/classRoom'
import LoginUser from './components/loginUser';
import Student from './components/student';
import Teacher from './components/teacher';
import Admin from './components/admin';
import GetLeaveApplication from './components/getLeaveApplications'
import LeaveApplication from './components/leaveApplication';


function App() {
return (
    <div className='container-fluid'>
    
      <div className='container'>
        <Routes>
        <Route path='/' element={<LoginUser/>} />
         {/* register component */}
         <Route path='/register' element={<RegisterUser />} />
         <Route path='/validuser' element={<ManageUsers />} />  
         {/*Leave Application component */}
         <Route path='/GetLeaveApplication' element={<GetLeaveApplication/>} />
         {/* Class Room Component */}

         <Route path='/leaveapplication' element={<LeaveApplication/>} />

         <Route path='/ClassRoom' element={<ClassRoom />} />

         <Route path='/student' element={<Student/>} />

         <Route path='/teacher' element={<Teacher/>} />

         <Route path='/admin' element={<Admin/>} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}
  export default App