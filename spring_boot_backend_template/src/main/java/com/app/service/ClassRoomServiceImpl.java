package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AddClassRoomDTO;
import com.app.dto.AddLeaveApplicationDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.ClassRoom;
import com.app.entities.Department;
import com.app.entities.LeaveApplication;
import com.app.entities.Users;
import com.app.repository.ClassRoomRepository;
import com.app.repository.DepartmentRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class ClassRoomServiceImpl implements ClassRoomService {
	@Autowired
	private ClassRoomRepository classRoomRep;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private DepartmentRepository deptRep;
	@Override
	public List<ClassRoom> getAllClassRooms() {
		return classRoomRep.findAll();
	}

	@Override
	public ApiResponseDto addClassRoom(AddClassRoomDTO addClassRoom) {
		Department dept = deptRep.findById(addClassRoom.getDeptId()).orElseThrow(null);
		ClassRoom classRoom = mapper.map(addClassRoom, ClassRoom.class);
		dept.addClassRoom(classRoom);
		ClassRoom classRoom2 = classRoomRep.save(classRoom);
		return new ApiResponseDto("Class Room Added Successfull...");
	}	
}
