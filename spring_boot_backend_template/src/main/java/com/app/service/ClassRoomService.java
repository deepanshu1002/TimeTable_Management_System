package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDto;
import com.app.dto.ClassRoomDTO;

public interface ClassRoomService {
	//get the Class Room
	List<ClassRoomDTO> getAllClassRooms();
	//post the Class Room
	ApiResponseDto addClassRoom(ClassRoomDTO addClassroom);
	//get the Class Room By Id
	
	//Update the Status of Class Room
	
}
