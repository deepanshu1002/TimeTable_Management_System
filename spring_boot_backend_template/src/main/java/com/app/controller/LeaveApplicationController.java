package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponseDto;
import com.app.dto.LeaveApplicationDTO;
import com.app.service.LeaveApplicationService;

@RestController
@CrossOrigin("*")
@RequestMapping("/leaveapp")
public class LeaveApplicationController {
	@Autowired
	private LeaveApplicationService leaveService;

	@GetMapping
	public ResponseEntity<?> listAllLeavesApp() {
		List<LeaveApplicationDTO> leaveList = leaveService.getAllLeaveApp();
		return ResponseEntity.ok(leaveList);
	}

	@PostMapping
	public ApiResponseDto addLeaveAppDetails(@RequestBody LeaveApplicationDTO userLeave) {
		return leaveService.addLeaveAppDetails(userLeave);
	}

	@GetMapping("/pending")
	public List<LeaveApplicationDTO> getAllPendingLeaveApp() {
		return leaveService.getAllPendingLeaveApp();
	}

	@PutMapping("/{leavApplicationId}/{status}")
	public ApiResponseDto updateLeaveAppDetails(@PathVariable Long leavApplicationId, @PathVariable String status) {
		return leaveService.getLeaveApp(leavApplicationId, status);
	}

}
