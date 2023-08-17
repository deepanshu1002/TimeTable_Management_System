package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.entities.Department;
import com.app.entities.Subject;
import com.app.entities.Users;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AddFeedbackReqDTO {
	
	private Users studentId;
	private Long subjectId;
	private Long deptId;
	private LocalDate date;
	private Long rating;
	private String feedback;
}
