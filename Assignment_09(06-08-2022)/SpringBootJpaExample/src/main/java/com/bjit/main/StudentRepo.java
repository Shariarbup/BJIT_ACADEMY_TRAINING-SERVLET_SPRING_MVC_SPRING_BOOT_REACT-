package com.bjit.main;

import java.util.List;
import java.util.Optional;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer>{

	List<Student> findAllByName(String name);

	List<Student> findAllByAddress(String address);
	
	//@Query("select * from student where name=:name, address=:address")
	List<Student> findAllByNameAndAddress(String name, String address);

	//Student findByName(String string);

}
