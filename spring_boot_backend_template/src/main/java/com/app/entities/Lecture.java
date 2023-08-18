package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "Lecture_tbl") 
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Lecture {
    	
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime startTime;
	
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime endTime;
	
	
	@Column(length = 255)
	private String topicsCovered;
	
	@Column(length= 255)
	private String lectureData;
	
	@Column(length= 255)
	private String tommorrowAgenda;
	
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "dept_id")
    private Department dept;
	
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	@JoinColumn(name = "sub_id")
	private Subject sub;
	
	
	
	
}
