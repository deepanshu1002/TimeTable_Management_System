package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.app.entities.Department;
import com.app.entities.Subject;



public class LectureRespDTO {
	private LocalDate date;	
	private LocalTime startTime;
	private LocalTime endTime;
	
	 private Department dept;
	private Subject sub;
	
}
