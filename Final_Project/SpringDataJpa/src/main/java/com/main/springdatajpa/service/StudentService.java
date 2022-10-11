package com.main.springdatajpa.service;

import com.main.springdatajpa.entity.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {
    List<Student> getAllStudents();
    Optional<Student> findByStudentId(Long id);

    public Student saveStudent(Student student);
}
