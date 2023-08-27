package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponseDto;
import com.app.dto.AuthRequest;
import com.app.dto.SignupRequest;
import com.app.dto.UserDTO;
import com.app.entities.IsValidUser;
import com.app.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody @Valid SignupRequest request) {
		return ResponseEntity.ok(userService.registerUser(request));
	}

	@PostMapping("/signIn")
	public ResponseEntity<?> authenticateUser(@RequestBody @Valid AuthRequest request) {
		return new ResponseEntity<>(userService.authenticateUser(request), HttpStatus.OK);
	}

	@DeleteMapping("/deleteuser/{userId}")
	public String deleteNotValidUser(@PathVariable Long userId) {
		return userService.deleteNotValidUser(userId);
	}

	@GetMapping("/validuser/{userId}/{roleId}") 
	public ResponseEntity<?> validUser(@PathVariable Long userId,@PathVariable Long roleId) {
		System.out.println("yoyo");
		return ResponseEntity.ok(userService.validUser(userId,roleId));
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateUserDetails(@RequestBody @Valid SignupRequest user) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUserDetails(user));
	}

	@GetMapping("/validuser")
	public List<IsValidUser> getAllIsValidUsers() {
		return userService.getAllIsValidUser();
	}
	@PutMapping("/updateroleid/{userId}/{roleId}")
	public void updateRoleID(@ PathVariable Long userId,@PathVariable Long roleId)
	{
		userService.updateRoleId(userId,roleId);
	}
	@PutMapping("/editUser")
	public ResponseEntity<ApiResponseDto> editUserDetails(@RequestBody @Valid UserDTO userDTO) 
	{
		System.out.println(userDTO);
        ApiResponseDto response = userService.editUserDetails(userDTO);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
	
	@GetMapping("editUser/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable Long userId) {
		
		UserDTO user= userService.getUserById(userId);
		
		return ResponseEntity.ok(user);
	}

}
