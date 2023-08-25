import { useState } from 'react'

const  DepartmentDetails = async() =>{

    const [deptId, setDeptId] = useState('')
    const [deptName, setDeptName] = useState('')
    const url = createUrl('/department')

    const departments = await DepartmentDetails(url);
    
}

export default DepartmentDetails