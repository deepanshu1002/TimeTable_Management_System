package com.app.service;

import com.app.dto.AddTimetableSlotDTO;
import com.app.dto.TimetableSlotRespoDTO;
import com.app.entities.TimetableSlot;

public interface TimetableSlotService {

	public Object addNewTimetableSlot(AddTimetableSlotDTO dto) ;

	public TimetableSlotRespoDTO getTimetableSlotDetailsById(Long timetableSlotId);
}
