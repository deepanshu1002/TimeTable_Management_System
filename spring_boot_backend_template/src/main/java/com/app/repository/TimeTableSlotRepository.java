package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entities.TimetableSlot;

public interface TimeTableSlotRepository extends JpaRepository<TimetableSlot, Long> {

	
}
