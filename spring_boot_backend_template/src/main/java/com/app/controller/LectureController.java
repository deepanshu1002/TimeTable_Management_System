package com.app.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.service.LectureService;

@RestController
@RequestMapping("/lecture")
@CrossOrigin(origins = "*")
public class LectureController {

	@Autowired
	private LectureService lectureService;

	@GetMapping
	public ResponseEntity<?> getAllLectureDetails() {
	//System.out.println("in get dept dtls " + deptId);
		return ResponseEntity.ok(lectureService.getAllLectureDetails());
	}

	@PostMapping
	public ResponseEntity<?> addlectureData(@RequestBody AddLectureDTO dto) {
		System.out.println("inside" + dto);

		return ResponseEntity.status(HttpStatus.CREATED).body(lectureService.addNewLectureData(dto));
	}

	@GetMapping("{lectureId}")
	public ResponseEntity<?> getLectureDetailsById(@PathVariable Long lectureId) {

		LectureRespDTO lecture = lectureService.getLectureDetailsById(lectureId);

		return ResponseEntity.ok(lecture);
	}

	@GetMapping("/{deptId}/{subId}/{date}")
	public ResponseEntity<?> getLectureData(@PathVariable Long deptId, @PathVariable Long subId,
			@PathVariable String date) {

		LocalDate date1 = LocalDate.parse(date);
		LectureRespDTO lectureDetails = lectureService.getLectureDetails(deptId, deptId, date1);
		if (lectureDetails == null)
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

		return ResponseEntity.ok(lectureDetails);
	}

	@PutMapping
	public ResponseEntity<?> updatelectureData(@RequestBody AddLectureDTO dto) {

		// put exception here if didn't find entity with given Id

		return ResponseEntity.status(HttpStatus.CREATED).body(lectureService.addNewLectureData(dto));
	}

//	
	@DeleteMapping("/{lecureId}")
	public String deleteLectureDetails(@PathVariable Long lectureId) {

		return lectureService.deleteLectureDetails(lectureId);
	}

	@GetMapping("slotLectureData/{deptId}/{date}/{time}")
	public ResponseEntity<?> getLectureData(@PathVariable Long deptId, @PathVariable String date,
			@PathVariable String time) {

		return ResponseEntity
				.ok(lectureService.getLectureDetailsForSlot(deptId, LocalDate.parse(date), LocalTime.parse(time)));
	}

	@PostMapping("/lecturedata/{id}")
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable Long id) {
		try {
			lectureService.uploadFile(file, id);

			return ResponseEntity.ok("File uploaded successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading file");
		}
	}

	@GetMapping("download/{id}")
	public ResponseEntity<?> getLectureData(@PathVariable Long id, HttpServletRequest request) {
		String filePath = lectureService.downloadFile(id); // Get the path from your database

		File file = new File(filePath);
		if (!file.exists()) {
			throw new ResourceNotFoundException("Lecture data file not found");
		}
		byte[] fileContent;
		try {
			fileContent = Files.readAllBytes(file.toPath());
		} catch (IOException e) {
			throw new ResourceNotFoundException("error");
		}
		

		return ResponseEntity.ok().contentType(MediaType.parseMediaType("application/zip"))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
				.body(fileContent);
	}

}
