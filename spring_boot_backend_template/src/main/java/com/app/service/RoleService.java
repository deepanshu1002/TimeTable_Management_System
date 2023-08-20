package com.app.service;

import com.app.dto.AddRoleDTO;
import com.app.dto.ApiResponseDto;
import com.app.entities.Role;

public interface RoleService {

	public ApiResponseDto addNewRole(AddRoleDTO role) ;
}
