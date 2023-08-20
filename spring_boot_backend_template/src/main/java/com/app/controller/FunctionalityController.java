package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddLectureDTO;
import com.app.entities.FunctionalityTbl;
import com.app.service.FunctionalityService;
import com.app.service.LectureService;

@RestController
@RequestMapping("/functionality")
public class FunctionalityController {
	
	@Autowired
	private FunctionalityService functionalityService;
	
	@PostMapping
	public ResponseEntity<?> addFunctionality(@RequestBody FunctionalityTbl function) {
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(functionalityService.addNewFunctionality(function));
	}
	
}
