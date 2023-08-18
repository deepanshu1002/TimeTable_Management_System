package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AddLeaveApplicationDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.LeaveApplication;
import com.app.entities.Users;
import com.app.repository.LeaveApplicationRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class LeaveApplicationServiceImpl implements LeaveApplicationService {
	@Autowired
	private LeaveApplicationRepository leaveRep;
	
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<LeaveApplication> getAllLeaveApp() {
		return leaveRep.findAll();
	}
	
	@Override
	public ApiResponseDto addLeaveAppDetails(AddLeaveApplicationDTO leaveAppDetail) {
		Users user = userRepo.findById(leaveAppDetail.getUserId()).orElseThrow(null);
		LeaveApplication leaveApp = mapper.map(leaveAppDetail, LeaveApplication.class);
		user.addLeaveApplication(leaveApp);
		LeaveApplication leaveApp2 = leaveRep.save(leaveApp);
		return new ApiResponseDto("Leave Application Submitted Successfull...");
	}

	@Override
	public LeaveApplication getAllLeaveApp(Long userId) {
		return leaveRep.findById(userId).orElseThrow(null);
	}

	
}
