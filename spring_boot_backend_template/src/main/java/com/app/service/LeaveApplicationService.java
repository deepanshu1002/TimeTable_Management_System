package com.app.service;

import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;

public interface LeaveApplicationService {
	//Get the Leave Application
	ApiResponseDto addLeaveAppDetails(LeaveApplication leaveAppDetail);
}
