package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "isvaliduser_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class IsValidUser {
	@Id
	  private Long userId;
	@Column(length = 30, nullable = false)
	  private String firstName;
	@Column(length = 30, nullable = false)
	  private String lastName;
	@Column(length = 30, unique = true, nullable = false)
	  private String email;
	@Column(length = 30, nullable = false)
	  private String mobileNo;
	@Column(nullable = false) 
	  private String password;
	  private Long roleId;
	  private Long deptId;
	  
	  @PrePersist
		public void setDefaultRoleId() {
			if(roleId == null) {
				roleId = 3L;
			}
		}
}
