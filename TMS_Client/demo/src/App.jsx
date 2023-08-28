import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
//used to register react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import{Admin,AddDetails} from './components/admin'
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
import ViewTimetable from './components/timeTable'

import TimeTableMetadata from './components/timetableMetadata'

import AddLectureData from './components/addLectureData'

import ManageLeaves from './components/manageLeaves'

import GetLectureDetails from './components/getLectureDetails'

import ForgotPassword from './components/forgotPassword'
import ForgotEmail from './testmail'
import UpdatePassword from './components/updatePassword';
import Navbar from './components/navbar'
import { logout, login } from './features/authSlice'
import Sidebar from './components/sidebar'

import EditUser from './components/editUser'
import ProfileEditUser from './components/profileImageEditUser'


function App() {

  const loginStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()

  useEffect(() => {
    // first read the current sessionStorage and see if user is logged in
    if (sessionStorage['email'] && sessionStorage['email'].length > 0) {
      // update the auth slice status to true
      dispatch(login())
    }
  }, [])

return (
    <div className=''>
    
    {loginStatus && <Navbar />}
    {loginStatus && <Sidebar />}
      <div className='container'>
        <Routes>
        <Route path='/' element={<LoginUser/>} />
         {/* register component */}
         <Route path='/manageleaves' element={<ManageLeaves/>} />
        <Route path='/adddetails' element={<AddDetails/>} />
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


         <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/email' element={<ForgotEmail/>}/>
          <Route path='/set-password*' element={<UpdatePassword/>}/>

         <Route path='/editUser' element={<EditUser/>}/>

         {/* <Route path='/profileEdit' element={<ProfileEditUser/>}/> */}
         
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}
  export default App
