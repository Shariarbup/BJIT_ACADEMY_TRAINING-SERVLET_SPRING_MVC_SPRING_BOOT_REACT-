package com.bjitacademy.main.repository;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.auth0.jwt.impl.PublicClaims;
import com.bjitacademy.main.model.Admin;
import com.bjitacademy.main.model.Role;
import com.bjitacademy.main.model.User;

@SpringBootTest
public class UserRepositoryTest {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	public UserRepositoryTest() {
		this.passwordEncoder = new BCryptPasswordEncoder();
	}
	
	@Test
	public void saveAdminWithUserAndRole() {
		User user = User.builder()
				.username("16511058")
				.password(passwordEncoder.encode("123456"))
				.build();
		Admin admin= Admin.builder()
				.firstName("Mohammad")
				.lastName("Saleehin")
				.designation("Senior Project Manager")
				.address("Mirpur 10")
				.email("Saleehin@Gmail.com")
				.mobile("019688385155")
				.user(user)
				.build();
		adminRepository.save(admin);
	}
	
	@Test
	public void saveRole() {
		Role role =Role.builder()
				.name("ROLE_ADMIN")
				.build();
		roleRepository.save(role);
	}
}
