package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponseDto;
import com.app.dto.SubjectDTO;
import com.app.dto.SubjectandDeptandTeacherDTO;
import com.app.dto.SubjectsDTO;
import com.app.entities.Department;
import com.app.entities.Lab;
import com.app.entities.Subject;
import com.app.entities.Users;
import com.app.repository.DepartmentRepository;
import com.app.repository.LabRepo;
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

	@Autowired
	private LabRepo labRepo;

	@Override
	public SubjectDTO getSubjectDetails(Long subId) {
		Subject sub = subjectRepo.findById(subId).orElseThrow(null);
		SubjectDTO subDTO = new SubjectDTO(sub.getDept().getDeptId(), sub.getSubjectId(),
				sub.getTeacherId().getUserId(), sub.getSubjectName(), sub.getLabVenue().getLabId());
		return subDTO;

	}

	@Override
	public ApiResponseDto addNewSubject(SubjectDTO sub) {

		Users user = userRepo.findById(sub.getTeacherId()).orElseThrow(null);
		if (user.getRole().getRoleId() == 2) {
//			Lab lab = labRepo.findById(sub.getLabId())
//					.orElseThrow(() -> new ResourceNotFoundException("invalid labId"));

			Department dept = departmentRepo.findById(sub.getDeptId())
					.orElseThrow(() -> new ResourceNotFoundException("invalid deptid"));
			Subject subjectEntity = mapper.map(sub, Subject.class);
			System.out.println(subjectEntity);
			user.addSubject(subjectEntity);
			dept.addSubject(subjectEntity);
			// to add null values to subject with no lab
			if (sub.getLabId() != null) {
				Lab lab = labRepo.findById(sub.getLabId())
						.orElseThrow(() -> new ResourceNotFoundException("invalid labId"));
				lab.addSubject(subjectEntity);
			}
			// lab.addSubject(subjectEntity);
			Subject persistentSub = subjectRepo.save(subjectEntity);
			return new ApiResponseDto("Subject updated!");
		} else
			return new ApiResponseDto("Not a teacher");
	}

	@Override
	public ApiResponseDto updateSubject(SubjectDTO sub) {
		Subject subject = subjectRepo.findById(sub.getSubjectId()).orElseThrow(null);

		Users user = userRepo.findById(sub.getTeacherId()).orElseThrow(null);
		if (user.getRole().getRoleId() == 2) {

			Department dept = departmentRepo.findById(sub.getDeptId()).orElseThrow(null);
			mapper.map(sub, subject);
			user.addSubject(subject);
			dept.addSubject(subject);

			return new ApiResponseDto("Subject updated!");
		} else
			return new ApiResponseDto("Not a teacher");
	}

	@Override
	public SubjectandDeptandTeacherDTO getSubjectandDeptandTeacherDetails(Long subId) {

		Subject sub = subjectRepo.getSubjectandDepartmentandTeacher(subId);
		// System.out.println(sub);
		SubjectandDeptandTeacherDTO subjectDetails = new SubjectandDeptandTeacherDTO(sub.getDept().getDeptName(), subId,
				sub.getTeacherId().getFirstName().concat(sub.getTeacherId().getLastName()), sub.getSubjectName());
		return subjectDetails;
	}

	@Override
	public List<SubjectDTO> getAllSubject(Long deptId) {
		List<SubjectDTO> subDTOs = new ArrayList<SubjectDTO>();
		List<Subject> subjects = subjectRepo.findByDeptDeptId(deptId);
		for (Subject sub : subjects) {
			System.out.println(sub.getSubjectName());
			subDTOs.add(new SubjectDTO(sub.getDept().getDeptId(), sub.getSubjectId(), sub.getTeacherId().getUserId(),
					sub.getSubjectName(), sub.getLabVenue().getLabId()));
		}
		return subDTOs;
	}

	public List<String> getAllSubjectsName() {
		return subjectRepo.getAllSubjectName();

	}

	public List<SubjectsDTO> getAllSubjects(Long teacherId) {
		List<Subject> subjects = subjectRepo.findByTeacherIdUserId(teacherId);
		List<SubjectsDTO> subjectDtoList = new ArrayList<SubjectsDTO>();
		for (Subject subject : subjects) {
			SubjectsDTO Dto = mapper.map(subject, SubjectsDTO.class);
			subjectDtoList.add(Dto);
		}
		return subjectDtoList;

	}

}
