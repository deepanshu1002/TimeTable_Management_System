package com.app.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Feedback_tbl")
@IdClass(FeedbackPkId.class)
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Feedback{
	@Id
	private int studentId;
	@Id
	private int subjectId;
	@Id
	private LocalDate date;
	private int rating;
	private String feedback;
	private int deptId;
	
}
