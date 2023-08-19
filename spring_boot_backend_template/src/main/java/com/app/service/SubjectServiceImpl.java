package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ApiResponseDto;
import com.app.dto.DepartmentDTO;
import com.app.dto.SubjectDTO;
import com.app.dto.SubjectandDeptandTeacherDTO;
import com.app.entities.Department;
import com.app.entities.Subject;
import com.app.entities.Users;
import com.app.repository.DepartmentRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {
	@Autowired
	private SubjectRepository subjectRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private DepartmentRepository departmentRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public SubjectDTO getSubjectDetails(Long subId) {
		Subject sub = subjectRepo.findById(subId).orElseThrow(null);
		SubjectDTO subDTO=new SubjectDTO(sub.getDept().getDeptId(),sub.getSubjectId(),sub.getTeacherId().getUserId(),sub.getSubjectName());
		return subDTO;

	}

	@Override
	public ApiResponseDto addNewSubject(SubjectDTO sub) {

		Users user = userRepo.findById(sub.getTeacherId()).orElseThrow(null);
		if (user.getRole().getRoleId() == 2) {
			
			Department dept = departmentRepo.findById(sub.getDeptId()).orElseThrow(null);
			Subject subjectEntity = mapper.map(sub, Subject.class);
			System.out.println(subjectEntity);
			user.addSubject(subjectEntity);
			dept.addSubject(subjectEntity);
			Subject persistentSub = subjectRepo.save(subjectEntity);
			return new ApiResponseDto("Subject updated!");
		}
		else
		return new ApiResponseDto("Not a teacher");
	}

	@Override
	public ApiResponseDto updateSubject(SubjectDTO sub) {
		Subject subject = subjectRepo.findById(sub.getSubjectId())
				.orElseThrow(null);
		
		Users user = userRepo.findById(sub.getTeacherId()).orElseThrow(null);
		if (user.getRole().getRoleId() == 2) {
			
			Department dept = departmentRepo.findById(sub.getDeptId()).orElseThrow(null);
			mapper.map(sub, subject);
			user.addSubject(subject);
			dept.addSubject(subject);
			
			return new ApiResponseDto("Subject updated!");
		}
		else
		return new ApiResponseDto("Not a teacher");
	}

	@Override
	public SubjectandDeptandTeacherDTO getSubjectandDeptandTeacherDetails(Long subId) {
		System.out.println("inside getallsubject");
		
		subjectRepo.getSubjectandDepartmentandTeacher(subId);
		return null;
	}
}
