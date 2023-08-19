package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ClassRoomDTO;
import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.ClassRoom;
import com.app.entities.Department;
import com.app.entities.Feedback;
import com.app.entities.Subject;
import com.app.entities.Users;
import com.app.repository.ClassRoomRepository;
import com.app.repository.DepartmentRepository;

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
	public ApiResponseDto addClassRoom(ClassRoomDTO addClassroomDTO) {
		Department dept = deptRep.findById(addClassroomDTO.getDeptId()).orElseThrow(null);
		//System.out.println("Department ID ="+dept.getDeptId());
		ClassRoom classRoom = mapper.map(addClassroomDTO, ClassRoom.class);
		dept.addClassRoom(classRoom);
		//System.out.println(classRoom.getClassroomId()+classRoom.getClassroomName()+classRoom.getDept().getDeptId());
		classRoomRep.save(classRoom);
		return new ApiResponseDto("Class Room Added Successfull...");
	}	
}
