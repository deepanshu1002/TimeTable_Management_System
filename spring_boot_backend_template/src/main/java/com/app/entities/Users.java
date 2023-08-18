package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	
	public void addFeedback(Feedback feedback) {
		feedbacks.add(feedback);// dept --> emp
		feedback.setStudentId(this);// emp --> dept
	}
	public void removeFeedback(Feedback feedback) {
		feedbacks.remove(feedback);
		feedback.setStudentId(null);
	}
}