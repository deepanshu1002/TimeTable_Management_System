package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.SubjectMetadataResp;
import com.app.dto.TimetableSubjectMetadataDTO;

public interface SubjectMetadataService {
	TimetableSubjectMetadataDTO addSubjectMetadataWeeklyHrs(TimetableSubjectMetadataDTO dto);
    SubjectMetadataResp getSubjectMetadata(Long deptId, Long subjectId,String startdate);
    List<TimetableSubjectMetadataDTO> addSubjectMetadataWeeklyHrs(List<TimetableSubjectMetadataDTO> dtoList);
    List<SubjectMetadataResp> getAllSubjectMetadata(Long deptId,String startdate);
}
