package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.SignupRequest;
import com.app.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService userService;
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid SignupRequest request)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.signupUser(request));
	}
	@PostMapping("/signIn")
	public ResponseEntity<?> authenticateUser(@RequestBody @Valid AuthRequest request)
	{
		return new ResponseEntity<>(userService.authenticateUser(request),HttpStatus.OK);	
	}
	
	
	
	

}
