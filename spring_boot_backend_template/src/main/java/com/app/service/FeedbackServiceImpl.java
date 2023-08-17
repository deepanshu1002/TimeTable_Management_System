package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.Feedback;
import com.app.repository.FeedbackRepository;
import com.app.repository.SubjectRepository;

public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	private FeedbackRepository feedbackRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	
	@Override
	public ApiResponseDto addFeedback(AddFeedbackReqDTO feedback) {
		return null;
	}

}
