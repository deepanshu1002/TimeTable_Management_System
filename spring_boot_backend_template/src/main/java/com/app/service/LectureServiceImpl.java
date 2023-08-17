package com.app.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.entities.Department;
import com.app.entities.Lecture;
import com.app.entities.Subject;
import com.app.repository.DepartmentRepository;
import com.app.repository.LectureRepository;
import com.app.repository.SubjectRepository;

public class LectureServiceImpl implements LectureService{

	@Autowired
	private LectureRepository lectureRepo;
	
	@Autowired
	private DepartmentRepository deptRepo;
	
	@Autowired
	private SubjectRepository subRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public LectureRespDTO addNewLectureData(AddLectureDTO dto) {
		
		Department dept = deptRepo.findById(dto.getDeptId()).
				orElseThrow();
		
		
		
		Lecture lecture = mapper.map(dto, Lecture.class);
		
		dept.addLecture(lecture);
		
		Subject sub = subRepo.findById(dto.getSubId()).orElseThrow();
		return mapper.map(lectureRepo.save(lecture), LectureRespDTO.class);
	}

}
