package com.app.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;

import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.GetFeedbackDTO;
import com.app.entities.Feedback;
import com.app.entities.Subject;
import com.app.entities.Users;
import com.app.repository.FeedbackRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.UserRepository;

public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponseDto addFeedback(AddFeedbackReqDTO feedbackDTO) {
		// Finding the user to add feedback to the user
		Users user = userRepo.findById(feedbackDTO.getStudentId()).orElseThrow(null);

		Subject subject = subjectRepo.findById(feedbackDTO.getSubjectId()).orElseThrow(null);

		Feedback feedback = mapper.map(feedbackDTO, Feedback.class);

		user.addFeedback(feedback);

		subject.addFeedback(feedback);

		feedbackRepo.save(feedback);

		return new ApiResponseDto("Feedback added successfully");
	}

	@Override
	public List<GetFeedbackDTO> getFeedback(LocalDate date, Long subjectId) {

		List<Feedback> feedbackList = feedbackRepo.findByDateAndSubjectId(date, subjectId);

		return feedbackList.stream() // Stream<Emp>
				.map(feedback -> mapper.map(feedback, GetFeedbackDTO.class)) // Stream<DTO>
				.collect(Collectors.toList());
	}

}
