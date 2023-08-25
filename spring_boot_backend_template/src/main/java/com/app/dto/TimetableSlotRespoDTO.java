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

	private String teacherName;

	private Long subjectId;

	private String subjectName;

	private Long classroomId;

	private String classroomName;

	private Long deptId;

	private String deptName;

	private Long lectureDataId;

	public TimetableSlotRespoDTO(Long timetableSlotId, LocalDate date, LocalTime startTime, LocalTime endTime,
			Long teacherId, String teacherName, Long subjectId, String subjectName, Long classroomId,
			String classroomName, Long deptId, String deptName) {
		super();
		this.timetableSlotId = timetableSlotId;
		this.date = date;
		this.startTime = startTime;
		this.endTime = endTime;
		this.teacherId = teacherId;
		this.teacherName = teacherName;
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.classroomId = classroomId;
		this.classroomName = classroomName;
		this.deptId = deptId;
		this.deptName = deptName;
	}

}
