package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TimetableSubjectMetadataDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long subjectWeekHrsId;
	private  Long deptId;
	private Long subjectId;
	private int weeklyHrs;
	private LocalDate startDate;
}
