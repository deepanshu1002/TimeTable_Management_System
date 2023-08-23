package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

//	@GetMapping("/{id}")
//	public ResponseEntity<?> getLabVenue(@PathVariable Long id) {
//
//		return ResponseEntity.status(HttpStatus.OK).body(labService.getLabVenue(id));
//	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateLabVenue(@RequestBody String name,@PathVariable Long id) {

		return ResponseEntity.status(HttpStatus.OK).body(labService.updateLabVenue(name,id));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getLabVenue(@PathVariable Long id) {

		return ResponseEntity.status(HttpStatus.OK).body(labService.getAlllabs(id));
	}

}
