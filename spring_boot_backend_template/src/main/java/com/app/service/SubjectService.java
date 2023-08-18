package com.app.service;

import com.app.dto.ApiResponseDto;
import com.app.dto.DepartmentDTO;
import com.app.dto.SubjectDTO;

public interface SubjectService {
	SubjectDTO getSubjectDetails(Long subId);
	ApiResponseDto addNewSubject(SubjectDTO sub);
}
