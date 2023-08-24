package com.app.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.TimeTableMetadataDto;
import com.app.entities.Feedback;
import com.app.service.FeedbackService;
import com.app.service.TimeTableMetadataService;

@RestController
@RequestMapping("/metadata")
public class TimeTableMetadataController {
	
	@Autowired
	private TimeTableMetadataService dataService;
	
	@PostMapping
	public ResponseEntity<?> addData(@RequestBody TimeTableMetadataDto data){
		return ResponseEntity.status(HttpStatus.CREATED).body(dataService.addData(data));
	}
	
	@GetMapping("/{dateString}/{deptId}")
	public ResponseEntity<?> getData(@PathVariable String dateString,@PathVariable Long deptId){
		return ResponseEntity.status(HttpStatus.OK).body(dataService.getDataByDateAndDeptId(dateString,deptId));
	}
}
