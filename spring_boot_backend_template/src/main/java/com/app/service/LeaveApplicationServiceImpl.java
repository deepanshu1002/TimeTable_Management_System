package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AddLeaveApplicationDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;
import com.app.repository.LeaveApplicationRepository;

@Service
@Transactional
public class LeaveApplicationServiceImpl implements LeaveApplicationService {
	@Autowired
	private LeaveApplicationRepository leaveRep;
	
	private ModelMapper mapper;
	
	@Override
	public List<LeaveApplication> getAllLeaveApp() {
		return leaveRep.findAll();
	}
	
	@Override
	public ApiResponseDto addLeaveAppDetails(AddLeaveApplicationDTO leaveAppDetail) {
		LeaveApplication leaveApp = mapper.map(leaveAppDetail, LeaveApplication.class);
		LeaveApplication leaveApp2 = leaveRep.save(leaveApp);
		return new ApiResponseDto("Leave Application Submitted Successful...");
	}

	
}
