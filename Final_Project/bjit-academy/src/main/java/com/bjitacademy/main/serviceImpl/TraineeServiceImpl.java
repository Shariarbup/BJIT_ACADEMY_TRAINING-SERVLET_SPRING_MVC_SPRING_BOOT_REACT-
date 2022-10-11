package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.exception.ResourceNotFoundException;
import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Role;
import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.User;
import com.bjitacademy.main.repository.BatchRepository;
import com.bjitacademy.main.repository.RoleRepository;
import com.bjitacademy.main.repository.TraineeRepository;
import com.bjitacademy.main.repository.UserRepository;
import com.bjitacademy.main.service.TraineeService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class TraineeServiceImpl implements TraineeService {
	@Autowired
	private TraineeRepository traineeRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private BatchRepository batchRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	public TraineeServiceImpl() {
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	@Override
	public List<Trainee> getAllTrainees() {
		return traineeRepository.findAll();
	}

	@Override
	public Trainee saveTrainee(Trainee trainee) {
		log.info("Saving new trainee {} to the database", trainee.getFirstName());

		Optional<Role> role = roleRepository.findByName("ROLE_TRAINEE");

		log.info("Role:" + role.get().getName());
		String username = trainee.getUser().getUsername();
		Optional<User> user = userRepository.findByUsername(username);
		String batchname = trainee.getBatch().getName();
		Optional<Batch> batch = batchRepository.findByName(batchname);
		System.out.println("Batch" + batch.get());
		if (user.isEmpty()) {
			trainee.setBatch(batch.get());
			trainee.getUser().setPassword(passwordEncoder.encode(trainee.getUser().getPassword()));
			trainee.getUser().setRoles(List.of(role.get()));

		}
		return traineeRepository.save(trainee);
	}

	@Override
	public Map<String, Boolean> deleteTraineeById(Long traineeId) {
		traineeRepository.deleteById(traineeId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public Trainee updateTrainee(Long traineeId, Trainee updatedTrainee) {
		// getting update trainee batch name
		String batchname = updatedTrainee.getBatch().getName();
		Optional<Batch> batch = batchRepository.findByName(batchname);
		System.out.println("batch " + batch);
		// getting updated trainee username
		String username = updatedTrainee.getUser().getUsername();
		Optional<User> user = userRepository.findByUsername(username);

		Trainee trainee = traineeRepository.findById(traineeId)
				.orElseThrow(() -> new ResourceNotFoundException("Trainee Info not found"));

		if (!user.isEmpty()) {
//			user.get().setPassword(passwordEncoder.encode(updatedTrainee.getUser().getPassword()));
			user.get().setUsername(updatedTrainee.getUser().getUsername());
			trainee.setFirstName(updatedTrainee.getFirstName());
			trainee.setLastName(updatedTrainee.getLastName());
			trainee.setAddress(updatedTrainee.getAddress());
			trainee.setEmail(updatedTrainee.getEmail());
			trainee.setMobile(updatedTrainee.getMobile());
			trainee.setDesignation(updatedTrainee.getDesignation());
			trainee.setUser(updatedTrainee.getUser());
			trainee.setBatch(batch.get());
			trainee.setUser(user.get());

		}

		return traineeRepository.save(trainee);
	}

	@Override
	public Optional<Trainee> getTraineeById(Long traineeId) {
		// TODO Auto-generated method stub
		return traineeRepository.findById(traineeId);
	}

	@Override
	public Optional<Trainee> getTraineeByName(String name) {
		// TODO Auto-generated method stub
		Optional<User> user = userRepository.findByUsername(name);
		Optional<Trainee> trainee = traineeRepository.findByUser(user.get());
		return trainee;
	}

	@Override
	public List<Trainee> getTraineeByBatchId(Long batchId) {
		// TODO Auto-generated method stub
		Optional<Batch> batch = batchRepository.findById(batchId);
		return traineeRepository.findByBatch(batch.get());
	}

}
