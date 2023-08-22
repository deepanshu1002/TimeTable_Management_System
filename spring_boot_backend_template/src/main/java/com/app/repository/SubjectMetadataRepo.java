package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.TimetableSubjectsMetadata;

public interface SubjectMetadataRepo extends JpaRepository<TimetableSubjectsMetadata, Long>{

}
