import { Link } from 'react-router-dom';
import '../css_file/link_Button.css'
function Admin(){
    return(<>
    <h1>welcome admin</h1>
    </>)
}
function AdminDashboard()
{
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Admin Dashboard</h1>
  
      <div className='row'>
        <div className='col'></div>
        <div className='col' style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Wrapping the links in a centered container */}
          <div className='form'>
            <div className='mb-3'>
              <Link to="/validuser" className='button-link' style={{ width: '300px' }}>
                Manager User
              </Link>
            </div>
            <br></br>
            <div className='mb-3'>
              <Link to="/manageleaves" className='button-link' style={{ width: '300px' }}>
                Manage Leaves
              </Link>
            </div>
            <br></br>
            <div className='mb-3'>
              <Link to="/managesubject" className='button-link' style={{ width: '300px' }}>
                Add Subject
              </Link>
            </div>
            <br></br>
            <div className='mb-3'>
              <Link to="/managedepartment" className='button-link' style={{ width: '300px' }}>
                Add Department
              </Link>
            </div>
            <br></br>
            <div className='mb-3'>
              <Link to="/managelab" className='button-link' style={{ width: '300px' }}>
                Add Lab Venue
              </Link>
            </div>
            <br></br>
            <div className='mb-3'>
              <Link to="/manageclassroom" className='button-link' style={{ width: '300px' }}>
                Add Classroom
              </Link>
            </div>
            <br></br>
            <Link to="/ratings" className='button-link' style={{ width: '300px' }}>
                Teacher Ratings
              </Link>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
      }
export {AdminDashboard,Admin};
