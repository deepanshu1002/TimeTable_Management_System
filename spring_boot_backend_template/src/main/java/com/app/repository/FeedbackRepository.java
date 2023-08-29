package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Feedback;
import com.app.entities.Subject;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
	//List<Feedback> findByDateAndSubjectId(LocalDate date,Long subjectId);
	List<Feedback> findByDate(LocalDate date);
	List<Feedback> findBySubjectId(Subject subjectId);
	List<Feedback> findBySubjectIdSubjectIdAndDate(Long subjectId,LocalDate date);
	
}
