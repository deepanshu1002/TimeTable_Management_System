package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.SignupRequest;
import com.app.dto.SignupResp;
import com.app.entities.Department;
import com.app.entities.IsValidUser;
import com.app.entities.Role;
import com.app.entities.Users;
import com.app.repository.DepartmentRepository;
import com.app.repository.IsValidUserRepo;
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
	@Autowired
	private IsValidUserRepo isValidUser;

	public SignupResp registerUser(SignupRequest request) {
		IsValidUser user = mapper.map(request, IsValidUser.class);
		IsValidUser user2 = isValidUser.save(user);
		return mapper.map(user2, SignupResp.class);
	}

	public SignupResp validUser(Long userId) {
		IsValidUser validUser = isValidUser.findById(userId).orElseThrow(null);
		Department dept = deptRepo.findById(validUser.getDeptId()).orElseThrow(null);
		Role role = roleRepo.findById(validUser.getRoleId()).orElseThrow(null);
		Users user = mapper.map(validUser, Users.class);
		deleteNotValidUser(userId);
		dept.addUser(user);
		role.addUser(user);
		
	//	Users persistentUser = userRepo.save(user);
		return mapper.map(user, SignupResp.class);
	}

	public AuthResp authenticateUser(AuthRequest request) {
		Users user = userRepo.findByEmailAndPassword(request.getEmail(), request.getPassword()).orElseThrow();
		return mapper.map(user, AuthResp.class);
	}

	public String deleteNotValidUser(Long userId) {

		IsValidUser user = isValidUser.findById(userId).orElseThrow(null);

		isValidUser.delete(user);
		return " non valid user Deleted";
	}

	public SignupResp addUserDetails(SignupRequest user) {
		Department dept = deptRepo.findById(user.getDeptId()).orElseThrow(null);
		//System.out.println(dept);
		Users user1=userRepo.findById(user.getUserId()).orElseThrow(null);
		//Users user1 = mapper.map(user, Users.class);
		 mapper.map(user, user1);
		dept.addUser(user1);
		System.out.println("after adding users");
		//Users user2 = userRepo.save(user1);
		return mapper.map(user1, SignupResp.class);
	}
	public List<IsValidUser> getAllIsValidUser() {
		return isValidUser.findAll();

	}

}
