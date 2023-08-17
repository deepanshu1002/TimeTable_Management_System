package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.dto.SignupRequest;
import com.app.dto.SignupResp;
import com.app.entities.Users;
import com.app.repository.UserRepository;

public class UserServiceImpl {
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserRepository userRepo;
	public SignupResp signupUser(SignupRequest request)
	{
		Users user = mapper.map(request,Users.class);
				Users user2 = userRepo.save(user);
				return mapper.map(user2,SignupResp.class);
	}

}
