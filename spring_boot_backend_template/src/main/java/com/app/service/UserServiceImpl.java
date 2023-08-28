package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.DepartmentDTO;
import com.app.dto.SignupRequest;
import com.app.dto.SignupResp;
import com.app.dto.TeacherDTO;
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

	public SignupResp validUser(Long userId, Long roleId) {
		IsValidUser validUser = isValidUser.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid userId"));
		validUser.setRoleId(roleId);
		Department dept = deptRepo.findById(validUser.getDeptId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid dept ID"));
		Role role = roleRepo.findById(validUser.getRoleId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid role id"));
		Users user = mapper.map(validUser, Users.class);
		deleteNotValidUser(userId);
		dept.addUser(user);
		role.addUser(user);

		// Users persistentUser = userRepo.save(user);
		return mapper.map(user, SignupResp.class);
	}

	public AuthResp authenticateUser(AuthRequest request) {

		Users user = userRepo.findByEmailAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("invalid user id"));

		return new AuthResp(user.getUserId(), user.getFirstName(), user.getLastName(), user.getEmail(),
				user.getDept().getDeptId(), user.getRole().getRoleId());

	}

	public String deleteNotValidUser(Long userId) {

		IsValidUser user = isValidUser.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid userId"));

		isValidUser.delete(user);
		return " non valid user Deleted";
	}

	public SignupResp addUserDetails(SignupRequest user) {
		Department dept = deptRepo.findById(user.getDeptId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid dept Id"));
		// System.out.println(dept);
		Users user1 = userRepo.findById(user.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user Id"));
		// Users user1 = mapper.map(user, Users.class);
		mapper.map(user, user1);
		dept.addUser(user1);
		// Users user2 = userRepo.save(user1);
		return mapper.map(user1, SignupResp.class);
	}

	public List<IsValidUser> getAllIsValidUser() {
		return isValidUser.findAll();

	}

	public void updateRoleId(Long userId, Long roleId) {
		IsValidUser user = isValidUser.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("invalid user id"));
		user.setRoleId(roleId);
	}
    
	public List <TeacherDTO> getAllTeachers(Long roleId) {
		Role role = roleRepo.findById(roleId).orElseThrow(()-> new ResourceNotFoundException("invalid role id"));
		List <TeacherDTO> teacherList=new ArrayList<TeacherDTO>();
		List <Users> teachers = userRepo.findByRole(role);
		for(Users teacher: teachers) {
			TeacherDTO teacherDto= mapper.map(teacher, TeacherDTO.class);
			teacherList.add(teacherDto);
		}
		return teacherList;
	}
}
