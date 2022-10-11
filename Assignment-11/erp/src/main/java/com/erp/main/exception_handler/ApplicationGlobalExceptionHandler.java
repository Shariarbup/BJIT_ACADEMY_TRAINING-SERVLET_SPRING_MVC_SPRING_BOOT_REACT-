package com.erp.main.exception_handler;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

public class ApplicationGlobalExceptionHandler extends RuntimeException{

	

	private static final long serialVersionUID = 1L;

	@ExceptionHandler(Exception.class)
	public ModelAndView handleException(HttpServletRequest request ,Exception ex) {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("exception",ex);
		modelAndView.addObject("url", request.getRequestURL());
		modelAndView.setViewName("error/404");
		return modelAndView;
	}
	
	@ExceptionHandler(value = UserNotFoundException.class)
	public String userNotFound(UserNotFoundException ex) {
		
		return "error/404";
	}
}