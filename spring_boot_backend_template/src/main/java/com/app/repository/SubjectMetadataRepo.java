package com.app.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.TimetableSubjectsMetadata;

public interface SubjectMetadataRepo extends JpaRepository<TimetableSubjectsMetadata, Long>{
@Query(value = "select t from TimetableSubjectsMetadata t where t.dept.deptId=?1 and t.subject.subjectId=?2 and t.startDate=?3" )
TimetableSubjectsMetadata findByDeptIdandSubjectIdandWeekStartDate(Long deptId,Long subjectId,LocalDate startDate);

}
