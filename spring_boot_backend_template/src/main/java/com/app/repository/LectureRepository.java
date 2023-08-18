package com.app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.app.entities.Lecture;
import com.app.entities.LecturePkId;

public interface LectureRepository extends JpaRepository<Lecture, LecturePkId>{

//	@Query("Select new com.app.entities.Lecture"
//			+ "(date,startTime, endTime, topicsCovered, lectureData, tommorrowAgenda)"
//			+ "from Lecture l where l.dept= deptId and l.sub = subId and l.date= date")
//	Lecture getLectureData(Long deptId, Long subId, Date date);

}
