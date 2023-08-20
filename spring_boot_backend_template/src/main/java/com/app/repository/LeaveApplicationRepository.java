package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.LeaveApplication;

public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication, Long> {
	//get the leave Application
	//Find the Leave Application
	//Get the leave Application by Id
	//Update the leave Application
	
	//get pending Leave Appliation
	@Query("SELECT l from LeaveApplication l WHERE l.status = 'PENDING'")
	List<LeaveApplication> retrieveAll();
}
