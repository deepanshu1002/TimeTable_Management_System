package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FunctionalityTbl;

public interface FunctionalityRepository extends JpaRepository<FunctionalityTbl, Long> {

}
