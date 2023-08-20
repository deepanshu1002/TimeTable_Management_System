package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDto;
import com.app.dto.LeaveApplicationDTO;

public interface LeaveApplicationService {
	//get the Leave Application
	List<LeaveApplicationDTO> getAllLeaveApp();
	//post the Leave Application
	ApiResponseDto addLeaveAppDetails(LeaveApplicationDTO leaveAppDetail);
	//get the leave Application By Id
	List<LeaveApplicationDTO> getAllPendingLeaveApp();
	//Update the Status of leave Application
	ApiResponseDto getLeaveApp(Long leavApplicationId, String status);
	
}
