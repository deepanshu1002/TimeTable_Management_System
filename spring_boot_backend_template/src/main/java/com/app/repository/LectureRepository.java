package com.app.repository;



import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Lecture;

public interface LectureRepository extends JpaRepository<Lecture, Long>{

	List <Lecture> findByDate(LocalDate date);
	
	Lecture findByDeptDeptIdAndDateAndStartTime(Long id,LocalDate date,LocalTime time);

	
}
