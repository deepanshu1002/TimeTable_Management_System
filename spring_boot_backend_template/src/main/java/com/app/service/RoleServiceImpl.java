package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.apache.catalina.User;
import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.AddRoleDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.FunctionalityTbl;
import com.app.entities.Lecture;
import com.app.entities.Role;
import com.app.repository.FunctionalityRepository;
import com.app.repository.RoleRepository;
import com.app.repository.UserRepository;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepository roleRepo;
	
	@Autowired
	private FunctionalityRepository functionalityRepo;
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponseDto addNewRole(AddRoleDTO roleDto) {
		
		
		List<Long> functions = roleDto.getFunctId();
		
		Role role = mapper.map(roleDto, Role.class);
		
		for(long funId : functions) {
			FunctionalityTbl function = functionalityRepo.findById(funId).orElseThrow();
			System.out.println(function);
			function.getRoles().add(role);
		}
		
		
		roleRepo.save(role);
		return new ApiResponseDto("role added successfully");
	}

}
