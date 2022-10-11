package com.erp.main.controller;

import javax.validation.Valid;

import org.aspectj.weaver.NewConstructorTypeMunger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.erp.main.entity.User;
import com.erp.main.service.UserService;

@Controller
@RequestMapping("/registration")
public class UserRegistrationController {
	private UserService userService;

	public UserRegistrationController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@GetMapping
	public String showRegistrationForm(Model m) {
		User user = new User();
		m.addAttribute("user", user);
		return "registration";
	}
	
	@PostMapping
	public String registerUserAccount(@Valid @ModelAttribute("user") User user,BindingResult result) {
		if (result.hasErrors()) {
			System.out.println("Error"+ result.toString());
			//m.addAttribute("user",user);
			return "registration";
		}
		userService.saveUser(user);
//		return "redirect:/registration?success";
		return "redirect:/users";
	}
}
