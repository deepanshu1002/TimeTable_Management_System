package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.entities.FunctionalityTbl;
import com.app.entities.Users;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddRoleDTO {
	
	private Long roleId;
	private String role;

	private List<Long> functId = new ArrayList<>();


}
