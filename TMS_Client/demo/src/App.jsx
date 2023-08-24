import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
//used to register react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import RegisterUser from './components/registerUser'
import ManageUsers from './components/ManageUser'
import LeaveApplication from './components/leaveApplication'
import ClassRoom from './components/classRoom'


function App() {
return (
    <div className='container-fluid'>
    
      <div className='container'>
        <Routes>
         {/* register component */}
         <Route path='/register' element={<RegisterUser />} />
         <Route path='/validuser' element={<ManageUsers />} />  
         {/*Leave Application component */}
         <Route path='/LeaveApplication' element={<LeaveApplication />} />
         {/* Class Room Component */}
         <Route path='/ClassRoom' element={<ClassRoom />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}
  export default App