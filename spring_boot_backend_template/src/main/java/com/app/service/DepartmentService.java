package com.app.service;

import com.app.dto.ApiResponseDto;
import com.app.dto.DepartmentDTO;

public interface DepartmentService {
	DepartmentDTO getDepartmentDetails(Long deptId);
	DepartmentDTO addNewDepartment(DepartmentDTO dept);
	//ApiResponseDto deleteDepartment(Long deptId);
}
