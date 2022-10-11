package com.bjitacademy.main.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.bjitacademy.main.filter.CustomAuthenticationFilter;
import com.bjitacademy.main.filter.CustomAuthorizationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true) // eita use korbo jokhon amra bivinno controller er method er upor hasRole tag ta use korbo
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
	
		http.cors().configurationSource(corsConfigurationSource());
		
		http.csrf().disable();
		
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.authorizeRequests().antMatchers("/login").permitAll();
		
		http.authorizeRequests().antMatchers(HttpMethod.GET,"/api/v1/**").hasAnyAuthority("ROLE_ADMIN","ROLE_TRAINER","ROLE_TRAINEE");
		
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/v1/**").hasAnyAuthority("ROLE_ADMIN","ROLE_TRAINER","ROLE_TRAINEE");
		http.authorizeRequests().antMatchers(HttpMethod.PUT,"/api/v1/assignmentMarks/**").hasAnyAuthority("ROLE_ADMIN","ROLE_TRAINER","ROLE_TRAINEE");
		http.authorizeRequests().antMatchers(HttpMethod.POST,"/api/v1/assignmentMarks").hasAnyAuthority("ROLE_ADMIN","ROLE_TRAINER","ROLE_TRAINEE");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE,"/api/v1/**").hasAuthority("ROLE_ADMIN");
		
		http.authorizeRequests().anyRequest().authenticated();
		
		http.addFilter(new CustomAuthenticationFilter(authenticationManagerBean()));
		
		http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
	}
	
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	} 
	
	//Role-- High level overview -> Normal:Read
	//Authority - permission -> Read
	//ADMIN - READ, WRITE, UPDATE

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean()throws Exception {
		return super.authenticationManager();
	}
	
	@Bean
    CorsConfigurationSource corsConfigurationSource() {
		final CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"));
        config.setAllowCredentials(true);
        config.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

}

