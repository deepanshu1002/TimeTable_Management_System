import { Link } from 'react-router-dom';
import '../css_file/link_Button.css'
function Admin(){
    return(<>
    <h1>welcome student</h1>
    </>)
}
function AddDetails()
{
    return (
        <div>
          <h1 style={{ textAlign: 'center', margin: 10 }}>Add Details</h1>
    
          <div className='row'>
            <div className='col'></div>
            <div className='col' style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Wrapping the links in a centered container */}
              <div className='form'>
                <div className='mb-3'>
                  <Link to="/managesubject" className='button-link'>Add Subject</Link>
                </div>
    
                <div className='mb-3'>
                  <Link to="/managedepartment" className='button-link'>Add Department</Link>
                </div>
    
                <div className='mb-3'>
                  <Link to="/managelab" className='button-link'>Add Lab Venue</Link>
                </div>
    
                <div className='mb-3'>
                  <Link to="/manageclassroom" className='button-link'>Add Classroom</Link>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
      )
    }
export {AddDetails,Admin};
