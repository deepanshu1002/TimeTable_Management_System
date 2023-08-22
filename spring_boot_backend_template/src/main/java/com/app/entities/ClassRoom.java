	package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
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
	@Table(name = "classroom_tbl")
	@NoArgsConstructor
	@AllArgsConstructor
	@Getter
	@Setter
	@ToString(exclude = "dept")
public class ClassRoom {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long classroomId;
	private String classroomName;
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	
	
	@OneToMany(mappedBy =  "classroom", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TimetableSlot> timeTableSlots = new ArrayList<>();
	
	public void addTimetableSlot(TimetableSlot slot) {
		timeTableSlots.add(slot);
		slot.setClassroom(this);
	}

	public void removeTimetableSlot(TimetableSlot slot) {
		timeTableSlots.remove(slot);
		slot.setClassroom(null);
	}
}
