/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bjit.stream;

/**
 *
 * @author BJIT
 */
import java.util.*;
import java.util.stream.*;
public class StreamApiPractice {
    
    public static void evenNumber(Stream<Integer> randomNumbers){
        List<Integer> evenNumbersList = randomNumbers.filter(i -> i%2 == 0).collect(Collectors.toList());
        System.out.println("Even numbers from the 20 Random Integers are given below: \n"+evenNumbersList);
    }
    
    public static void sortDoubles(Stream<Double> randomDoubles){
        List<Double> sortDoubles = randomDoubles.sorted().collect(Collectors.toList());
        System.out.println("\nSorted Doubles are given below: \n"+sortDoubles+"\n");
    }
    
    public static void main(String[] args) {
        //Getting Even Number from the 20 random Integer
        Stream<Integer> randomNumbers = Stream.generate(() -> (new Random()).nextInt(100)).limit(20);
        evenNumber(randomNumbers);
          
        //Sorted the Random Doubles
        Stream<Double> randomDoubles = Stream.generate(() -> (new Random()).nextDouble(100)).limit(10);
        sortDoubles(randomDoubles);        
    }
}
