package com.app.service;

import java.util.Date;
import java.util.List;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;

public interface LectureService {

	
	LectureRespDTO addNewLectureData(AddLectureDTO dto);

	LectureRespDTO getLectureDetails(Long deptId, Long subId, Date date);
	
}
