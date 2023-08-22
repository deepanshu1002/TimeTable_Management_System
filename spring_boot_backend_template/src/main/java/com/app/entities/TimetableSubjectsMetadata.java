package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Table(name="timetable_subjects_metadat_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class TimetableSubjectsMetadata {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne(fetch=FetchType.LAZY)
	private Department dept;
	@OneToOne(fetch=FetchType.LAZY)
	private Subject subject;
	@Column(name="weekly_hrs")
	private int weeklyHrs;
	

}
