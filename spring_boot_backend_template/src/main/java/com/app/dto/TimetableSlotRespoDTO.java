package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class TimetableSlotRespoDTO {

	private Long timetableSlotId;
	private LocalDate date;
	
    private LocalTime startTime;
	
    private LocalTime endTime;
	
//    byte [] teacherPicture;
    
    private Long teacherId;
    
    private Long subjectId;

    private Long classroomId;
    
    private Long deptId;

    private Long lectureDataId;
    
    
}
