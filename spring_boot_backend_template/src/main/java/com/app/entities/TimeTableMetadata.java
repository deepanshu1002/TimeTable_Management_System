package com.app.entities;

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

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "TimeTableMetadata_tbl")
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"dept"})
@Getter
@Setter
public class TimeTableMetadata {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime collegeStartTime;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime collegeEndTime;
	@Column(length = 3)
	private Long noOfBreaks;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime breakStartTime1;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime breakEndTime1;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime breakStartTime2;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime breakEndTime2;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime breakStartTime3;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime breakEndTime3;
	private Long noOfLabHrsDaily;
	private Long noOfLectursPerDay;
	private Long noOfDaysThisWeek;
	private LocalDate StartDate;
	private LocalDate EndDate;
	
}
