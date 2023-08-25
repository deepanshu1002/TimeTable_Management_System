package com.app.controller;

import java.time.LocalDate;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.DepartmentDTO;
import com.app.dto.SubjectDTO;
import com.app.service.DepartmentService;
import com.app.service.SubjectService;

@RestController
@RequestMapping("/subject")
@Validated
@CrossOrigin(origins = "*")
public class SubjectController {
	@Autowired
	private SubjectService subjectService;

	@PostMapping
	public ResponseEntity<?> addNewSubject(@RequestBody @Valid SubjectDTO dto) {
		System.out.println("inside subject bro   diddfsfdfsfjfjlj");
		System.out.println("in add new subject " + dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(subjectService.addNewSubject(dto));
	}

	@GetMapping("/{subId}")
	public ResponseEntity<?> getSubjectDetails(@PathVariable Long subId) {
		System.out.println("in get dept dtls " + subId);
		return ResponseEntity.ok(subjectService.getSubjectDetails(subId));
	}
	
	@GetMapping("getall/{subId}")
	public ResponseEntity<?> getSubjectandDeptandTeacherDetails(@PathVariable Long subId) {
		System.out.println("in get dept dtls " + subId);
		return ResponseEntity.ok(subjectService.getSubjectandDeptandTeacherDetails(subId));
	}
	
	@PutMapping("{subId}")
	public ResponseEntity<?> updateSubjectDetails(@RequestBody @Valid SubjectDTO dto,@PathVariable Long subId) {
		dto.setSubjectId(subId);
		return ResponseEntity.status(HttpStatus.OK).body(subjectService.updateSubject(dto));
	}
}
