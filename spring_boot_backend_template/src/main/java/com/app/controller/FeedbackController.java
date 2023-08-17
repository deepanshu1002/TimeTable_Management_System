package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
}
