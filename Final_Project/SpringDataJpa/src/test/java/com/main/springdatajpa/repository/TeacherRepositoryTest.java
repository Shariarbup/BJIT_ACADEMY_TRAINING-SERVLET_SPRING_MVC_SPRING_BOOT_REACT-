package com.main.springdatajpa.repository;

import com.main.springdatajpa.entity.Course;
import com.main.springdatajpa.entity.Teacher;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class TeacherRepositoryTest {
    @Autowired
    private TeacherRepository teacherRepository;
    @Test
    public void saveTeacher(){
        Course courseJava = Course.builder()
                .title("Java")
                .credit(4)
                .build();
        Course courseDba = Course.builder()
                .title("DBA")
                .credit(4)
                .build();
        Course courseMath = Course.builder()
                .title("Math")
                .credit(4)
                .build();
        Teacher teacher = Teacher.builder()
                .firstName("sarwar")
                .lastName("Miral")
//                .courses(List.of(courseJava, courseDba, courseMath))
                .build();
        teacherRepository.save(teacher);
    }
}