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
import com.app.entities.Feedback;
import com.app.service.FeedbackService;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	@Autowired
	private FeedbackService feedbackService;
	
	@PostMapping
	public ResponseEntity<?> addFeedback(@RequestBody AddFeedbackReqDTO feedback){
		return ResponseEntity.status(HttpStatus.CREATED).body(feedbackService.addFeedback(feedback));
	}
	
	@GetMapping("/{date}/{subjectId}")
	public ResponseEntity<?> getFeedback(@PathVariable LocalDate date,@PathVariable Long subjectId){
		return ResponseEntity.status(HttpStatus.CREATED).body(feedbackService.getFeedback(date,subjectId));
	}
}
