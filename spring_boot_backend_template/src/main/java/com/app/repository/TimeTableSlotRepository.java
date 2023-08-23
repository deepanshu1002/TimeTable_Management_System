package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entities.TimetableSlot;

public interface TimeTableSlotRepository extends JpaRepository<TimetableSlot, Long> {

	List<TimetableSlot> findByDate(LocalDate date1);

	
}
