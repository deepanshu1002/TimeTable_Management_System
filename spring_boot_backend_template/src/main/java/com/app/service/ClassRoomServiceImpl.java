package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.ClassRoom;
import com.app.repository.ClassRoomRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class ClassRoomServiceImpl implements ClassRoomService {
	@Autowired
	private ClassRoomRepository classroomRep;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<ClassRoom> getAllClassRooms() {
		return classroomRep.findAll();
	}	
}
