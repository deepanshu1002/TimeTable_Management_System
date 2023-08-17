package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="users_tbl")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = {"roleId","password"})
public class Users
{
	@Id
	private Long userId;
	@Column(length = 30, nullable = false)
	private String firstName;
	@Column(length = 30, nullable = false)
	private String lastName;
	@Column(length = 30,unique = true, nullable = false)
	private String email;
	@Column(length = 30, nullable = false)
	private String mobileNo;
	@Column(nullable = false)
	private String password;
	
	private int roleId;
	//private byte[] profilePic;
	
}