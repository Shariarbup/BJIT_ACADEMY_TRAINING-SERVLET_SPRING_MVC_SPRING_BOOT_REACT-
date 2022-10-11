/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author BJIT
 */
import java.util.*;
public class StringMethod {
    public static void main(String[] args) {
        //contains():
        String str = "Hello Javatpoint readers";  
        boolean isContains = str.contains("Javatpoint");  
        System.out.println(isContains);  
        // Case Sensitive  
        System.out.println(str.contains("javatpoint")); // false 
        
        //equals():
        String s1="javatpoint";  
	String s2="javatpoint";  
	String s3="JAVATPOINT";  
	String s4="python";  
	System.out.println(s1.equals(s2));//true because content and case is same  
	System.out.println(s1.equals(s3));//false because case is not same  
	System.out.println(s1.equals(s4));//false because content is not same
        
        //isEmpty():
        String ss1="";  
	String ss2="javatpoint";  
  	System.out.println(ss1.isEmpty());  //true
	System.out.println(ss2.isEmpty());  //false
        
        //trim():
        // The Java String class trim() method eliminates leading and trailing spaces.
	String p1="  hello string   ";  
	System.out.println(p1+"javatpoint");//without trim()     // hello string   javatpoint
	System.out.println(p1.trim()+"javatpoint");//with trim() //hello stringjavatpoint
        
        //Split():
        String d1="java string split method by javatpoint";  
	String[] words=d1.split("\\s");//splits the string based on whitespace  
	//using java foreach loop to print elements of string array  
	for(String w:words){  
	System.out.println(w);  
	}  
        
        //join():
        String joinString1=String.join("-","welcome","to","javatpoint");  //welcome-to-javatpoint
        
        //Convert Character Array to String:
        char[] ch={'j','a','v','a','t','p','o','i','n','t'};  
	String s=new String(ch);
        
        //charAt():
        String str1="Adam Eve Smith";
        char let1=str1.charAt(0); // A==65
        char let2=str1.charAt(5); // E==69
        char let3=str1.charAt(9); // s==83
        System.out.println(let1); // A
        System.out.println(let1+let2+let2); //217
        System.out.println(let1+let2+let2+" "+let1+let2+let2); //217 AES
        System.out.println("Your initial are:: "+let1+let2+let2); //Your initial are:: AES
        
        //substring():
        String str2="Shariar";
        //          0123456
        System.out.println(str2.substring(0, 1)); //S
        System.out.println(str2.substring(2, 6)); //a
        System.out.println(str2.substring(0)); //a
        
        //compareTo():
        String word1 = "abs";
        String word2 = "bcd";
        int cmp = word1.compareTo(word2);
        System.out.println(cmp); // -1
        //1. word1 < wonrd2 return negative number
        //2. word1 > wonrd2 return positive number
        //3. word1 = wonrd2 return 0
        
        //length():
        String word11 = "Shariar";
        //     index:   0123456
        //     length:  1234567
        System.out.println(word11.length()); // 7
        
        //Convert String to character Array:
        String a = "Al Shariar";
        String b = "Shakib Ahmed Shuvo";
        String aa = a.replace(" ", "").toLowerCase(); // First replace space, then convert to lowercase
        String bb = b.replace(" ", "").toLowerCase(); // First replace space, then convert to lowercase
	char[] c=a.toCharArray(); // covert a String to Character Array
	char[] d=b.toCharArray(); // covert a String to Character Array

	Arrays.sort(c); // sorting the c Array
	Arrays.sort(d); // sorting the d Array
	if(Arrays.equals(c,d)){} // comparing two array elements equals or not.
        
        //replace():
        String f1 = "javatpoint is a very good website";  
	String replaceString = f1.replace('a','e');//replaces all occurrences of 'a' to 'e'  
	//output:jevetpoint is e very good website
	
	String f2 ="my name is khan my name is java";  
	String replaceString2 = f2.replace("is","was");//replaces all occurrences of "is" to "was"
    }
         
}
