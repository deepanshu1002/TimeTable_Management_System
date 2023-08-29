package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddFeedbackReqDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.FeedbackDTO;
import com.app.dto.FeedbacksDTO;
import com.app.dto.GetFeedbackDTO;
import com.app.entities.Feedback;
import com.app.entities.Subject;
import com.app.entities.Users;
import com.app.repository.DepartmentRepository;
import com.app.repository.FeedbackRepository;
import com.app.repository.SubjectRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepo;
	@Autowired
	private SubjectRepository subjectRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private DepartmentRepository deptRepo;
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

		// List<Feedback> feedbackList = feedbackRepo.findByDateAndSubjectId(date,
		// subjectId);
		List<Feedback> feedbackList = feedbackRepo.findByDate(date);

		return feedbackList.stream() // Stream<Emp>
				.map(feedback -> mapper.map(feedback, GetFeedbackDTO.class)) // Stream<DTO>
				.collect(Collectors.toList());

	}

	public FeedbackDTO getFeedback(String subjectName) {
		Subject sub = subjectRepo.findBySubjectName(subjectName);
		Users teacher = userRepo.findById(sub.getTeacherId().getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("invalid teacher Id"));
		// Department dept = deptRepo.findById(deptId).orElseThrow(()-> new
		// ResourceNotFoundException("invalid department id"));
		FeedbacksDTO dto1 = new FeedbacksDTO();
		List<Feedback> feedbacks = feedbackRepo.findBySubjectId(sub);
		List<Long> listOfRatings = new ArrayList<Long>();
		List<FeedbacksDTO> listOfFeedback = new ArrayList<FeedbacksDTO>();

		for (Feedback feedback : feedbacks) {

			Long rating = feedback.getRating();
			FeedbacksDTO dto = new FeedbacksDTO();
			dto.setDate(feedback.getDate());
			dto.setFeedback(feedback.getFeedback());
			listOfRatings.add(rating);
			listOfFeedback.add(dto);

		}

		int totalRatings = listOfRatings.size();
		System.out.println(totalRatings);

		int count5 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 5L) {
				count5++;
			}
		}

		int count4 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 4L) {
				count4++;
			}
		}

		int count3 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 3L) {
				count3++;
			}
		}

		int count2 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 2L) {
				count2++;
			}
		}

		int count1 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 1L) {
				count1++;
			}
		}
		System.out.println(count5 + "" + count4 + "" + count3 + "" + count2 + "" + count1);

		int percentage5 = (count5 * 100) / totalRatings;
		int percentage4 = (count4 * 100) / totalRatings;
		int percentage3 = (count3 * 100) / totalRatings;
		int percentage2 = (count2 * 100) / totalRatings;
		int percentage1 = (count1 * 100) / totalRatings;
		System.out.println("count5 is" + count5);
		System.out.println("totalrating  is" + totalRatings);
		System.out.println("percent 5 is " + percentage5);

		double average = listOfRatings.stream().reduce((a, i) -> a + i).orElse(null) / (float) listOfRatings.size();
		FeedbackDTO dto = new FeedbackDTO(teacher.getFirstName(), sub.getSubjectName(), average, percentage5,
				percentage4, percentage3, percentage2, percentage1, listOfFeedback);
		return dto;

	}

	public FeedbackDTO getTeacherFeedback(LocalDate date, Long subjectId) {
		Subject sub = subjectRepo.findById(subjectId)
				.orElseThrow(() -> new ResourceNotFoundException("invalid subjectId"));
		Users teacher = userRepo.findById(sub.getTeacherId().getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("invalid teacher Id"));
		// Department dept = deptRepo.findById(deptId).orElseThrow(()-> new
		// ResourceNotFoundException("invalid department id"));
		FeedbacksDTO dto1 = new FeedbacksDTO();
		List<Feedback> feedbacks = feedbackRepo.findBySubjectIdSubjectIdAndDate(sub.getSubjectId(), date);
		List<Long> listOfRatings = new ArrayList<Long>();
		List<FeedbacksDTO> listOfFeedback = new ArrayList<FeedbacksDTO>();

		for (Feedback feedback : feedbacks) {

			Long rating = feedback.getRating();
			FeedbacksDTO dto = new FeedbacksDTO();
			dto.setDate(feedback.getDate());
			dto.setFeedback(feedback.getFeedback());
			listOfRatings.add(rating);
			listOfFeedback.add(dto);

		}

		int totalRatings = listOfRatings.size();
		System.out.println(totalRatings);

		int count5 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 5L) {
				count5++;
			}
		}

		int count4 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 4L) {
				count4++;
			}
		}

		int count3 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 3L) {
				count3++;
			}
		}

		int count2 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 2L) {
				count2++;
			}
		}

		int count1 = 0;
		for (Long rating : listOfRatings) {
			if (rating == 1L) {
				count1++;
			}
		}
		System.out.println(count5 + "" + count4 + "" + count3 + "" + count2 + "" + count1);

		int percentage5 = (count5 * 100) / totalRatings;
		int percentage4 = (count4 * 100) / totalRatings;
		int percentage3 = (count3 * 100) / totalRatings;
		int percentage2 = (count2 * 100) / totalRatings;
		int percentage1 = (count1 * 100) / totalRatings;
		System.out.println("count5 is" + count5);
		System.out.println("totalrating  is" + totalRatings);
		System.out.println("percent 5 is " + percentage5);

		double average = listOfRatings.stream().reduce((a, i) -> a + i).orElse(null) / (float) listOfRatings.size();
		FeedbackDTO dto = new FeedbackDTO(teacher.getFirstName(), sub.getSubjectName(), average, percentage5,
				percentage4, percentage3, percentage2, percentage1, listOfFeedback);
		return dto;

	}

}
