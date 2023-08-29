package com.app.service;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;

public interface LectureService {

	
	LectureRespDTO addNewLectureData(AddLectureDTO dto);

	LectureRespDTO getLectureDetails(Long deptId, Long subId, LocalDate date);

	String deleteLectureDetails(Long lectureId);

	LectureRespDTO getLectureDetailsById(Long lectureId);

	List <LectureRespDTO> getAllLectureDetails();
	
	LectureRespDTO getLectureDetailsForSlot(Long deptId,LocalDate date,LocalTime time);
	
	String uploadFile(MultipartFile file,Long id) throws IOException; 
	
	String downloadFile(Long id); 
	
}
