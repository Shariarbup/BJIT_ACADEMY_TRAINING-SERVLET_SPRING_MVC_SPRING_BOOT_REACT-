package com.bjitacademy.main.serviceImpl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.repository.RoleRepository;
import com.bjitacademy.main.repository.UserRepository;
import com.bjitacademy.main.service.UserService;
import com.bjitacademy.main.model.User;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService{
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Optional<User> user = userRepository.findByUsername(username);
		if (user.isEmpty()) {
			log.error("User not found in the database instance.");
			throw new UsernameNotFoundException("User not found in the database instance.");
		} else {
			log.info("User found in the database {}", username);
		}
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		user.get().getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		});
		
		return new org.springframework.security.core.userdetails.User(user.get().getUsername(), user.get().getPassword(),authorities);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		log.info("Saving new user {} to the database", user.getUsername());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

}
