package com.app.controller;
import java.io.IOException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddLectureDTO;
import com.app.service.LectureService;

@RestController
@RequestMapping("/lecture")
@Validated
public class LectureController {

	
	@Autowired
	private LectureService lectureService;
	
	
	@PostMapping
	public ResponseEntity<?> addlectureData(@RequestBody @Valid AddLectureDTO dto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(lectureService.addNewLectureData(dto));
	}
	
	
	
	
}
