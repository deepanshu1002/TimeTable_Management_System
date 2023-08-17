package com.app.service;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;

public interface LectureService {

	
	LectureRespDTO addNewLectureData(AddLectureDTO dto);
	
}
