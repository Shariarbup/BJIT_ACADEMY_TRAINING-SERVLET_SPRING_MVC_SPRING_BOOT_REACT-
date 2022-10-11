package com.bjitacademy.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Admin;
import com.bjitacademy.main.model.User;

public interface AdminRepository extends JpaRepository<Admin, Long>{

	Optional<Admin> findByUser(Optional<User> user);
	
}
