package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users_tbl")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "password","feedbacks","leaves","subjects" })

public class Users {
	@Id
	private Long userId;
	@Column(length = 30, nullable = false)
	private String firstName;
	@Column(length = 30, nullable = false)
	private String lastName;
	@Column(length = 30, unique = true, nullable = false)
	private String email;
	@Column(length = 30, nullable = false)
	private String mobileNo;
	@Column(nullable = false)
	private String password;
	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;
	@OneToMany(mappedBy = "studentId")
	private List<Feedback> feedbacks=new ArrayList<Feedback>();

	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	
	@OneToMany(mappedBy = "user")
	private List<LeaveApplication> leaves = new ArrayList<LeaveApplication>();

	// private byte[] profilePic;
	@OneToMany(mappedBy = "teacherId")
	private List<Subject> subjects = new ArrayList<Subject>();
	
	@OneToMany(mappedBy =  "teacher", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TimetableSlot> timeTableSlots = new ArrayList<>();
	
	public void addFeedback(Feedback feedback) {
		feedbacks.add(feedback);// dept --> emp
		feedback.setStudentId(this);// emp --> dept
	}
	public void removeFeedback(Feedback feedback) {
		feedbacks.remove(feedback);
		feedback.setStudentId(null);
	}
	
	public void addLeaveApplication(LeaveApplication l) {
		leaves.add(l);
		l.setUser(this);
	}
	
	public void removeLeaveApplication(LeaveApplication l) {
		leaves.remove(l);
		l.setUser(this);
	}
	
	public void addSubject(Subject sub) {
		subjects.add(sub);// dept --> emp
		sub.setTeacherId(this);// emp --> dept
	}

	public void removeSubject(Subject sub) {
		subjects.remove(sub);
		sub.setTeacherId(null);
	}
	
	public void addTimetableSlot(TimetableSlot slot) {
		timeTableSlots.add(slot);
		slot.setTeacher(this);
	}

	public void removeTimetableSlot(TimetableSlot slot) {
		timeTableSlots.remove(slot);
		slot.setTeacher(null);
	}
	
	public Users(Long userId, String firstName, String lastName, String email, String mobileNo, String password) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
	}
	
}