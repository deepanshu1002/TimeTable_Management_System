package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.LeaveApplication;

public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication, Long> {
	//Find the Leave Application
}
