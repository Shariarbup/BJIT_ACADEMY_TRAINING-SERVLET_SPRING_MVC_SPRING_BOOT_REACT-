/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
import java.util.*;
public class ThrowException {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        sc.close();
        try{
            int number = sc.nextInt();
            if(number > 10){
                Exception e = new Exception();
                throw e; // As we manually throw Exception so we must need to catch Exception
                
            }
        }catch(Exception e){
            System.out.println("Number can't be greater than 10");
        }
        System.out.println("Programm end");
        
    }
}
