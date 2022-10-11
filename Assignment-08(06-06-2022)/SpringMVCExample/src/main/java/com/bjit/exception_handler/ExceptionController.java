package com.bjit.exception_handler;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionController extends RuntimeException{
	
	@ExceptionHandler(value = ViewNotFoundException.class)
	public String exception(ViewNotFoundException ex) {
		return "error";
	}
}
