package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class LeaveApplicationDTO {
	
	private Long userId;
	private String userName;
	private Long leaveApplicationId;
	private LocalDate fromDate;
	private LocalDate toDate;
	private String status;
	private String reason;
	
}
