package com.app.dto;

import java.time.LocalDate;

import ch.qos.logback.core.status.Status;
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
	
	
	private Long leaveApplicationId;
	private Long userId;
    private String userName;
	private LocalDate fromDate;
	private LocalDate toDate;
	private String reason;
	private String status;
}
