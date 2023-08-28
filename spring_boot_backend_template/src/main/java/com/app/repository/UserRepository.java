package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;
import com.app.entities.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
	Optional<Users> findByEmailAndPassword(String em, String pass);

	List<Users> findByRole(Role role);

	Optional<Users> findByEmail(String email);

}
