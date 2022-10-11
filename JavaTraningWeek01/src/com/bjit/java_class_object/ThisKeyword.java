/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.java_class_object;

/**
 *
 * @author BJIT
 */
public class ThisKeyword {
    
    public static void main(String[] args) {
        
    }
}
class Human{
    String name;
    int age;
    int height;
    Human(){
        name = "Not Given";
        age = 0;
        height = 0;
    }
    Human(String name){
        this();
        this.name = name;
    }
    Human(String name, int age){
        this(name);
        this.age = age;
    }
}