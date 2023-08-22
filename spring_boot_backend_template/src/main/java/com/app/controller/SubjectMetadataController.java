package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TimetableSubjectMetadataDTO;
import com.app.service.SubjectMetadataServiceImpl;

@RestController("addweeklyhrs")
public class SubjectMetadataController {
	@Autowired
	private SubjectMetadataServiceImpl subjectMetadataService;

	@PostMapping("/addweeklyhrs")
	public ResponseEntity<?> addSubjectMetadataWeeklyHrs(@RequestBody @Valid TimetableSubjectMetadataDTO dto) {

		return ResponseEntity.status(HttpStatus.CREATED).body(subjectMetadataService.addSubjectMetadataWeeklyHrs(dto));
	}

}
