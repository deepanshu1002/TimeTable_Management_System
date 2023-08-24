package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Subject_tbl")
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"feedbacks","lectures"})
@Getter
@Setter
public class Subject {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long subjectId;
	@Column(unique = true)
	private String subjectName;
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	@ManyToOne
	@JoinColumn(name = "teacher_id")
	private Users teacherId;
	@OneToMany(mappedBy = "subjectId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Feedback> feedbacks=new ArrayList<Feedback>();
	@OneToMany(mappedBy = "sub", cascade = CascadeType.ALL, orphanRemoval = true)
	private List <Lecture> lectures = new ArrayList<>();
	@ManyToOne
	@JoinColumn(name="lab_id")
	private Lab labVenue;
	
	@OneToMany(mappedBy =  "subject", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TimetableSlot> timeTableSlots = new ArrayList<>();
	
	public Subject(Long subjectId, String subjectName, Department dept, Users teacherId) {
		super();
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.dept = dept;
		this.teacherId = teacherId;
	}
	
	public void addFeedback(Feedback feedback) {
		feedbacks.add(feedback);// dept --> emp
		feedback.setSubjectId(this);// emp --> dept
	}
	public void removeFeedback(Feedback feedback) {
		feedbacks.remove(feedback);
		feedback.setSubjectId(null);
	}
	
	public void addLecture(Lecture l) {
		lectures.add(l);// dept --> emp
		l.setSub(this);// emp --> dept
	}

	public void removeLecture(Lecture l) {
		lectures.remove(l);
		l.setSub(null);
	}
	
	public void addTimetableSlot(TimetableSlot slot) {
		timeTableSlots.add(slot);
		slot.setSubject(this);
	}

	public void removeTimetableSlot(TimetableSlot slot) {
		timeTableSlots.remove(slot);
		slot.setSubject(null);
	}
	
}
