package com.main.springdatajpa.repository;

import com.main.springdatajpa.entity.Course;
import com.main.springdatajpa.entity.CourseMaterial;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class CoursemaerialRepositoryTest {
    @Autowired
    private CoursemaerialRepository coursemaerialRepository;

    @Test
    public void savecourseMaterial(){
        Course course = Course.builder()
                .title("Bangla")
                .credit(6)
                .build();
        CourseMaterial courseMaterial = CourseMaterial.builder()
                .url("dailycodebuffer.com")
                .course(course)
                .build();
        coursemaerialRepository.save(courseMaterial);
    }
    @Test
    public void printAllCourseMaterials(){
        List<CourseMaterial> courseMaterials = coursemaerialRepository.findAll();
        System.out.println("CourseMaterials: "+courseMaterials);
    }
}