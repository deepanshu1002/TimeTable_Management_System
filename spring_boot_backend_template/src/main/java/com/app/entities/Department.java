package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@ToString(exclude={"lectures","classroom","user","subjects"})
@Getter
@Setter
public class Department {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long deptId;
	private String deptName;
	@OneToMany(fetch=FetchType.EAGER ,mappedBy =  "dept", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Lecture> lectures = new ArrayList<>();
//	@OneToMany(mappedBy = "deptId")
//	private List<Feedback> feedbacks = new ArrayList<Feedback>();
	@OneToMany(mappedBy = "dept",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ClassRoom> classroom = new ArrayList<>();
	@OneToMany(mappedBy = "dept",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Users> user = new ArrayList<>();
	@OneToMany(mappedBy = "dept", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Subject> subjects = new ArrayList<>();
	@OneToMany(mappedBy = "dept", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TimeTableMetadata> metaData = new ArrayList<>();
	public void addLecture(Lecture l) {
		lectures.add(l);
		l.setDept(this);
	}

	public void removeLecture(Lecture l) {
		lectures.remove(l);
		l.setDept(null);
	}
	
	public void addUser(Users u) {
		user.add(u);
		u.setDept(this);
	}

	public void removeUser(Users u) {
		user.remove(u);
		u.setDept(null);
	}
	
	public void addSubject(Subject sub) {
		subjects.add(sub);
		sub.setDept(this);
	}

	public void removeSubject(Subject sub) {
		subjects.remove(sub);
		sub.setDept(null);
	}
	
	public void addClassRoom(ClassRoom classRoom) {
		classroom.add(classRoom);
		classRoom.setDept(this);
	}
	
	public void removeClassRoom(ClassRoom removeClassRoom) {
		classroom.remove(removeClassRoom);
		removeClassRoom.setDept(null);
	}
	
	public void addMetaData(TimeTableMetadata data) {
		metaData.add(data);
		data.setDept(this);
	}
	
	public void removeMetaData(TimeTableMetadata data) {
		metaData.remove(data);
		data.setDept(null);
	}

}
