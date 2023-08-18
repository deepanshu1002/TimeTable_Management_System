package com.app.service;

import java.time.LocalDate;
import java.util.List;

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

	@Override
	public LectureRespDTO getLectureDetails(Long deptId, Long subId, LocalDate date) {
		
		List <Lecture> lectures = lectureRepo.findByDate(date);
		
		Lecture lecture1=null;
		for(Lecture l : lectures)
		{
			Long departmentId = l.getDept().getDeptId();
			Long subjectId = l.getSub().getSubjectId();
			
			if(departmentId == deptId && subjectId == subId)
				lecture1= l;
		}
		
		//throw exception if lecture is null
		return mapper.map(lecture1, LectureRespDTO.class);
	}

}
