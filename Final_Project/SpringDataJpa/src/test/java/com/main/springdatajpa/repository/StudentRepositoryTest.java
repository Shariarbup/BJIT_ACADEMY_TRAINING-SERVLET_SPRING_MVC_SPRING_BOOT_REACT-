package com.main.springdatajpa.repository;

import com.main.springdatajpa.entity.Gurdian;
import com.main.springdatajpa.entity.Student;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StudentRepositoryTest {
    @Autowired
    private StudentRepository studentRepository;

    @Test
    public void saveStudent(){
        Student student = new Student().builder()
                .firstName("Al")
                .lastName("Shariar")
                .emailId("itmasjoy@gmail.com")
//                .gurdianName("jahangir")
//                .gurdianEmail("jahangir@gmail.com")
//                .gurdianMobile("01968385155")
                .build();
        studentRepository.save(student);
    }



    @Test
    public void printAllStudent(){
        List<Student> students = studentRepository.findAll();
        System.out.println("All stuent: "+ students);
    }
    @Test
    public void saveStudentWithGurdian(){
        Gurdian gurdian = new Gurdian().builder()
                .email("ab@gmail.com")
                .mobile("01968385155")
                .name("ab")
                .build();
        Student student = new Student().builder()
                .firstName("Rahat")
                .lastName("Kawser")
                .emailId("rahat@gmail.com")
                .gurdian(gurdian)
                .build();
        studentRepository.save(student);
    }
    @Test
    public void findStudentByFirstName(){
      List<Student> students =  studentRepository.findByFirstName("Rahat");
        System.out.println("Student "+ students);
    }
    @Test
    public void findStudentByFirstNameContaining(){
        List<Student> students = studentRepository.findByFirstNameContaining("A");
        System.out.println("Students: "+students);
    }
    @Test
    public  void findStudentByGurdianName(){
        List<Student> students = studentRepository.findByGurdianName("jahangir");
        System.out.println("Students: "+ students);
    }
    @Test
    public void getStudentByEmailAddress(){
        Student student = studentRepository.getStudentEmailAddress("itmasjoy@gmail.com");
        System.out.println("Student : "+student);
    }
    @Test
    public void getStudentByEmailAddressNative(){
        Student student = studentRepository.getStudentEmailAddressNative("itmasjoy@gmail.com");
        System.out.println("Student : "+student);
    }
    @Test
    public void getStudentByEmailAddressNativeNameParam(){
        Student student = studentRepository.getStudentEmailAddressNativeNameParam("itmasjoy@gmail.com");
        System.out.println("Student : "+student);
    }

    @Test
    public void updateStudentFirstNameByEmailId(){
        studentRepository.updateStudentNameByEmailId("Md. Al","itmasjoy@gmail.com");
    }
}