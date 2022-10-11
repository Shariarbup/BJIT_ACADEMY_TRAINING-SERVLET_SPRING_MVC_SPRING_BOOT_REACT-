/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.package2;

/**
 *
 * @author BJIT
 */
public class Main {
    public static void main(String[] args) {
        Huawei h1;
        h1 = new Huawei("Huawei","GR5","smart phone");
        h1.setPrice(80000);
        h1.setEmi("h123456");
        System.out.println("Phone Name: "+h1.name);
        System.out.println("Phone EMI Number: "+h1.getEmi());
        System.out.println("Phone Model Name: "+h1.modelName);
        System.out.println("Phone Type: "+h1.type);
        System.out.println("Phone Price: "+h1.getPrice());
        
    }
}
