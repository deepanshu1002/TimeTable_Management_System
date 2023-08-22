package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.entities.TimetableSlot;
import com.app.service.TimetableSlotService;

@RestController
@RequestMapping("/timetableSlot")
public class TimetableSlotController {
	
	@Autowired
	private TimetableSlotService timetableSlotService;
	
	@PostMapping
	public ResponseEntity<?> addTimetableSlot(@RequestBody AddTimetableSlotDTO dto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(timetableSlotService.addNewTimetableSlot(dto));
	}
	
	@GetMapping("/{slotId}")
	public ResponseEntity<?> getTimetableSlotDetailsById(@PathVariable Long slotId) {
	
		TimetableSlotRespoDTO timetableSlotDTO = timetableSlotService.getTimetableSlotDetailsById(slotId);
		
		return ResponseEntity.ok(timetableSlotDTO);
	}
	
	

}
