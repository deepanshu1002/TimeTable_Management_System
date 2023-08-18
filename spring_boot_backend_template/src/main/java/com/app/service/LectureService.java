package com.app.service;

import java.time.LocalDate;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.entities.Lecture;

import io.swagger.v3.oas.annotations.responses.ApiResponse;

public interface LectureService {

	
	LectureRespDTO addNewLectureData(AddLectureDTO dto);

	LectureRespDTO getLectureDetails(Long deptId, Long subId, LocalDate date);

	String deleteLectureDetails(Long lectureId);

	LectureRespDTO getLectureDetailsById(Long lectureId);
	
}
