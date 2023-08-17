package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.LeaveApplicationService;

@RestController
@RequestMapping("/leaveapp")
public class LeaveApplicationController {
	@Autowired
	private LeaveApplicationService leaveService;
	
	
}
