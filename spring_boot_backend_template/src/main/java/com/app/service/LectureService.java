package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;

public interface LectureService {

	
	LectureRespDTO addNewLectureData(AddLectureDTO dto);

	LectureRespDTO getLectureDetails(Long deptId, Long subId, LocalDate date);

	String deleteLectureDetails(Long lectureId);

	LectureRespDTO getLectureDetailsById(Long lectureId);

	List <LectureRespDTO> getAllLectureDetails();
	
}
