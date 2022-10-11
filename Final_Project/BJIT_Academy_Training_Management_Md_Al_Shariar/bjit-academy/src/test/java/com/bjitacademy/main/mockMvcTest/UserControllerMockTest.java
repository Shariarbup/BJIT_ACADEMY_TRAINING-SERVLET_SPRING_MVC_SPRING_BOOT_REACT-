package com.bjitacademy.main.mockMvcTest;

import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
//import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.validation.constraints.Pattern.Flag;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.bjitacademy.main.model.Role;
import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.model.User;
import com.bjitacademy.main.repository.TraineeRepository;
import com.bjitacademy.main.repository.TrainerRepository;
import com.bjitacademy.main.service.TraineeService;
import com.bjitacademy.main.service.TrainerService;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserControllerMockTest {

	@Autowired
	private TraineeService traineeService;
	
	@Autowired
	private TrainerService trainerService;

	@MockBean
	private TraineeRepository traineeRepository;
	
	@MockBean
	private TrainerRepository trainerRepository;

	@Test
	public void saveTraineeTest() throws Exception {
		Trainee trainee1 = getTrainee1();
		Trainee trainee2 = getTrainee2();
		when(traineeRepository.save(trainee1)).thenReturn(trainee1);
		when(traineeRepository.save(trainee2)).thenReturn(trainee2);
	}

	@Test
	public void testRetrieveTrainerById() throws Exception {
		Role role1 = new Role(2L, "ROLE_TRAINER");
		Collection<Role> roles =new ArrayList<Role>();
		roles.add(role1);
		User user = new User();
		user.setUsername("16511029");
		user.setPassword("123456");
		user.setRoles(roles);

		Optional<Trainer> trainerOptional = Optional.of(new Trainer(1l, "Al", "shariar","mirpur 10","shariar@gmail.com","software engineer" ,"01968385155", user));
		when(trainerRepository.findById(1l)).thenReturn(trainerOptional);

		assertTrue(trainerService.getTrainerById(1l).get().getLastName().contains("shariar"));
	}

	public void testRetrieveTrainerByName() throws Exception {
		String name = "shariar";
		when(trainerRepository.findByLastName(name)).thenReturn(getTrainer());
		assertTrue(trainerService.getTrainerById(1l).get().getLastName().contains("shariar"));
	}

	@Test
	public void getTraineeListSizeTest() throws Exception {
		Role role1 = new Role(2L, "ROLE_TRAINER");
		Collection<Role> roles =new ArrayList<Role>();
		roles.add(role1);
		User user = new User();
		user.setUsername("16511029");
		user.setPassword("123456");
		user.setRoles(roles);
		when(trainerRepository.findAll())
				.thenReturn(Stream
						.of(new Trainer(1l, "Al", "shariar","mirpur 10","shariar@gmail.com","software engineer" ,"01968385155", user),
								new Trainer(1l, "Al", "shariar","mirpur 10","shariar@gmail.com","software engineer" ,"01968385155", user))
						.collect(Collectors.toList()));
		assertEquals(2, trainerService.getAllTrainers().size());
	}

	@Test
	public void deleteTrainerTest() throws Exception {
		Trainer trainer = getTrainer();
		Map<String, Boolean> deleteTrainerById = trainerService.deleteTrainerById(trainer.getTrainerId());
		Boolean flag = false;
		for (Map.Entry<String, Boolean> entry : deleteTrainerById.entrySet()) {
			flag = entry.getValue();
			// do something with key and/or tab
		}
		assertEquals(true, flag);
	}

	private Trainer getTrainer() {
		Role role1 = new Role(3L, "ROLE_TRAINEE");
		Collection<Role> roles =new ArrayList<Role>();
		roles.add(role1);
		User user = new User();
		user.setUsername("16511029");
		user.setPassword("123456");
		user.setRoles(roles);
		Trainer trainer = new Trainer();
		trainer.setTrainerId(1l);
		trainer.setFirstName("Shuvo");
		trainer.setLastName("Ahmed");
		trainer.setAddress("Mirpur 10");
		trainer.setDesignation("Trainee Software Engineer");
		trainer.setEmail("shariar@gmail.com");
		trainer.setMobile("01968385155");
		trainer.setUser(user);
		return trainer;
	}
	
	private Trainee getTrainee2() {
		Role role1 = new Role(3L, "ROLE_TRAINEE");
		Collection<Role> roles =new ArrayList<Role>();
		roles.add(role1);
		User user = new User();
		user.setUsername("16511029");
		user.setPassword("123456");
		user.setRoles(roles);
		
		Trainee trainee = new Trainee();
		trainee.setFirstName("Shuvo");
		trainee.setLastName("Ahmed");
		trainee.setAddress("Mirpur 10");
		trainee.setDesignation("Trainee Software Engineer");
		trainee.setEmail("shariar@gmail.com");
		trainee.setMobile("01968385155");
		trainee.setUser(user);
		return trainee;
	}
	
	private Trainee getTrainee1() {
		Role role1 = new Role(2L, "ROLE_TRAINER");
		Collection<Role> roles =new ArrayList<Role>();
		roles.add(role1);
		User user = new User();
		user.setUsername("16511029");
		user.setPassword("123456");
		user.setRoles(roles);
		Trainee trainee = new Trainee();
		trainee.setFirstName("al");
		trainee.setLastName("shariar");
		trainee.setAddress("Mirpur 10");
		trainee.setDesignation("Trainee Software Engineer");
		trainee.setEmail("shariar@gmail.com");
		trainee.setMobile("01968385155");
		trainee.setUser(user);
		return trainee;
	}
	
}
