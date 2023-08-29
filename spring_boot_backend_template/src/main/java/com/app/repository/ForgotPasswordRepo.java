package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ForgotPasswordCode;

public interface ForgotPasswordRepo  extends JpaRepository<ForgotPasswordCode, Long>{


	ForgotPasswordCode findByEmail(String email);
	

}
