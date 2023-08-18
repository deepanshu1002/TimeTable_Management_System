package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddClassRoomDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.ClassRoom;
import com.app.service.ClassRoomService;


@RestController
@RequestMapping("/classroom")
public class ClassRoomController {
	@Autowired
	private ClassRoomService classRoomService;
	
	@GetMapping
	public List<ClassRoom> listAllClassRoom(){
		return classRoomService.getAllClassRooms();
	}
	
	@PostMapping
	public ApiResponseDto addClassRoom(@RequestBody AddClassRoomDTO addClassRoom) {
		return classRoomService.addClassRoom(addClassRoom);
	}
	
}
