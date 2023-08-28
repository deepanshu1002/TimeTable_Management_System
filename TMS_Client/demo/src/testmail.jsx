import axios from "axios"
import { useState } from "react"

function ForgotEmail(){

    const [em, setEm] = useState("")
    const sendEmail = ()=>{
        axios.post("http://localhost:9988/forgotpassword?email="+em)
    }
    return (
        <div>
   
                <legend>Form title</legend>
            
                <div className="form-group">
                    <label htmlFor="">label</label>
                    <input type="text" className="form-control" id=""name="email" onChange={(e)=>setEm(e.target.value)} placeholder="Input field"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=>sendEmail()}>Submit</button>
            
        </div>
    )
}

export default  ForgotEmail