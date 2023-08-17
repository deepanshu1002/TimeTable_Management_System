package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.repository.LectureRepository;

public class LectureServiceImpl implements LectureService{

	@Autowired
	private LectureRepository lectureRepo;
	
	
	@Override
	public LectureRespDTO addNewLectureData(AddLectureDTO dto) {
		
		return null;
	}

}
