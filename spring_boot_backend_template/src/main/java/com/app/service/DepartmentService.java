package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDto;
import com.app.dto.DepartmentDTO;
import com.app.entities.Department;

public interface DepartmentService {
	DepartmentDTO getDepartmentDetails(Long deptId);
	DepartmentDTO addNewDepartment(DepartmentDTO dept);
	//ApiResponseDto deleteDepartment(Long deptId);
	List <DepartmentDTO> getAllDepartmentDetails();
	
}
