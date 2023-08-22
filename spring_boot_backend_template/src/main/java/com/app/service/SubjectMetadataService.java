package com.app.service;

import java.time.LocalDate;

import com.app.dto.SubjectMetadataResp;
import com.app.dto.TimetableSubjectMetadataDTO;

public interface SubjectMetadataService {
	TimetableSubjectMetadataDTO addSubjectMetadataWeeklyHrs(TimetableSubjectMetadataDTO dto);
    public SubjectMetadataResp getSubjectMetadata(Long deptId, Long subjectId,String startdate);
}
