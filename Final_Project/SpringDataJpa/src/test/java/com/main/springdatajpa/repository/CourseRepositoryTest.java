package com.main.springdatajpa.repository;

import com.main.springdatajpa.entity.Course;
import com.main.springdatajpa.entity.Student;
import com.main.springdatajpa.entity.Teacher;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CourseRepositoryTest {
    @Autowired
    private CourseRepository courseRepository;
    @Test
    public void printAllCourses(){
        List<Course> courses = courseRepository.findAll();
        System.out.println("Courses: "+ courses);
    }
    @Test
    public void saveCourseWithTeacher(){
        Teacher teacher = Teacher.builder()
                .firstName("Nani")
                .lastName("Gopal")
                .build();
        Course course = Course.builder()
                .title("Python")
                .credit(5)
                .teacher(teacher)
                .build();
        courseRepository.save(course);
    }
    @Test
    public void allPagination(){

        Pageable firstPageWithThreeRecords =  PageRequest.of(0,3);
        Pageable secondPageWithTwoRecords =  PageRequest.of(1,2);
        List<Course> courses = courseRepository.findAll(firstPageWithThreeRecords).getContent();
        long totalElements = courseRepository.findAll(firstPageWithThreeRecords).getTotalElements();
        long totalPages = courseRepository.findAll(firstPageWithThreeRecords).getTotalPages();
        System.out.println("Courses: "+ courses);
        System.out.println("Total Elements: "+ totalElements);
        System.out.println("Total Pages: "+ totalPages);
    }

    @Test
    public void findAllorting(){
        Pageable sortByTitle = PageRequest.of(
                0,
                2,
                Sort.by("title")
        );
        Pageable sortByCreditDesc = PageRequest.of(
          0,
          2,
          Sort.by("credit").descending()
        );
        Pageable sortByTitleAndCreditDesc =  PageRequest.of(
               0,
               2,
               Sort.by("title")
                       .descending()
                       .and(Sort.by("credit").descending())
        );

        List<Course> courses = courseRepository.findAll(sortByTitle).getContent();
        System.out.println("Courses: "+ courses);
    }
    @Test
    public void printfindByTitleContaining(){
        Pageable firstPageTenRecords = PageRequest.of(0,10);
        List<Course> courses = courseRepository.findByTitleContainingIgnoreCase("d", firstPageTenRecords).getContent();
        System.out.println("Courses: "+courses);
    }

    @Test
    public void saveCourseWithStudentAndTeacher(){
        Teacher teacher = Teacher.builder()
                .firstName("Dr.")
                .lastName("Strange")
                .build();
        Student student = Student.builder()
                .firstName("Spider")
                .lastName("Man")
                .emailId("spider.man@gmail.com")
                .build();
        Course course = Course.builder()
                .title("AI")
                .credit(6)
                .teacher(teacher)
                .build();
        course.addStudent(student);
        courseRepository.save(course);

    }
}