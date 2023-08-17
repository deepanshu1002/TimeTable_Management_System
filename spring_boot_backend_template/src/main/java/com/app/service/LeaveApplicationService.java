package com.app.service;

import com.app.entities.LeaveApplication;

public interface LeaveApplicationService {
	//Get the Leave Application
	ApiResponse getLeaveAppDetails(LeaveApplication leaveAppDetail);
}
