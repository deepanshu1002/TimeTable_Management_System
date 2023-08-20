package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "roles_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "users")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long roleId;
	private String role;
	@OneToMany(mappedBy = "role")
	private List<Users> users = new ArrayList<>();
	// check the roles table if available

	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name = "role_functionalities", joinColumns = @JoinColumn(name = "role_id"), inverseJoinColumns = @JoinColumn(name = "functionality_id"))
	private List<FunctionalityTbl> functionalities = new ArrayList<>();

	public void addUser(Users u) {
		users.add(u);
		u.setRole(this);
	}

	public void removeUser(Users u) {
		users.remove(u);
		u.setRole(null);
	}

	public void addFunctionality(FunctionalityTbl f) {
		functionalities.add(f);
		f.getRoles().add(this);
	}

	public void removeFunctionality(FunctionalityTbl f) {
		functionalities.remove(f);
		f.getRoles().add(this);
	}

}
