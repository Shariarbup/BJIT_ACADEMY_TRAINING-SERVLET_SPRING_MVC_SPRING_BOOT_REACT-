package com.bjit.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.bjit.engine.CombustionEngine;
import com.bjit.engine.Engine02;

//@Component
public class Bike extends Vehicle02{
	String name;
	
//	@Autowired
//	@Qualifier("engine2")
	CombustionEngine engine02;
	public Bike() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Bike(String name, CombustionEngine engine02) {
		super();
		this.name = name;
		this.engine02 = engine02;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public CombustionEngine getEngine02() {
		return engine02;
	}
	public void setEngine02(CombustionEngine engine02) {
		this.engine02 = engine02;
	};
	@Override
	public  void getVehicleName() {
		System.out.println("Bike");
	}
}
