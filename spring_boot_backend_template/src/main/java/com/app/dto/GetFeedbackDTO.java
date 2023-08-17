package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import lombok.*;

@Getter
@Setter
@ToString
public class GetFeedbackDTO {

	private LocalDate date;

	private Long rating;

	private String feedback;
}
