/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.package1;

/**
 *
 * @author BJIT
 */
public class Samsung extends Mobile{
    public String modelName;
    public String type;
    private int price;
    Samsung(String name, String modelName, String type){
        super(name);
        this.modelName = modelName;
        this.type = type;  
    }
    public void setPrice(int price){
        this.price = price;
    }
    public int getPrice(){
        return this.price;
    }
    protected static void getStatus(){
        System.out.println("We are working with google. \n So, use us fearlessly");
    }
}