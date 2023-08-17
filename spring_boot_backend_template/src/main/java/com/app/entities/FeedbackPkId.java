package com.app.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Getter
@Setter
public class FeedbackPkId implements Serializable {

	private int studentId;

	private int subjectId;

	private LocalDate date;
}
