package com.app.controller;

import java.time.LocalDate;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.DepartmentDTO;
import com.app.service.DepartmentService;

@RestController
@RequestMapping("/department")
@Validated
@CrossOrigin(origins = "*")

public class DepartmentController {
	@Autowired
	private DepartmentService departmentService;

	@PostMapping
	public ResponseEntity<?> addNewDept(@RequestBody @Valid DepartmentDTO dto) {
		System.out.println("in add new dept " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(departmentService.addNewDepartment(dto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllDeptDetails() {
//		System.out.println("in get dept dtls " + deptId);
		return ResponseEntity.ok(departmentService.getAllDepartmentDetails());
	}

	@GetMapping("/{deptId}")
	public ResponseEntity<?> getDeptDetails(@PathVariable Long deptId) {
		System.out.println("in get dept dtls " + deptId);
		return ResponseEntity.ok(departmentService.getDepartmentDetails(deptId));
	}
	
	@PutMapping("{deptId}")
	public ResponseEntity<?> updateDeptDetails(@RequestBody @Valid DepartmentDTO dto,@PathVariable Long deptId) {
		dto.setDeptId(deptId);
		return ResponseEntity.status(HttpStatus.OK).body(departmentService.addNewDepartment(dto));
	}
	
//	@DeleteMapping("{deptId}")
//	public ResponseEntity<?> deleteDept(@PathVariable Long deptId) {
//		
//		return ResponseEntity.status(HttpStatus.CREATED).body(departmentService.deleteDepartment(deptId));
//	}
}
