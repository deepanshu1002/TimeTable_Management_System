package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;
import com.app.repository.LeaveApplicationRepository;

@Service
@Transactional
public class LeaveApplicationServiceImpl implements LeaveApplicationService {
	@Autowired
	private LeaveApplicationRepository leaveRep;

	@Override
	public ApiResponseDto addLeaveAppDetails(LeaveApplication leaveAppDetail) {
		leaveRep.save(leaveAppDetail);
		return new ApiResponseDto("Leave Application Submitted Successful...");
	}
}
