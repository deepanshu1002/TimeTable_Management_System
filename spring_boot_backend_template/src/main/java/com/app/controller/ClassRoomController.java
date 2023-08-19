package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponseDto;
import com.app.dto.ClassRoomDTO;
import com.app.service.ClassRoomService;


@RestController
@RequestMapping("/classroom")
public class ClassRoomController {
	@Autowired
	private ClassRoomService classRoomService;
	
	@GetMapping
	public ResponseEntity<?> listAllClassRoom(){
		List<ClassRoomDTO> classList = classRoomService.getAllClassRooms();
		return ResponseEntity.ok(classList);
	}
	
	@PostMapping
	public ApiResponseDto addClassRoom(@RequestBody ClassRoomDTO classRoom) {
		return classRoomService.addClassRoom(classRoom);
	}
	
}
