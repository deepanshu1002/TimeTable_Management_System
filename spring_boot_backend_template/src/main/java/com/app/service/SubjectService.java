package com.app.service;

import java.util.List;

import com.app.dto.ApiResponseDto;
import com.app.dto.SubjectDTO;
import com.app.dto.SubjectandDeptandTeacherDTO;
import com.app.dto.SubjectsDTO;

public interface SubjectService {
	SubjectDTO getSubjectDetails(Long subId);
	SubjectandDeptandTeacherDTO getSubjectandDeptandTeacherDetails(Long subId);
	ApiResponseDto addNewSubject(SubjectDTO sub);
	ApiResponseDto updateSubject(SubjectDTO sub);

	List<SubjectDTO> getAllSubject(Long deptId);

    public List<String> getAllSubjectsName();
    public List<SubjectsDTO>getAllSubjects(Long teacherId);

}
