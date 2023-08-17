package com.app.entities;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;


@Entity 
@Table(name = "Lecture_tbl") 
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@IdClass(LecturePkId.class)
public class Lecture {
    
	@Id
	@Column(name = "dept_id")
	private int deptId;
	
	@Id
	@Column(name = "sub_id")
	private int subId;
	
	@Id
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalDate startTime;
	
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalDate endTime;
	
	
	@Column(length = 255)
	private String topicsCovered;
	
	@Column(length= 255)
	private String lectureDate;
	
	@Column(length= 255)
	private String tommorrowAgenda;
	
	
	
}
