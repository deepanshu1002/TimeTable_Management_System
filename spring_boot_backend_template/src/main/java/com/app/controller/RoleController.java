package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddRoleDTO;
import com.app.entities.FunctionalityTbl;
import com.app.entities.Role;
import com.app.service.FunctionalityService;
import com.app.service.RoleService;

@RestController
@RequestMapping("/role")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	@PostMapping
	public ResponseEntity<?> addRole(@RequestBody AddRoleDTO role) {
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(roleService.addNewRole(role));
	}
}
