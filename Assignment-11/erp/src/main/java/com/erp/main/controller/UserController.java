package com.erp.main.controller;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.erp.main.entity.Role;
import com.erp.main.entity.User;
import com.erp.main.service.RoleService;
import com.erp.main.service.UserService;

@Controller
public class UserController {
	private UserService userService;

	@Autowired
	private RoleService roleService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@GetMapping("/users")
	public String userList(Model m) {
		m.addAttribute("users", userService.getAllUsers());
		return "users";
	}

	@GetMapping("/users/new")
	public String createUserForm(Model m) {
		User user = new User();
		m.addAttribute("user", user);
		return "create_user";
	}

	@PostMapping("/users/add")
	public String saveUser(@ModelAttribute("user") User user) {
		userService.saveUser(user);
		return "redirect:/users";
	}

	@GetMapping("/users/edit/{id}")
	public String editUserForm(@PathVariable Long id, Model m) {
		Collection<Role> roles = roleService.getRoles();
		m.addAttribute("user", userService.getUserById(id));
		m.addAttribute("roles", roles);
		return "edit_user";
	}

	@PostMapping("/users/update/{id}")
	public String updateUser(@PathVariable Long id, @ModelAttribute("user") User user, Model m, String roleId) {
		Role role = roleService.getRoleById(Long.parseLong(roleId));
		System.out.println(role);
		Collection<Role> roles = new HashSet<Role>();
		roles.add(role);
		user.setRoles(roles);
		// Getting user by id
		User existingUser = userService.getUserById(id);
		existingUser.setId(id);
		existingUser.setFirstName(user.getFirstName());
		existingUser.setLastName(user.getLastName());
		existingUser.setEmail(user.getEmail());
//		existingUser.setPassword(user.getPassword());
		existingUser.setAddress(user.getAddress());
		existingUser.setJoiningDate(user.getJoiningDate());
		existingUser.setRoles(user.getRoles());

		// Update the existing user
		userService.updateUser(existingUser);
		return "redirect:/users";
	}

	// handler method to handle user request
	@GetMapping("/users/delete/{id}")
	public String deleteUser(@PathVariable Long id) {
		userService.deleteUserById(id);
		return "redirect:/users";
	}

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/")
	public String home() {
		return "redirect:/users";
	}
	
	@GetMapping("/profile")
	public String profile(Model model) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = userService.getUserByUserEmail(auth.getName());
		model.addAttribute("user", user);
		return "profile";
	}
	
	@PostMapping("/user/update/profile")
	public String updateProfile(@Valid @ModelAttribute("user") User user, String roleId, BindingResult result) {

		System.out.println("role id " + roleId + "");

		if (result.hasErrors()) {
			return "profile";
		}

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User loggedUser = userService.getUserByUserEmail(auth.getName());
		

		user.setId(user.getId());
		user.setPassword(user.getPassword());
		user.setRoles(loggedUser.getRoles());
		userService.updateUser(user);
		return "redirect:/profile";

	}

}
