package com.app.service;

import java.util.Date;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddLectureDTO;
import com.app.dto.LectureRespDTO;
import com.app.entities.Department;
import com.app.entities.Lecture;
import com.app.entities.Subject;
import com.app.repository.DepartmentRepository;
import com.app.repository.LectureRepository;
import com.app.repository.SubjectRepository;


@Service
@Transactional
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
		
		Department dept = deptRepo.findById(dto.getDeptartmentId()).
				orElseThrow();
		Lecture lecture = mapper.map(dto, Lecture.class);
		
		dept.addLecture(lecture);
		Subject sub = subRepo.findById(dto.getSubjectId()).orElseThrow();
		sub.addLecture(lecture);
		System.out.println("before lecture: " + lecture.getTopicsCovered() + lecture.getDate());
		Lecture lect = lectureRepo.save(lecture);
		System.out.println("lecture: " + lect.getTopicsCovered() + lect.getDate());
		
		return mapper.map(lect, LectureRespDTO.class);
	}

//	@Override
//	public LectureRespDTO getLectureDetails(Long deptId, Long subId, Date date) {
//		
//		Lecture lecture = lectureRepo.getLectureData(deptId, subId, date);
//		return mapper.map(lecture, LectureRespDTO.class);
//	}

}
