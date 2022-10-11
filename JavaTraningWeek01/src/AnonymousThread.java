/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
public class AnonymousThread {
    public static void main(String[] args) {
        // 1st way
        Runnable obj = new Runnable(){
            public void run(){
                System.out.println("Shariar");
            }
        }; 
        Thread t1 = new Thread(obj);
        t1.start();
        
        //2nd way
        Thread t2 = new Thread(new Runnable(){
            public void run(){
                System.out.println("Shariar");
            }
        });
        t2.start();
    }
}
