/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
import java.util.*;
public class OwnException {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the bnumber: ");
        try{
            int number = sc.nextInt();
            if(number > 10){
                throw new MyException();
            }
        }catch(MyException e){
            
        }
    }
}

class MyException extends Exception{
    MyException(){
        System.out.println("Number cannot be greater than 10 (constructor)");
    }
}
