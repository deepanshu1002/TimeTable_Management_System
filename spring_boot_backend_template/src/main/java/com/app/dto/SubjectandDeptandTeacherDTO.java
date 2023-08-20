package com.app.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.app.entities.Department;
import com.app.entities.Users;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
public class SubjectandDeptandTeacherDTO {
	
	private String dept;
	@JsonProperty(access = Access.READ_ONLY)
	private Long subjectId;
	
	private String teacher;
	
	private String subjectName;
}
