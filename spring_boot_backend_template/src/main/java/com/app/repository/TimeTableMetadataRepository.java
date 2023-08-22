package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Feedback;
import com.app.entities.TimeTableMetadata;

public interface TimeTableMetadataRepository extends JpaRepository<TimeTableMetadata, Long> {
	@Query(value = "select t from TimeTableMetadata t where t.StartDate=?1 and t.dept.deptId=?2")
	TimeTableMetadata getByWeekStartDateandDeptId(LocalDate date,Long id);
}
