	package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
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
	@ToString(exclude = "deptId")
public class ClassroomTbl {
	@Id
	private int classroomId;
	private String classroomName;
	private int deptId;
}
