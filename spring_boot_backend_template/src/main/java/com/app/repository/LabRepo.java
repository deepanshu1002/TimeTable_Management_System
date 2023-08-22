package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Lab;

public interface LabRepo extends JpaRepository<Lab, Long>{
	List<Lab> findByDeptDeptId(Long id);
}
