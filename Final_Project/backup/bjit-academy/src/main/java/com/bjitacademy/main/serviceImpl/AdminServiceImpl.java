package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.exception.ResourceNotFoundException;
import com.bjitacademy.main.model.Admin;
import com.bjitacademy.main.model.Role;
import com.bjitacademy.main.model.User;
import com.bjitacademy.main.repository.AdminRepository;
import com.bjitacademy.main.repository.BatchRepository;
import com.bjitacademy.main.repository.RoleRepository;
import com.bjitacademy.main.repository.UserRepository;
import com.bjitacademy.main.service.AdminService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private BatchRepository batchRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public List<Admin> getAllAdmins() {

		return adminRepository.findAll();
	}

	@Override
	public Admin saveAdmin(Admin admin) {
		log.info("Saving new Admin {} to the database", admin.getFirstName());
		Optional<Role> role = roleRepository.findByName("ROLE_ADMIN");
		String username = admin.getUser().getUsername();
		Optional<User> user = userRepository.findByUsername(username);
		if (user.isEmpty()) {
			admin.getUser().setRoles(List.of(role.get()));
			admin.getUser().setPassword(passwordEncoder.encode(admin.getUser().getPassword()));
			return adminRepository.save(admin);
		} 
		return admin;
	}

	@Override
	public Map<String, Boolean> deleteAdminById(Long adminId) {
		adminRepository.deleteById(adminId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public Admin updateAdmin(Long adminId, Admin updatedAdmin) {
		// getting updated trainee username
		String username = updatedAdmin.getUser().getUsername();
		Optional<User> user = userRepository.findByUsername(username);
		Admin admin = adminRepository.findById(adminId)
				.orElseThrow(() -> new ResourceNotFoundException("Admin Info not found"));
		if (!user.isEmpty()) {
//			user.get().setPassword(passwordEncoder.encode(updatedAdmin.getUser().getPassword()));
			user.get().setUsername(updatedAdmin.getUser().getUsername());
			admin.setFirstName(updatedAdmin.getFirstName());
			admin.setLastName(updatedAdmin.getLastName());
			admin.setAddress(updatedAdmin.getAddress());
			admin.setEmail(updatedAdmin.getEmail());
			admin.setMobile(updatedAdmin.getMobile());
			admin.setDesignation(updatedAdmin.getDesignation());
			admin.setUser(user.get());
		}
		return adminRepository.save(admin);

	}

	@Override
	public Optional<Admin> getAdminById(Long adminId) {
		// TODO Auto-generated method stub
		return adminRepository.findById(adminId);
	}

	@Override
	public Optional<Admin> getAdminByName(String name) {
		// TODO Auto-generated method stub
		Optional<User> user = userRepository.findByUsername(name);
		Optional<Admin> admin = adminRepository.findByUser(user);
		return admin;
	}
}
