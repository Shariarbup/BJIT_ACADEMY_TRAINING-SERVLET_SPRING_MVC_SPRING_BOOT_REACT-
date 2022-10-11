/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
public class RunnableInterfaceThread implements Runnable {
    
    @Override
    public void run() {
        System.out.println("----Implement Runnable Interface----");
	for (int x = 1; x <= 10; x++) {
	 System.out.println("Run by "+Thread.currentThread().getName()+ ", x is " + x);
         try{
             Thread.sleep(5000);
            }catch(Exception e){}
        }
    }
    
    public static void main(String args[]) {
       Thread thread1= new Thread(new RunnableInterfaceThread()); 
       thread1.start();
    }
}