import { useState } from "react";
import { toast } from 'react-toastify';
import { leaveApplicationAPI } from "../services/user";
import { useNavigate } from "react-router-dom";
import '../common.css'; 

function LeaveApplication(){
    
    const [fromDates, setFromDate] = useState('')
    const [toDates, setToDate] = useState('')
    const [reason, setReason] = useState('')

    const navigate = useNavigate()

    const submitLeaveApplication = async () => {
        const startDateObj = new Date(fromDates);
        const endDateObj = new Date(toDates);

        if (fromDates === '' || toDates === '') {
            toast.error('Please select both start and end dates.');
        } else if (startDateObj >= endDateObj) {
            toast.error('End date should be greater than the start date.');
        } else if (reason === ''){
            toast.error('Please Enter the Reason.');
        } else {

            const userId = sessionStorage.getItem('userId');
            const userName = sessionStorage.getItem('firstName');

            //to change date format to yyyy/mm/dd
            const formatDate = (dateString) => {
                const date = new Date(dateString);
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                return `${year}-${month}-${day}`;
              };

              const fromDate = formatDate(fromDates);
              const toDate = formatDate(toDates);

            const response = await leaveApplicationAPI(fromDate, toDate, reason, 'pending', userId, userName );

            if(response != null){

                toast.success('Successfully submitted leave application')
                navigate('/leaveApplication')

            } else {
                toast.error('Error while submitting leave application, please try again')
            }

        }
    }

    return(
        <div style={{padding:'100px'}}>
            <div className="row" style={{ fontWeight: "bold" }}>
            <div className="col"></div>
            <div
                className="col-lg-6"
                style={{
                    backgroundColor: "Highlight",
                    borderRadius: "20px",
                    padding: "30px",
            }}>
                    <div
                    className="mb-3"
                    style={{ backgroundColor: "blue", borderRadius: "10px" }}>
                        <h2
                        style={{ textAlign: "center", margin: 10, color: "whitesmoke" }}>
                        <b>Leave Application</b>
                        </h2>
                    </div>
       
                {/* column-2 */}
                <div className="col"> 
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="fromDate" className="text-font">Start Date:</label>
                            <input
                            type="date"
                            id="fromDate"
                            className="form-control"
                            onChange={(e)=>{setFromDate(e.target.value)}}
                            required/>
                        </div>

                    <br></br>

                        <div className="mb-3">
                            <label htmlFor="toDate"className="text-font"> End Date : </label>
                            <input
                            type="date"
                            id="toDate"
                            className="form-control"
                            onChange={(e)=>{setToDate(e.target.value)}}
                            required/>
                        </div>

                    <br></br>

                        <div className="mb-3">
                            <label htmlFor="reason" className="text-font" style={{color: 'red'}}> Reason : </label>
                            <textarea
                            id="reason"
                            className="form-control"
                            onChange={(e)=>{setReason(e.target.value)}}
                            required/>
                        </div>

                    <br></br>

                        <div className="mb-3" style={{ textAlign: "center" }}>
                            <button onClick={submitLeaveApplication} type="submit" className='btn-success'>Submit</button>
                        </div>
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
