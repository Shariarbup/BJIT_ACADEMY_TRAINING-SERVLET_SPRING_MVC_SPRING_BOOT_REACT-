package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.Admin;

public interface AdminService {
	List<Admin> getAllAdmins();

	Admin saveAdmin(Admin admin);

	Map<String, Boolean> deleteAdminById(Long id);

	Optional<Admin> getAdminById(Long id);

	Optional<Admin> getAdminByName(String name);

	Admin updateAdmin(Long id, Admin updatedAdmin);
}
