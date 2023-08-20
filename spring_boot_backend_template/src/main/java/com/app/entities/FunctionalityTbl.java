package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Table(name = "functionality_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FunctionalityTbl {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long functionId;
	private String functions;

	@ManyToMany(mappedBy = "functionalities")
	private List<Role> roles =new ArrayList<>(); 
	
	public void addFunctionality(Role r)
	  {
		  roles.add(r);
		  r.getFunctionalities().add(this);
	  }
	  public void removeFunctionality(Role r)
	  {
		  roles.remove(r);
		  r.getFunctionalities().remove(this);
	  }
}
