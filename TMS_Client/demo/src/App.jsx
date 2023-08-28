import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
//used to register react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import{Admin,AddDetails, AdminDashboard} from './components/admin'

// import{AddDetails} from './components/admin'
import RegisterUser from './components/registerUser'
import ManageUsers from './components/ManageUser'
import LoginUser from './components/loginUser';
import Student from './components/student';
import Teacher from './components/teacher';
import GetLeaveApplication from './components/getLeaveApplications'
import LeaveApplication from './components/leaveApplication';
import AddSubjectDetails from './components/subjectDetails';
import AddLabVenue from './components/labDetails';
import AddClassroom from './components/classRoomDetails';
import AddDepartment from './components/departmentDetails';
import ViewTimetable from './components/timeTable';

import TimeTableMetadata from './components/timetableMetadata'

import AddLectureData from './components/addLectureData'

import ManageLeaves from './components/manageLeaves'

import GetLectureDetails from './components/getLectureDetails'
//import SideBar from './components/sidebar'
//import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
//import TeacherRatings from './components/teacherRatings'
import CheckRatings from './components/checkRatings'
import Rating from './components/newRatings'

function App() {

return (
    <div className='container-fluid'>
    
      <div className='container'>
        <Routes>
        <Route path='/' element={<LoginUser/>} />
         {/* register component */}
         <Route path='/manageleaves' element={<ManageLeaves/>} />
        <Route path='/admindashboard' element={<AdminDashboard/>} />
         <Route path='/register' element={<RegisterUser />} />
         <Route path='/validuser' element={<ManageUsers />} />  
         {/*Leave Application component */}
         <Route path='/leaveapplication' element={<LeaveApplication/>} />
         {/*GET Leave Application component */}
         <Route path='/getLeaveApplication' element={<GetLeaveApplication/>} />

         <Route path='/student' element={<Student/>} />

         <Route path='/teacher' element={<Teacher/>} />

         <Route path='/admin' element={<Admin/>} />
         
          <Route path='/managedepartment' element={<AddDepartment/>} />
          
         <Route path='/manageclassroom' element={<AddClassroom/>} />

         <Route path='/managelab' element={<AddLabVenue/>} />

         <Route path='/managesubject' element={<AddSubjectDetails/>} />

         <Route path='/timetable' element={<ViewTimetable/>} />


         <Route path='/timetablemetadata' element={<TimeTableMetadata/>} />


         <Route path='/addlecturedata' element={<AddLectureData/>} />

         <Route path='/getlecturedetails' element={<GetLectureDetails/>} />
         <Route path='/sidebar' element={<Sidebar/>} />
         <Route path='/ratings' element={<CheckRatings/>} />
         <Route path="/rating/:subId" element={<Rating/>} />
         <Route path='/rating' element={<Rating subjectId={1}/>} />

         {/* <Route path='/navbar' element={<Navbar/>} /> */}
         </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}
  export default App
