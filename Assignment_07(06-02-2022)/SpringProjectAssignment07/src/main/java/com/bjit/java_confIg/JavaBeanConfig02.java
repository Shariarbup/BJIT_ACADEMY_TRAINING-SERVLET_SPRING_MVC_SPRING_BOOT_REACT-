package com.bjit.java_confIg;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;

import com.bjit.engine.CombustionEngine;
import com.bjit.engine.ElectricalEngine;
import com.bjit.vehicle.AutoRichkaw;
import com.bjit.vehicle.Bike;
import com.bjit.vehicle.Car;


public class JavaBeanConfig02 {
	// For Vehicle 1
		@Bean
		public Car vehicle1(@Qualifier("engine1") ElectricalEngine e1) {
			Car v1 = new Car();
			v1.setName("Car");
			v1.setEngine02(e1);;
			return v1;
		}

		// For Vehicle 2
		@Bean
		public Bike vehicle2(@Qualifier("engine2") CombustionEngine e2) {
			Bike v2 = new Bike();
			v2.setName("Bike");
			v2.setEngine02(e2);
			return v2;
		}

		// For Vehicle 3
		@Bean
		public AutoRichkaw vehicle3(@Qualifier("engine1") ElectricalEngine e3) {
			AutoRichkaw v3 = new AutoRichkaw();
			v3.setName("AutoRickshaw");
			v3.setEngine02(e3);
			return v3;
		}

		// For Engine 1
		@Bean
		public ElectricalEngine engine1() {
			ElectricalEngine e1 = new ElectricalEngine();
			e1.setEngineType("Electrical Engine");
			return e1;
		}

		// For Engine 2
		@Bean
		public CombustionEngine engine2() {
			CombustionEngine e2 = new CombustionEngine();
			e2.setEngineType("Combustion Engine");
			return e2;
		}
}
