package com.main.springdatajpa.controller;

import com.main.springdatajpa.dto.StudentDto;
import com.main.springdatajpa.dtoConvertor.StudentConverter;
import com.main.springdatajpa.entity.Student;
import com.main.springdatajpa.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentConverter studentConverter;

    @GetMapping("/students")
    List<StudentDto> getAllStudents(){
       List<Student> students= studentService.getAllStudents();
       return studentConverter.studentToDtos(students);
    }

    @GetMapping("/students/{id}")
    public Optional<StudentDto> getStudentById(@PathVariable Long id){
        Optional<Student> student = studentService.findByStudentId(id);
        return Optional.ofNullable(studentConverter.studentToDto(student.get()));
    }
    @PostMapping("/students")
    public StudentDto saveStudent(@RequestBody StudentDto studentDto){
        Student student = studentService.saveStudent(studentConverter.dtoToStudent(studentDto));
        return studentConverter.studentToDto(student);
    }
}
