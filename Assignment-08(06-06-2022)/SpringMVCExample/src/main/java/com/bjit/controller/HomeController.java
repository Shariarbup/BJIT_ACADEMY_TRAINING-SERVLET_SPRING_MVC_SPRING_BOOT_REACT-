package com.bjit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bjit.exception_handler.ViewNotFoundException;

import org.springframework.ui.Model;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String index()throws ViewNotFoundException {
		return "index";
	}
	@RequestMapping("/home")
	public String home(Model model)throws ViewNotFoundException {
			String message = "This is the Home of Spring";
			model.addAttribute("message", message);
			return "home";
	}
	@RequestMapping("/welcome")
	public String welcome(Model model)throws ViewNotFoundException {
		String message = "Welcome to the Spring World";
		model.addAttribute("message", message);
		return "welcome";
	}
}
