package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;

import com.app.entities.Status;
import com.app.entities.Users;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AddLeaveApplicationDTO {
	
	private Long userId;
	private Long leaveApplicationId;
	private LocalDate fromDate;
	private LocalDate toDate;
	private Status status;
	private String reason;

}
