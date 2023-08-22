package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LabVenueDTO;
import com.app.service.LabServiceImpl;

@RestController("/labvenue")

public class LabController {
	@Autowired
	private LabServiceImpl labService;
	@PostMapping
		public ResponseEntity<?> addNewLabVenue(@RequestBody @Valid LabVenueDTO dto) {
		
		return ResponseEntity.status(HttpStatus.CREATED).body(labService.addNewLabVenue(dto));
	}

}
