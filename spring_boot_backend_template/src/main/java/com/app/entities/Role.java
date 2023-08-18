package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
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
  private Long roleId;
  private String role;
  @OneToMany(mappedBy = "role")
  private List<Users> users = new ArrayList<>();
  //check the roles table if available
  public void addUser(Users u)
  {
	 users.add(u);
	 u.setRole(this);
  }
  public void removeUser(Users u)
  {
	  users.remove(u);
	  u.setRole(null);
  }

}
