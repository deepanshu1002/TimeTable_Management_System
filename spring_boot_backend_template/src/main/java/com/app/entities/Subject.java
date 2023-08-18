package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
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
@ToString
@Getter
@Setter
public class Subject {

	@Id
	private Long subjectId;
	private Long deptId;
	private String subjectName;
	@ManyToOne
	@JoinColumn(name = "teacher_id")
	private Users teacherId;
	@OneToMany(mappedBy = "subjectId")
	private List<Feedback> feedbacks=new ArrayList<Feedback>();
	@OneToMany(mappedBy = "sub", cascade = CascadeType.ALL, orphanRemoval = true)
	private List <Lecture> lectures = new ArrayList<>();
	
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
}
