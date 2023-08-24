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
import com.app.service.TimetableService;

@RestController
@RequestMapping("/timettable")
public class TimeTableController {
	
	@Autowired
	private TimetableService timeTableService;
	
	
	@GetMapping("/{deptId}/{date}")
	public ResponseEntity<?> genTimeTable(@PathVariable Long deptId,@PathVariable String date){
		return ResponseEntity.status(HttpStatus.CREATED).body(timeTableService.genTimeTable(deptId,LocalDate.parse(date)));
	}
}
