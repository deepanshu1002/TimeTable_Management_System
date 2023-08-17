package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Leave_Application_tbl")
@IdClass(LeaveApplicationPkId.class)
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class LeaveApplication {
	@Id
	private int teacherId;
	@Id
	private LocalDate fromDate;
	private LocalDate toDate;
	private Boolean status;
	private String reason;
	
}
