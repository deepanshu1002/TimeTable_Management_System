package com.app.dto;

import com.app.entities.Department;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuthResp {
	private Long userId;
	private String firstName;
	private String lastName;
	private String email;
	private String mobileNo;
	private String password;
	private Long deptId;
	private Long roleId;
	
	public AuthResp(Long userId, String firstName, String lastName, String email, Long deptId, Long roleId) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.deptId = deptId;
		this.roleId = roleId;
	}
	
	
	
}
