import { useState } from 'react'
import { createUrl } from '../utils/utils';
const  DepartmentDetails = async() =>{

    const [deptId, setDeptId] = useState('')
    const [deptName, setDeptName] = useState('')
    const url = createUrl('/department')

    const departments = await DepartmentDetails(url);
    
}

export default DepartmentDetails