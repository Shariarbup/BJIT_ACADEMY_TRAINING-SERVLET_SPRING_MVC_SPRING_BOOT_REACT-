/**
 * 
 */
package unitestingDemo;

/**
 * @author BJIT
 *
 */
public class SystemUnderTest {

	private int counter = 0;

	private void increment() {
		counter++;
	}

	// Test method
	public void count(int m) {
		while (m > 0) {
			m--;
			increment();
		}
	}

	// Test method
	public void decrement(int m) {
		while (m > 0) {
			counter--;
			m--;
		}
	}

	// Test method
	public void resetCounter() {
		counter = 0;
	}

	// Test method
	public int getCounter() {
		return counter;
	}

}
