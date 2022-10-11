 package com.bjitacademy.main.repository;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.User;

@SpringBootTest
public class TraineeRepositoryTest {
	@Autowired
	private TraineeRepository traineeRepository;
	
	PasswordEncoder passwordEncoder;
	
	public TraineeRepositoryTest() {
		this.passwordEncoder = new BCryptPasswordEncoder();
	}
	
	@Test
	public void saveTraineeWithUsername() {
		User user = User.builder()
				.username("16511026")
				.password(passwordEncoder.encode("123456"))
				.build();
		Trainee trainee = Trainee.builder()
				.firstName("shakib")
				.lastName("Ahmed")
				.address("Mogorkhali")
				.email("shakib@gmail.com")
				.mobile("01968385155")
				.designation("Trainee Software Engineer")
				.user(user)
				.build();
		traineeRepository.save(trainee);
	}
	
	@Test
	public void saveTraineeWithBatchAndUserName() {
		Batch batch = Batch.builder()
				.name("Fresh_batch-06")
				.startDate("2022-07-13")
				.endDate("2022-10-13")
				.build();
		User user = User.builder()
				.username("16511056")
				.password(passwordEncoder.encode("123456"))
				.build();
		
		Trainee trainee = Trainee.builder()
				.firstName("Rahat")
				.lastName("Kawsar")
				.address("Mirpur-10")
				.email("rahat@gmail.com")
				.mobile("01968367680")
				.designation("Trainee Software Engineer")
				.user(user)
				.batch(batch)
				.build();
		traineeRepository.save(trainee);
		
	}

}
