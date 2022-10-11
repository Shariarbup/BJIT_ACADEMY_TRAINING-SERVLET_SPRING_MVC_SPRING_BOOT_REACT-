/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.functional_interface;

/**
 *
 * @author BJIT
 */
import java.util.*;
import java.util.function.Consumer;
public class Main {
    public static void main(String[] args) throws Exception{
       Consumer<Object> action = new Consumer<Object>(){
       @Override
       public void accept(Object t){
        //perform action
       }
       };
       
       ArrayList<Integer> numberList = new ArrayList<>(Arrays.asList(1,2,3,4,5));
     
       Consumer<Integer> action1 = System.out::println;
       try{
           numberList.stream().filter(n -> n%2  == 0).forEach(action1);
       }catch(Exception e){
           
       }
       
    }
}
