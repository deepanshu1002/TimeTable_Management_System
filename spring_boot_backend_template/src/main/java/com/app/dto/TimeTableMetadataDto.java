package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@ToString()
@Getter
@Setter
public class TimeTableMetadataDto {
	
	
	private Long deptId;	
	private LocalTime collegeStartTime;
	private LocalTime collegeEndTime;
	private Long noOfBreaks;
	private LocalTime breakStartTime1;
	private LocalTime breakEndTime1;
	private LocalTime breakStartTime2;
	private LocalTime breakEndTime2;
	private LocalTime breakStartTime3;
	private LocalTime breakEndTime3;
	private Long noOfLabHrsDaily;
	private Long noOfLectursPerDay;
	private Long noOfDaysThisWeek;
	private LocalDate StartDate;
	
}
