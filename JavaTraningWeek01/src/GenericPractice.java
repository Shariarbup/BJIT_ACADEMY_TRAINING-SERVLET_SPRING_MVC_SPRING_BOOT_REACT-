/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
public class GenericPractice {
    public static void main(String[] args) {
        //Initialize generic class with integer data
        GenericClass<Integer> intObj = new GenericClass<>(5);
        System.out.println("Generic class returns: "+ intObj.getData());
        
        //Initialize generic class with Double data
        GenericClass<Double> doubleObj = new GenericClass<>(5.123);
        System.out.println("Generic class returns: "+ doubleObj.getData());
        
        //Initialize generic class with Float data
        GenericClass<Float> floatObj = new GenericClass<>(1.23f);
        System.out.println("Generic class returns: "+ floatObj.getData());
        
        //Initialize generic class with Boolean data
        GenericClass<Boolean> boolObj = new GenericClass<>(true);
        System.out.println("Generic class returns: "+ boolObj.getData());
        
        //Intializing the generic class with String data
        GenericClass<String> strObj = new GenericClass<>("java programming");
        System.out.println("Generic class returns: "+ strObj.getData());
        
        //Intializing the generic class with String data
        GenericClass<Character> charObj = new GenericClass<>('A');
        System.out.println("Generic class returns: "+ charObj.getData());
    }
}

//creating a generic class
class GenericClass<T>{
    //variable of p type
    private T data;
    public GenericClass(T data){
        this.data = data;
    }
    
    //method that return T type variable
    public T getData(){
        return this.data;
    }
}