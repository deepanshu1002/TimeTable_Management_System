package com.app.service;

import com.app.dto.ApiResponseDto;
import com.app.dto.DepartmentDTO;
import com.app.dto.SubjectDTO;
import com.app.dto.SubjectandDeptandTeacherDTO;

public interface SubjectService {
	SubjectDTO getSubjectDetails(Long subId);
	SubjectandDeptandTeacherDTO getSubjectandDeptandTeacherDetails(Long subId);
	ApiResponseDto addNewSubject(SubjectDTO sub);
	ApiResponseDto updateSubject(SubjectDTO sub);
}
