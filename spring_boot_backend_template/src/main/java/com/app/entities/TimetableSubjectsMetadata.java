package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "timetable_subjects_metadat_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class TimetableSubjectsMetadata {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	@ManyToOne
	@JoinColumn(name = "subject_id")
	private Subject subject;
	@Column(name = "weekly_hrs")
	private int weeklyHrs;
	private LocalDate startDate;

}
