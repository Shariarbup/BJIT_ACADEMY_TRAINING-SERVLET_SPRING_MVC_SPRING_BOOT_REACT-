package com.security.springsecuritypractice.service;

import com.security.springsecuritypractice.entity.User;
import com.security.springsecuritypractice.payload.LoginUser;
import com.security.springsecuritypractice.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
//@Service  ---> eita korbo jokhon amra java based configuration korbo na tokhon
public class LoginUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        System.out.println(user.get());
        User u = user.orElseThrow(()-> new UsernameNotFoundException("User not found"));
        return new LoginUser(u);
    }
}
