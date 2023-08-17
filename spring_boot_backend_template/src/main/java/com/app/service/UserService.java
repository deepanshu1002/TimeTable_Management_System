package com.app.service;

import com.app.dto.SignupRequest;
import com.app.dto.SignupResp;

public interface UserService {
	public SignupResp signupUser(SignupRequest request);

}
