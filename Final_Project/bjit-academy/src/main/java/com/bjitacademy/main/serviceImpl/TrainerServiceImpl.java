package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.exception.ResourceNotFoundException;
import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Role;
import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.model.User;
import com.bjitacademy.main.repository.BatchRepository;
import com.bjitacademy.main.repository.RoleRepository;
import com.bjitacademy.main.repository.TrainerRepository;
import com.bjitacademy.main.repository.UserRepository;
import com.bjitacademy.main.service.TrainerService;

import lombok.extern.slf4j.Slf4j;

@Service
//@RequiredArgsConstructor
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class TrainerServiceImpl implements TrainerService {
	@Autowired
	TrainerRepository trainerRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private BatchRepository batchRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public List<Trainer> getAllTrainers() {

		return trainerRepository.findAll();
	}

	@Override
	public Trainer saveTrainer(Trainer trainer) {
		log.info("Saving new trainer {} to the database", trainer.getFirstName());
		Optional<Role> role = roleRepository.findByName("ROLE_TRAINER");
		log.info("Role" + role.get());
		String username = trainer.getUser().getUsername();
		Optional<User> user = userRepository.findByUsername(username);
		if (user.isEmpty()) {
			trainer.getUser().setPassword(passwordEncoder.encode(trainer.getUser().getPassword()));
			trainer.getUser().setRoles(List.of(role.get()));
			return trainerRepository.save(trainer);
		}
		return null;
	}

	@Override
	public Map<String, Boolean> deleteTrainerById(Long trainerId) {
		trainerRepository.deleteById(trainerId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public Trainer updateTrainer(Long trainerId, Trainer updatedTrainer) {

		// getting updated trainee username
		Optional<Role> role = roleRepository.findByName("ROLE_TRAINER");
		String username = updatedTrainer.getUser().getUsername();
		Optional<User> user = userRepository.findByUsername(username);
		Trainer trainer = trainerRepository.findById(trainerId)
				.orElseThrow(() -> new ResourceNotFoundException("Trainer Info not found"));
		if (!user.isEmpty()) {
//			user.get().setPassword(passwordEncoder.encode(updatedTrainer.getUser().getPassword()));
			user.get().setUsername(updatedTrainer.getUser().getUsername());
//			user.get().setRoles(List.of(role.get()));
			trainer.setFirstName(updatedTrainer.getFirstName());
			trainer.setLastName(updatedTrainer.getLastName());
			trainer.setAddress(updatedTrainer.getAddress());
			trainer.setEmail(updatedTrainer.getEmail());
			trainer.setMobile(updatedTrainer.getMobile());
			trainer.setDesignation(updatedTrainer.getDesignation());
			trainer.setUser(user.get());
		}

		return trainerRepository.save(trainer);
	}

	@Override
	public Optional<Trainer> getTrainerById(Long trainerId) {
		// TODO Auto-generated method stub
		return trainerRepository.findById(trainerId);
	}

	@Override
	public Optional<Trainer> getTrainerByName(String trainerUsername) {
		// TODO Auto-generated method stub
		Optional<User> user = userRepository.findByUsername(trainerUsername);
		Optional<Trainer> trainer = trainerRepository.findByUser(user.get());
		return trainer;
	}

}
