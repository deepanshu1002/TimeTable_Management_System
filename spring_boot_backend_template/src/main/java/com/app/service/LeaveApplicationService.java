package com.app.service;

import java.util.List;

import com.app.dto.AddLeaveApplicationDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;

public interface LeaveApplicationService {
	//get the Leave Application
	List<LeaveApplication> getAllLeaveApp();
	//post the Leave Application
	ApiResponseDto addLeaveAppDetails(AddLeaveApplicationDTO leaveAppDetail);
	//get the leave Application By Id
	LeaveApplication getAllLeaveApp(Long userId);
	//Update the Status of leave Application
	
}
