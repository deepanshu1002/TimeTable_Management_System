package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.IsValidUser;

public interface IsValidUserRepo extends JpaRepository<IsValidUser,Long>{

}
