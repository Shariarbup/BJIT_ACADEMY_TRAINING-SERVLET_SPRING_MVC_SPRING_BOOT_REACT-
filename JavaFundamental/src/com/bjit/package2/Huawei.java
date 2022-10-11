/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.package2;

/**
 *
 * @author BJIT
 */
import com.bjit.package1.Mobile;
public class Huawei extends Mobile {
    public String modelName;
    public String type;
    private int price;
    Huawei(String name, String modelName, String type){
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
    public void getStatus(){
        System.out.println("We are banned from google. \n So, you get lack of facility");
    }
}
