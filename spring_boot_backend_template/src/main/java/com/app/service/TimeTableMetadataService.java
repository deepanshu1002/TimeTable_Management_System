package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.GetFeedbackDTO;
import com.app.dto.TimeTableMetadataDto;

public interface TimeTableMetadataService {
	ApiResponseDto addData(TimeTableMetadataDto data);
	TimeTableMetadataDto getDataByDateAndDeptId(String dateString,Long deptId);
}
