package com.app.entities;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
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
@ToString(exclude = { "dept" })
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
	private LocalDate startDate;
	private LocalDate endDate;
	private Double noOfHrsThisWeek;

	public Double breakTime1() {
		if (!(breakStartTime1.equals(LocalTime.MIDNIGHT))) {
			return (double)(breakStartTime1.until(breakEndTime1, ChronoUnit.MINUTES))/60;
		}
		return 0.0;
	}
	
	public Double breakTime2() {
		if (!(breakStartTime2.equals(LocalTime.MIDNIGHT))) {
			return (double)(breakStartTime2.until(breakEndTime2, ChronoUnit.MINUTES))/60;
			
		}
		return 0.0;
	}
	
	public Double breakTime3() {
		if (!(breakStartTime3.equals(LocalTime.MIDNIGHT))) {
			return (double)(breakStartTime2.until(breakEndTime3, ChronoUnit.MINUTES))/60;
			
		}	
		return 0.0;
	}

	public void setNoOfHrsThisWeek() {

		Double lectureHrsPerDay=(double)(collegeStartTime.until(collegeEndTime, ChronoUnit.MINUTES))/60-(breakTime1()+breakTime2()+breakTime3());
		System.out.println(lectureHrsPerDay);
		noOfHrsThisWeek=lectureHrsPerDay*noOfDaysThisWeek;
	}
	
	

}
