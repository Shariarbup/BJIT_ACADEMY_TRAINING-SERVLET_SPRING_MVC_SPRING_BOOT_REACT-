package com.main.springdatajpa.dtoConvertor;

import com.main.springdatajpa.dto.StudentDto;
import com.main.springdatajpa.entity.Student;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class StudentConverter {
    public StudentDto studentToDto(Student student){
        StudentDto studentDto = new StudentDto();
        studentDto.setId(student.getStudentId());
        studentDto.setFirstName(student.getFirstName());
        studentDto.setLastName(student.getLastName());
        return studentDto;
    }

    public List<StudentDto> studentToDtos(List<Student> students){
        return students.stream().map(x->studentToDto(x)).collect(Collectors.toList());
    }

    public Student dtoToStudent(StudentDto studentDto){
        Student student = new Student();
        student.setStudentId(studentDto.getId());
        student.setFirstName(studentDto.getFirstName());
        student.setLastName(studentDto.getLastName());
        return  student;
    }
    public List<Student> dtoToStudents(List<StudentDto> studentDtos){
        return studentDtos.stream().map(x->dtoToStudent(x)).collect(Collectors.toList());
    }
}
