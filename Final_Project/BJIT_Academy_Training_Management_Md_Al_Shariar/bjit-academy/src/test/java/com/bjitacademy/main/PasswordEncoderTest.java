package com.bjitacademy.main;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordEncoderTest {
	
	private PasswordEncoder passwordEncoder;
	
	public PasswordEncoderTest() {
		this.passwordEncoder = new BCryptPasswordEncoder();
	}
	
	@Test
	public void ecode_password() {
		System.out.println(passwordEncoder.encode("123456"));
	}
}
