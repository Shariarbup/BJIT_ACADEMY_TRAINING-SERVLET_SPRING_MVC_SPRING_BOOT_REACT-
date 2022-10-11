package com.bjit.main;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import com.bjit.dao.StudentDao;
import com.bjit.dao.StudentDaoImpl;
import com.bjit.model.Student;

@SpringBootApplication(scanBasePackages = { "com.bjit.dao", "com.bjit.model" })
public class SpringJdbcExampleApplication implements CommandLineRunner {

	@Autowired(required = true)
	JdbcTemplate jdbcTemplate;

	@Autowired
	StudentDao studentDao;

	public static void main(String[] args) {
		SpringApplication.run(SpringJdbcExampleApplication.class, args);

	}

	@Override
	public void run(String... args) {
		startTheApp();
	}

	void startTheApp() {

		// create books table
		jdbcTemplate.execute("DROP TABLE IF EXISTS student");
		jdbcTemplate.execute("CREATE TABLE student("
				+ "id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), phone VARCHAR(255))");

		List<Student> students = Arrays.asList(new Student("Md. Al Shariar joy", "Baridhara", "123456"),
				new Student("Hridoy", "Mirpur 10", "45678"), new Student("Jishan", "Mohakhali", "7890"),
				new Student("Jewel", "Mirpur DOHS", "23456"));

		// saving the books
		students.forEach(student -> {
			studentDao.save(student);
		});

		System.out.println("======All Student List=====");
		// find all books
		List<Student> listOfStudents = studentDao.findAllStudent();
		for (Student student : listOfStudents) {
			System.out.println(student.toString());
		}
		System.out.println("=======Update Student name which student id is 3======");

		// update record
		// find by id
		Optional<Student> student = studentDao.findById(3);
		System.err.println("Before Update: "+ student.get().toString());

		student.get().setName("shakib");
		studentDao.update(student.get());
		
		Optional<Student> student1 = studentDao.findById(3);
		System.out.println("After Update: "+ student1.get().toString());
		System.out.println("======================");

	}
}
