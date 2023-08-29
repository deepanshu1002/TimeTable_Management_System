package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.FeedbackDTO;
import com.app.dto.GetFeedbackDTO;

public interface FeedbackService {
	ApiResponseDto addFeedback(AddFeedbackReqDTO feedback);
	List<GetFeedbackDTO> getFeedback(LocalDate date,Long subjectId);
	public FeedbackDTO getFeedback(String subjectName);
	public FeedbackDTO getTeacherFeedback(LocalDate date,Long subjectId);
	
}
