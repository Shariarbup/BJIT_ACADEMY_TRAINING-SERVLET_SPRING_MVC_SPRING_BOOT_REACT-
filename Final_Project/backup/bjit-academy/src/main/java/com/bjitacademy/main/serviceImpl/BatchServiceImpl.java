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
import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.model.User;
import com.bjitacademy.main.repository.BatchRepository;
import com.bjitacademy.main.repository.TrainerRepository;
import com.bjitacademy.main.repository.UserRepository;
import com.bjitacademy.main.service.BatchService;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class BatchServiceImpl implements BatchService {
	@Autowired
	private BatchRepository batchRepository;
	
	@Autowired
	private TrainerRepository trainerRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<Batch> getAllBatches() {

		return batchRepository.findAll();
	}

	@Override
	public Batch saveBatch(Batch batch, String trainerName) {
		log.info("Saving new batch {} to the database", batch.getName());
		Trainer trainer = trainerRepository.findByLastName(trainerName);
		batch.addTrainer(trainer);		
		return batchRepository.save(batch);
	}

	@Override
	public Map<String, Boolean> deleteBatchById(Long batchId) {
		batchRepository.deleteById(batchId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	@Override
	public Batch updateBatch(Long batchId, Batch updatedBatch) {
		Batch batch = batchRepository.findById(batchId).orElseThrow(()-> new ResourceNotFoundException("Batch Info not found"));
		batch.setName(updatedBatch.getName());
		batch.setDescription(updatedBatch.getDescription());
		batch.setStartDate(updatedBatch.getStartDate());
		batch.setEndDate(updatedBatch.getEndDate());
		batch.setTrainers(updatedBatch.getTrainers());
		return batchRepository.save(batch);
	}

	@Override
	public Optional<Batch> getBatchById(Long batchId) {
		// TODO Auto-generated method stub
		return batchRepository.findById(batchId);
	}

	@Override
	public Optional<Batch> getBatchByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Batch> getBatchByTrainerUsername(String trainerUsername) {
		// TODO Auto-generated method stub
		Optional<User> user = userRepository.findByUsername(trainerUsername);
		Optional<Trainer> trainer = trainerRepository.findByUser(user.get());
		List<Batch> batches = batchRepository.findByTrainers(trainer.get());
		return batches;
	}

	

}
