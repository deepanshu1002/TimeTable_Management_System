package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Department_tbl")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Department {
	@Id
	private Long deptId;
	private String deptName;
	@OneToMany(mappedBy = "dept", cascade = CascadeType.ALL, orphanRemoval = true)
	private List <Lecture> lectures = new ArrayList<>();
	@OneToMany(mappedBy = "deptId")
	private List<Feedback> feedbacks=new ArrayList<Feedback>();
	@OneToMany
	private List <ClassroomTbl> classroom = new ArrayList<>();
}
