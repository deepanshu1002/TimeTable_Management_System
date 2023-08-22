package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "labs_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Lab {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long labId;
	@Column(name = "lab_venue", length = 100)
	private String labVenue;
	@OneToMany(mappedBy = "labVenue")
	private List<Subject> subject = new ArrayList<Subject>();

		public void addSubject(Subject s) {
		subject.add(s);
		s.setLabVenue(this);
	}

	public void removeSubject(Subject s) {
		subject.remove(s);
		s.setLabVenue(null);
	}

}
