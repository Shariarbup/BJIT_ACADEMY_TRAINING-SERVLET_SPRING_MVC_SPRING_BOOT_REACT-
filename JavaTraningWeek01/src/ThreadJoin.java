
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
public class ThreadJoin {
    public static void main(String[] args) {
        A a = new A();
        a.setName("Thread-1");
        a.start();
        System.out.println(a.isAlive());  // return true
        try {
            a.join(); // Main thread wait till the Thread-1 finish its work.
        } catch (InterruptedException ex) {
            Logger.getLogger(ThreadJoin.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println(a.isAlive());// return false
        System.out.println(a.x);
    }
}
class A extends Thread{
    int x=0;
    @Override
    public void run(){
        for(int i=0; i<100000; i++){
            x++;
        }
    }
}