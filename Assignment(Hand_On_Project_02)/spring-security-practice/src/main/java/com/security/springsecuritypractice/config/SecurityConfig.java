package com.security.springsecuritypractice.config;

import com.security.springsecuritypractice.service.LoginUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityConfig {
//    @Bean
//    public UserDetailsService userDetailsService(){
//        InMemoryUserDetailsManager userDetails = new InMemoryUserDetailsManager();
//        UserDetails user = User.withUsername("shariar").password("123456").authorities("read").build();
//        userDetails.createUser(user);
//        return userDetails;
//    }

    @Bean
    public UserDetailsService userDetailsService(){
        return new LoginUserDetailsService();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
