package com.app.entities;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.*;



@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class LecturePkId implements Serializable {
	
	
	private int deptId;
	
	private int subId;
	
	private LocalDate date;

}
