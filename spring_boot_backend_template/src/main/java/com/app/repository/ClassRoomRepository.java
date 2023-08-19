package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ClassRoom;

public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {
	//get the ClassRoom
//	@Query("SELECT c from classroom_tbl c JOIN FETCH c.department_tbl")
//	List<ClassRoom> retrieveAll();
	//Find the ClassRoom
	//Get the ClassRoom by Id
	//Update the ClassRoom
	
}
