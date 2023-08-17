package com.app.repository;

import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Department;
import com.app.entities.Lecture;

public interface LectureRepository extends JpaRepository<Lecture, Long>{

	@Query("Select new com.app.entities.Lecture"
			+ "(date,startTime, endTime, topicsCovered, lectureData, tommorrowAgenda)"
			+ "from Lecture l where l.dept= deptId and l.sub = subId, l.date= date")
	Lecture getLectureData(Long deptId, Long subId, Date date);

}
