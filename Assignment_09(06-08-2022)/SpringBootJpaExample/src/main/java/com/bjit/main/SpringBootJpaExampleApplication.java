package com.bjit.main;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class SpringBootJpaExampleApplication implements CommandLineRunner {

	@Autowired
	StudentRepo studentRepo;

	@Autowired(required = true)
	JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootJpaExampleApplication.class, args);
	}

	@Override
	public void run(String... args) {
		startTheApp();
	}

	void startTheApp() {
		// create student table
		jdbcTemplate.execute("DROP TABLE IF EXISTS student");
		jdbcTemplate.execute("CREATE TABLE student("
				+ "id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), phone VARCHAR(255))");
		List<Student> students = Arrays.asList(new Student("Md. Al Shariar joy", "Baridhara", "123456"),
				new Student("Jakaria", "Mirpur 10", "32456"), new Student("Hridoy", "Mirpur 10", "45678"),
				new Student("Jishan", "Mohakhali", "7890"), new Student("Jewel", "Mirpur DOHS", "23456"),
				new Student("Masum", "Dhaka Cantt", "121314"), new Student("Shazzad", "Uttara", "87219"));

		// saving the students
		students.forEach(student -> {
			studentRepo.saveAll(students);
		});

		// find all students
		System.out.println("\n======All Student List=====\n");
		studentRepo.findAll().forEach(x -> System.out.println(x));

		// find student by id
		System.out.println("\n======Find Student Whose Id is 3=====\n");
		Optional<Student> student1 = studentRepo.findById(3);
		System.out.println(student1.toString());

		// update record
		System.out.println("\n=======Update Student name whose id is 2======\n");
		Optional<Student> student2 = studentRepo.findById(2);
		student2.get().setName("shuvo");
		studentRepo.save(student2.get());
		System.out.println(student2.toString());

		// delete by id
		System.out.println("\n=======Delete Student whose id is 4======\n");
		studentRepo.deleteById(4);
		System.out.println("After Deleting ID-4 student: Students List->");
		studentRepo.findAll().forEach(x -> System.out.println(x));

		// find student by name
		System.out.println("\n=======Get Student whose name is shuvo======\n");
		List<Student> students1 = studentRepo.findAllByName("shuvo");
		for (Student student : students1) {
			System.out.println(student.toString());
		}
		// find student by address
		System.out.println("\n=======Get All Student whose address is Mirpur 10======\n");
		List<Student> students2 = studentRepo.findAllByAddress("Mirpur 10");
		for (Student student : students2) {
			System.out.println(student.toString());
		}

		// find student by address
		System.out.println("\n=======Get Student whose address is Mirpur 10 and name Hridoy======\n");
		List<Student> students3 = studentRepo.findAllByNameAndAddress("Hridoy","Mirpur 10");
		for (Student student : students3) {
			System.out.println(student.toString());
		}
		System.out.println("\n========================================================\n");

	}

}
