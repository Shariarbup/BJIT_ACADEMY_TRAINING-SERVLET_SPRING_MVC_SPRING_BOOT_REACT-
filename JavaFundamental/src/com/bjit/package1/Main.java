/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.package1;

/**
 *
 * @author BJIT
 */
import com.bjit.package2.Huawei;
public class Main {
    public static void main(String[] args) {
        Samsung s1 = new Samsung("Samsung","S12","smart phone");
        s1.setPrice(80000);
        s1.setEmi("s123456");
        System.out.println("Phone Name: "+s1.name);
        System.out.println("Phone EMI Number: "+s1.getEmi());
        System.out.println("Phone Model Name: "+s1.modelName);
        System.out.println("Phone Type: "+s1.type);
        System.out.println("Phone Price: "+s1.getPrice()); 
        //System.out.println("Phone Price: "+s1.getStatus()); 
    }
}


