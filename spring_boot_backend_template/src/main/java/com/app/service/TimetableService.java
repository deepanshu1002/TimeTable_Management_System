package com.app.service;

import java.time.LocalDate;

import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.ApiResponseDto;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.entities.TimetableSlot;

public interface TimetableService {
	ApiResponseDto genTimeTable(Long deptId,LocalDate date);
	
}
