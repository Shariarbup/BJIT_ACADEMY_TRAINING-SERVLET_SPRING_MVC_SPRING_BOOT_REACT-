package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.Trainee;

public interface TraineeService {
	List<Trainee> getAllTrainees();

	Trainee saveTrainee(Trainee trainee);

	Map<String, Boolean> deleteTraineeById(Long id);

	Optional<Trainee> getTraineeById(Long id);

	Optional<Trainee> getTraineeByName(String name);

	Trainee updateTrainee(Long id, Trainee updatedTrainee);

	List<Trainee> getTraineeByBatchId(Long batchId);
}
