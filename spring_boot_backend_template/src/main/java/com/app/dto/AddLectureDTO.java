package com.app.dto;



import java.time.LocalDate;
import java.time.LocalTime;

import com.app.entities.Department;
import com.app.entities.Subject;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddLectureDTO {
 	
    private Long id;
	private LocalDate date;	
	private LocalTime startTime;
	private LocalTime endTime;
	private String topicsCovered;
	private String lectureData;
	private String tommorrowAgenda;
	private Long deptartmentId;
	private Long subjectId;

}
