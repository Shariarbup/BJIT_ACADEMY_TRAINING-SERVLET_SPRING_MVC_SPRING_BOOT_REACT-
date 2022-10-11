package com.bjit.engine;

import org.springframework.aop.AfterReturningAdvice;
import org.springframework.stereotype.Component;

//@Component
public class CombustionEngine implements Engine02 {
	String engineType;
	
	public CombustionEngine() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CombustionEngine(String engineType) {
		super();
		this.engineType = engineType;
	}
	
	public String getEngineType() {
		return engineType;
	}

	public void setEngineType(String engineType) {
		this.engineType = engineType;
	}
	
	@Override
	public boolean turnOn() {
		return true;
	}
	
}
