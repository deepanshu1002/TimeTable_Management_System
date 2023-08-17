package com.app.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid SignupRequest request)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(empService.signupEmp(request));
	}
	
	
	
	

}
