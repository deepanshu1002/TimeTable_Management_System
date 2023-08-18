package com.app.service;

import java.util.List;

import com.app.dto.AddClassRoomDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.ClassRoom;

public interface ClassRoomService {
	//get the Class Room
	List<ClassRoom> getAllClassRooms();
	//post the Class Room
	ApiResponseDto addClassRoom(AddClassRoomDTO addClassRoom);
	//get the Class Room By Id
	
	//Update the Status of Class Room
	
}
