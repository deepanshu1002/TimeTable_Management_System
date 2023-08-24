import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RegisterUser from './components/registerUser'
import ManageUsers from './components/ManageUser'


function App() {
return (
    <div className='container-fluid'>
    
      <div className='container'>
        <Routes>
         {/* register component */}
         <Route path='/register' element={<RegisterUser />} />
         <Route path='/validuser' element={<ManageUsers />} />         
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}
  export default App