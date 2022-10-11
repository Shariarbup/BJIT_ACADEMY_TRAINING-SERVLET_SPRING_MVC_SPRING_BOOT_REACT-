package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.Batch;

public interface BatchService {
	List<Batch> getAllBatches();

	Batch saveBatch(Batch batch, String trainerName);

	Map<String, Boolean> deleteBatchById(Long id);

	Optional<Batch> getBatchById(Long id);

	Optional<Batch> getBatchByName(String name);

	Batch updateBatch(Long id, Batch updatedBatch);

	List<Batch> getBatchByTrainerUsername(String trainerUsername);
}
