/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
import java.util.*;  
public class MultiThreadExample {
    public static void main(String[] args) throws InterruptedException{
        Athread aObject = new Athread();
        Thread thread1 = new Thread(aObject, "Thread-A");
        Bthread bObject =new Bthread();
        Thread thread2 = new Thread(bObject, "Thread-B");
        
        thread1.start();
        thread2.start();
        
        Cthread thread3 = new Cthread();
        thread3.setName("Thread-C");
        thread3.start();
    }
}

class Athread implements Runnable {
    @Override
    public void run(){
        System.out.println("I am from Thread-A");
        for(int i=0; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+": "+1);
            try{
               Thread.sleep(500); 
            }catch(Exception e){e.printStackTrace();}
        }
    }
}

class Bthread implements Runnable{
    @Override
    public void run(){
        System.out.println("I am from Thread-B");
        for(int i=0; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+": "+2);
            try{
               Thread.sleep(500); 
            }catch(Exception e){e.printStackTrace();}
        }
    }
}

class Cthread extends Thread{
    public void run(){
        System.out.println("I am from Thread-C");
        for(int i=0; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+": "+3);
            try{
               Thread.sleep(500); 
            }catch(Exception e){e.printStackTrace();}
        }
    }
}