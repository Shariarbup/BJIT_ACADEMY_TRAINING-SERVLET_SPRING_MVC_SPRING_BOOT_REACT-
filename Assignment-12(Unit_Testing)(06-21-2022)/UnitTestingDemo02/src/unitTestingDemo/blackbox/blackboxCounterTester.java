package unitTestingDemo.blackbox;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import unitestingDemo.SystemUnderTest;

public class blackboxCounterTester {
	
	SystemUnderTest obj1 = new SystemUnderTest();
	
	@Before
    public void setup()
    {
    	System.out.println("....Unit Test Started....");
    }

	@Test
	public void testCount1() {
		obj1.count(3);
		assertEquals("Counting result: ", 1, obj1.getCounter());  
	}
	@Test
	public void testCount2() {
		 obj1.count(3);
		assertEquals("Counting result: ", 2, obj1.getCounter());  
	}
	@Test
	public void testCount3() {
		 obj1.count(3);
		assertEquals("Counting result: ", 3, obj1.getCounter()); 
	}
	@Test
	public void testCount4() {
		 obj1.count(-2);
		assertEquals("Counting result: ", 3, obj1.getCounter()); 
	}
	
	@After
    public void tearDown()
    {
    	System.out.println("....Unit Test Ended....");
    }
	

}
