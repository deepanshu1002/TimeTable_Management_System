	package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
	@Entity
	@Table(name = "classroom_tbl")
	@NoArgsConstructor
	@AllArgsConstructor
	@Getter
	@Setter
	@ToString(exclude = "dept")
public class ClassRoom {
	@Id
	private int classroomId;
	private String classroomName;
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	
}
