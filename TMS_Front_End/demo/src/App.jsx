import { Route, Routes } from 'react-router-dom'
import LeaveApplication from './components/leaveApplication';
import ClassRoom from './components/classRoom';

function App(){
    return(
        <div className="Container">
            <Routes>
                {/*Leave Application component */}
                <Route path='/LeaveApplication' element={<LeaveApplication />} />
                {/* Class Room Component */}
                <Route path='/ClassRoom' element={<ClassRoom />} />
            </Routes>
        </div>
    )
}

export default App;