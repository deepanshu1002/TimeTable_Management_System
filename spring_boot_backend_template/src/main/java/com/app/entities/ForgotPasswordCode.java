package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "forgot_password_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ForgotPasswordCode {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long Id;
	
	@Column(length = 60, unique = true, nullable = false)
	private String email;

	  private int code;

	public ForgotPasswordCode(String email, int code) {
		super();
		this.email = email;
		this.code = code;
	}
	  
	  
}
