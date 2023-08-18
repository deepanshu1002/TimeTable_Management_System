package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.SignupRequest;
import com.app.dto.SignupResp;
import com.app.entities.Department;
import com.app.entities.Role;
import com.app.entities.Users;
import com.app.repository.DepartmentRepository;
import com.app.repository.RoleRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private DepartmentRepository deptRepo;
	@Autowired
	private RoleRepository roleRepo;

	public SignupResp signupUser(SignupRequest request) {
		Department dept = deptRepo.findById(request.getDeptId()).orElseThrow(null);
		Role role = roleRepo.findById(request.getRoleId()).orElseThrow(null);
		Users user = mapper.map(request, Users.class);
		dept.addUser(user);
		role.addUser(user);
		Users user2 = userRepo.save(user);
		return mapper.map(user2, SignupResp.class);
	}

	public AuthResp authenticateUser(AuthRequest request) {
		Users user = userRepo.findByEmailAndPassword(request.getEmail(), request.getPassword()).orElseThrow();
		return mapper.map(user, AuthResp.class);
	}

}
