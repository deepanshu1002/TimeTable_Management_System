import { useState } from "react";
import { toast } from 'react-toastify';
import { leaveApplicationAPI } from "../services/user";
import { useNavigate } from "react-router-dom";
//import { leaveApplicationAPI as leaveApplicationAPI} from '../services/user'

function LeaveApplication(){
    
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [status, setStatus] = useState('')
    const [reason, setReason] = useState('')

    const navigate = useNavigate()

    const submitLeaveApplication = async () => {
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
        if (startDate == '' || endDate == '') {
            toast.error('Please select both start and end dates.');
        } else if (startDateObj >= endDateObj) {
            toast.error('End date should be greater than the start date.');
        } else if (reason.length == ''){
            toast.error('Please Enter the Reason.');
        } else {
            const userId = sessionStorage.getItem('userId');
            const response = await leaveApplicationAPI(userId, startDate, endDate, status, reason)
            if(response != null){
                toast.success('Successfully submitted Leave application')
                navigate('/leaveapplication')
            } else {
                toast.error('Error while submitting leave application, please try again')
            }

        }
    }

    return(
        <div>
            <h1 style={{textAlign: 'center',margin: 10 }}> Leave Application </h1>

            <div className="row">
                {/* column-1 */}
                <div className="col"></div>
                {/* column-2 */}
                <div className="col"> 
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="startDate"> Start Date : </label>
                            <input
                            type="date"
                            id="startDate"
                            className="form-control"
                            onChange={(e)=>{setStartDate(e.target.value)}}
                            required
                            />
                        </div>

                    <br></br>

                        <div className="mb-3">
                            <label htmlFor="endDate"> End Date : </label>
                            <input
                            type="date"
                            id="endDate"
                            className="form-control"
                            onChange={(e)=>{setEndDate(e.target.value)}}
                            required
                            />
                        </div>

                    <br></br>

                        <div className="mb-3">
                            <label htmlFor="reason"> Reason : </label>
                            <textarea
                            id="reason"
                            className="form-control"
                            onChange={(e)=>{setReason(e.target.value)}}
                            required
                            />
                        </div>

                    <br></br>

                        <div className="mb-3">
                            <button onClick={submitLeaveApplication} type="submit" className='btn btn-success'> Submit </button>
                        </div>
                    </div>
                </div>
                {/* column-3 */}
                <div className="col"></div>
            </div> 
        </div>
    )
}

export default LeaveApplication;
