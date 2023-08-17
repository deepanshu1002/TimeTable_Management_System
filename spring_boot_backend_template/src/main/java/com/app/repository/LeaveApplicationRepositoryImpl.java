package com.app.repository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;
import com.app.service.LeaveApplicationService;

@Service
@Transactional
public class LeaveApplicationRepositoryImpl implements LeaveApplicationService {

	@Override
	public ApiResponseDto addLeaveAppDetails(LeaveApplication leaveAppDetail) {
		// TODO Auto-generated method stub
		return LeaveApplicationRepository.save(leaveAppDetail);
	}
	//Find the Leave Application
}
