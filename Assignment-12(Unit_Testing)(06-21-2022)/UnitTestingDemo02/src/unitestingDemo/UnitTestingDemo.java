/**
 * 
 */
package unitestingDemo;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

/**
 * @author BJIT
 *
 */
public class UnitTestingDemo {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Result result = JUnitCore.runClasses(SystemUnderTest.class);  
        
	      for (Failure fail : result.getFailures()) {  
	         System.out.println(fail.toString());  
	      }  
	          
	      System.out.println(result.wasSuccessful());  

	}

}
