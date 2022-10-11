package com.bjit.dao;

import java.util.List;
import java.util.Optional;

import com.bjit.model.Student;

public interface StudentDao {

    int save(Student student);

    int update(Student student);

	List<Student> findAllStudent();
	
	Optional<Student> findById(int id);

}
