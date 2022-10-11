package unitestingDemo.whitebox;

import static org.junit.Assert.*;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.junit.Test;

import unitestingDemo.SystemUnderTest;

public class whiteboxCountTester {

	@Test
	public void test1() {
		SystemUnderTest obj1 = new SystemUnderTest();
		
		obj1.count(5);
		assertEquals("Counting 5: ", 5, obj1.getCounter());
	}
	
	@Test
	public void test2() {
		SystemUnderTest obj1 = new SystemUnderTest();
		
		obj1.count(5);
		obj1.decrement(5);
		assertEquals("Counting 0: ", 0, obj1.getCounter());
	}
	
	@Test
	public void test3() {
		SystemUnderTest obj1 = new SystemUnderTest();
		
		obj1.count(5);
		obj1.resetCounter();
		assertEquals("Counting 0: ", 0, obj1.getCounter());
	}
	
	
	//Trying to invoke the private method directly
//	@Test
//	public void test4()throws NoSuchMethodException, SecurityException, IllegalAccessException,IllegalArgumentException, InvocationTargetException  {
//		Method method = Method.class.getDeclaredMethod("increment");
////				Library.class.getDeclareMethod("increment");
//		method.setAccessible(true);
//		SystemUnderTest obj1 = new SystemUnderTest();
//		
//		int count =(int) method.invoke(obj1);
//		assertEquals("Counting 1: ", 1, obj1.getCounter());
//	}

}
