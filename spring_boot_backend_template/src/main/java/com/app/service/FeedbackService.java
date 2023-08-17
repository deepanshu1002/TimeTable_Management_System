package com.app.service;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;

public interface FeedbackService {
	ApiResponseDto addFeedback(AddFeedbackReqDTO feedback);
}
