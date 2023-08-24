package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.DepartmentDTO;
import com.app.entities.Department;
import com.app.repository.DepartmentRepository;

@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService {
	@Autowired
	private DepartmentRepository departmentRepo;

	@Autowired
	private ModelMapper mapper;


	@Override
	public DepartmentDTO getDepartmentDetails(Long deptId) {
		Department dept=departmentRepo.findById(deptId).
		orElseThrow(null);
		return mapper.map(dept,DepartmentDTO.class);
				
	}

	@Override
	public DepartmentDTO addNewDepartment(DepartmentDTO dept) {
		Department departmentEntity = mapper.map(dept, Department.class);
		Department persistentDept = departmentRepo.save(departmentEntity);
		return mapper.map(persistentDept, DepartmentDTO.class);
	}

	@Override
	public List <DepartmentDTO> getAllDepartmentDetails() {
		List <DepartmentDTO> deptDeptList=new ArrayList<DepartmentDTO>();
		List <Department> depts = departmentRepo.findAll();
		for(Department dept: depts) {
			DepartmentDTO deptDto= mapper.map(dept, DepartmentDTO.class);
			deptDeptList.add(deptDto);
		}
		return deptDeptList;
	}

//will see if this is required
//	@Override
//	public ApiResponseDto deleteDepartment(Long deptId) {
//		
//		return null;
//	}
}
