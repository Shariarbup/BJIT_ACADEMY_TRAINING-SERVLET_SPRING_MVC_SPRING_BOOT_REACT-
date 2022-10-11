package com.bjit.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.bjit.engine.ElectricalEngine;
import com.bjit.engine.Engine02;

//@Component
public class AutoRichkaw extends Vehicle02{
	String name;
	
//	@Autowired
//	@Qualifier("engine1")
	ElectricalEngine engine02;
	
	public AutoRichkaw() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public AutoRichkaw(String name, ElectricalEngine engine02) {
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

	public ElectricalEngine getEngine02() {
		return engine02;
	}

	public void setEngine02(ElectricalEngine engine02) {
		this.engine02 = engine02;
	}
	
	@Override
	public  void getVehicleName() {
		
		System.out.println("AutoRichkaw");
	};
}
