package com.app.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Feedback_tbl")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Feedback {
	@Id
	private int feedbackId;
	@ManyToOne
	@JoinColumn(name = "student_id")
	private Users studentId;
	@ManyToOne
	@JoinColumn(name = "subject_id")
	private Subject subjectId;
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department deptId;

	private LocalDate date;
	@Column(length = 5)
	private int rating;
	@Column(length = 200)
	private String feedback;

}
