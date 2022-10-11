package com.bjitacademy.main.service;

import java.util.List;

import com.bjitacademy.main.model.User;

public interface UserService {
	List<User> getAllUsers();
	User saveUser(User user);
}
