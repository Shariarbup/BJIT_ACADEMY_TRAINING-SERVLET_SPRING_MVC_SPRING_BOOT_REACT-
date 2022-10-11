package com.bjit.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;


import com.bjit.engine.*;
import com.bjit.java_confIg.JavaBeanConfig02;
import com.bjit.vehicle.*;

@SpringBootApplication
@ImportResource({ "classpath:BeanConfig02.xml" })
//@Import({ JavaBeanConfig02.class })
//@ImportResource({ "classpath:AutoWireBeanConfig.xml" })
public class SpringProjectAssignment07Application {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SpringProjectAssignment07Application.class, args);
		System.out.println("\n------------------------------------------\n");
		Car car = (Car) context.getBean("vehicle1");
		System.out.println("Vehicle Name: " + car.getName());
		System.out.println("Engine Type: " + car.getEngine02().getEngineType());
		System.out.println("Turn ON: " + car.getEngine02().turnOn());
		System.out.println("\n------------------------------------------\n");

		Bike bike = (Bike) context.getBean("vehicle2");
		System.out.println("Vehicle Name: " + bike.getName());
		System.out.println("Engine Type: " + bike.getEngine02().getEngineType());
		System.out.println("Turn ON: " + bike.getEngine02().turnOn());
		System.out.println("\n------------------------------------------\n");

		AutoRichkaw richk = (AutoRichkaw) context.getBean("vehicle3");
		System.out.println("Vehicle Name: " + richk.getName());
		System.out.println("Engine Type: " + richk.getEngine02().getEngineType());
		System.out.println("Turn ON: " + richk.getEngine02().turnOn());

	}

}
