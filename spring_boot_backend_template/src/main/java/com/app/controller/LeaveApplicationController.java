package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;
import com.app.service.LeaveApplicationService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/leaveapp")
public class LeaveApplicationController {
	@Autowired
	private LeaveApplicationService leaveService;
	
	public ApiResponseDto addLeaveAppDetails(@RequestBody LeaveApplication userId) {
		return leaveService.addLeaveAppDetails(userId);
	}
	
	
}
