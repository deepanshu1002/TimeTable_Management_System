package com.app.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FeedbackDTO {
	private String teacherName;
	private String subjectName;
	private Double ratings;
	private int percentage5;
	private int percentage4;
	private int percentage3;
	private int percentage2;
	private int percentage1;
	private List<FeedbacksDTO> feedbacks;
	
}
