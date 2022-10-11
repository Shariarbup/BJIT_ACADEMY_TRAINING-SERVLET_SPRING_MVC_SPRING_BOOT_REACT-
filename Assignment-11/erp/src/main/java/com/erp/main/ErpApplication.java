package com.erp.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.erp.main.entity.User;
import com.erp.main.repository.UserRepository;

@SpringBootApplication
public class ErpApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ErpApplication.class, args);
	}
	
	@Autowired
	private UserRepository userRepository;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		User users = User.builder()
//				.firstName("Al")
//				.lastName("Shariar")
//				.address("Mirpur 10")
//				.email("abc@gmail.com")
//				.password("123shariar456")
//				.joiningDate("07/11/1997")
//				.build();
//		userRepository.save(users);
	}

}
