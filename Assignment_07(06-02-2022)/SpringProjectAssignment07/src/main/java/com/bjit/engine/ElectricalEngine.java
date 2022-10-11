package com.bjit.engine;

import org.springframework.stereotype.Component;

//@Component
public class ElectricalEngine implements Engine02{
	
	String engineType;
	
	
	public ElectricalEngine() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public ElectricalEngine(String engineType) {
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
