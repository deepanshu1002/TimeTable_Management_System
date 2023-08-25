package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TimetableSubjectMetadataDTO;
import com.app.service.SubjectMetadataServiceImpl;

@RestController
public class SubjectMetadataController {
	@Autowired
	private SubjectMetadataServiceImpl subjectMetadataService;

//	@PostMapping("/addweeklyhrs")
//	public ResponseEntity<?> addSubjectMetadataWeeklyHrs(@RequestBody @Valid TimetableSubjectMetadataDTO dto) {
//
//		return ResponseEntity.status(HttpStatus.CREATED).body(subjectMetadataService.addSubjectMetadataWeeklyHrs(dto));
//	}

	@GetMapping("/getweeklyhrs/{deptId}/{subjectId}/{startDate}")
	public ResponseEntity<?> getWeeklyHrs(@PathVariable Long deptId, @PathVariable Long subjectId,
			@PathVariable String startDate) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(subjectMetadataService.getSubjectMetadata(deptId, subjectId, startDate));
	}

	@GetMapping("/getweeklyhrs/{deptId}/{startDate}")
	public ResponseEntity<?> getWeeklyHrs(@PathVariable Long deptId,@PathVariable String startDate) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(subjectMetadataService.getAllSubjectMetadata(deptId, startDate));
	}

	@PostMapping("/addweeklyhrs")
	public ResponseEntity<?> addSubjectMetadataWeeklyHrs(
			@RequestBody @Valid List<TimetableSubjectMetadataDTO> dtoList) {

		return ResponseEntity.status(HttpStatus.CREATED)
				.body(subjectMetadataService.addSubjectMetadataWeeklyHrs(dtoList));
	}

}
