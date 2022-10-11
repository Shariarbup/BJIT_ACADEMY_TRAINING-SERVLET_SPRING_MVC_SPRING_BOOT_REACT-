package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.Trainer;

public interface TrainerService {
	List<Trainer> getAllTrainers();

	Trainer saveTrainer(Trainer trainee);

	Map<String, Boolean> deleteTrainerById(Long id);

	Optional<Trainer> getTrainerById(Long id);

	Optional<Trainer> getTrainerByName(String name);

	Trainer updateTrainer(Long id, Trainer updatedTrainer);
}
