package com.erp.main.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.erp.main.entity.Role;
import com.erp.main.entity.User;

public interface UserService extends UserDetailsService{
	
	List<User> getAllUsers();
	
	User saveUser(User user);
	
	User getUserById(Long id);
	
	User updateUser(User user);
	
	void deleteUserById(Long id);
	
	User getUserByUserEmail(String email);
	
}
