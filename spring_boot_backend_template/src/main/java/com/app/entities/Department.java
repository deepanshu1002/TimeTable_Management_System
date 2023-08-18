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
	private List<Lecture> lectures = new ArrayList<>();
//	@OneToMany(mappedBy = "deptId")
//	private List<Feedback> feedbacks = new ArrayList<Feedback>();
	@OneToMany(mappedBy = "dept")
	private List<ClassroomTbl> classroom = new ArrayList<>();
	@OneToMany(mappedBy = "dept")
	private List<Users> user = new ArrayList<>();

	public void addLecture(Lecture l) {
		lectures.add(l);// dept --> emp
		l.setDept(this);// emp --> dept
	}

	public void removeLecture(Lecture l) {
		lectures.remove(l);
		l.setDept(null);
	}
	
	public void addUser(Users u) {
		user.add(u);// dept --> emp
		u.setDept(this);// emp --> dept
	}

	public void removeUser(Users u) {
		user.remove(u);
		u.setDept(null);
	}

}
