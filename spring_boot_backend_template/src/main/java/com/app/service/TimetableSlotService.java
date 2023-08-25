package com.app.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.entities.TimetableSlot;

public interface TimetableSlotService {

	public Object addNewTimetableSlot(AddTimetableSlotDTO dto) ;

	public TimetableSlotRespoDTO getTimetableSlotDetailsById(Long timetableSlotId);

	public List<TimetableSlotRespoDTO> getLectureDetails(LocalDate date1, Long deptId);
}
