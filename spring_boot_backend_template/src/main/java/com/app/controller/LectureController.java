package com.app.controller;
import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.service.LectureService;

@RestController
@RequestMapping("/lecture")
public class LectureController {

	
	@Autowired
	private LectureService lectureService;
	
	
	@PostMapping
	public ResponseEntity<?> addlectureData(@RequestBody AddLectureDTO dto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(lectureService.addNewLectureData(dto));
	}
	
	
//	@GetMapping("/{deptId}/{subId}/{date}")
//	public ResponseEntity<?> getEmpsByDepartment(@PathVariable Long deptId,@PathVariable Long subId,@PathVariable Date date) {
//		System.out.println("in get emps " + deptId);
//		LectureRespDTO lectureDetails = lectureService.getLectureDetails(deptId, deptId, date);
//		if (lectureDetails == null)
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//		
//		return ResponseEntity.ok(lectureDetails);
//	}
	
	
	
}
