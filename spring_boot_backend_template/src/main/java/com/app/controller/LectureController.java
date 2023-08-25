package com.app.controller;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.entities.Lecture;
import com.app.service.LectureService;

import io.swagger.v3.oas.annotations.responses.ApiResponse;

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
	
	
	@GetMapping("{lectureId}")
	public ResponseEntity<?> getLectureDetailsById(@PathVariable Long lectureId) {
		
		LectureRespDTO lecture= lectureService.getLectureDetailsById(lectureId);
		
		return ResponseEntity.ok(lecture);
	}

	
	@GetMapping("/{deptId}/{subId}/{date}")
	public ResponseEntity<?> getLectureData(@PathVariable Long deptId,@PathVariable Long subId,@PathVariable String date) {
		
		 LocalDate date1 = LocalDate.parse(date);
		LectureRespDTO lectureDetails = lectureService.getLectureDetails(deptId, deptId, date1);
		if (lectureDetails == null)
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		
		return ResponseEntity.ok(lectureDetails);
	}
	
	@PutMapping
	public ResponseEntity<?> updatelectureData(@RequestBody AddLectureDTO dto) {
		
		//put exception here if didn't find entity with given Id
		
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(lectureService.addNewLectureData(dto));
	}
	
//	
	@DeleteMapping("/{lecureId}")
	public String deleteLectureDetails(@PathVariable Long lectureId) {
	
		return lectureService.deleteLectureDetails(lectureId);
	}
	
}
