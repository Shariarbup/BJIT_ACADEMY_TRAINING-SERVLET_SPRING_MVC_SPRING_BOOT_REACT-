package com.bjitacademy.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Trainer;

public interface BatchRepository extends JpaRepository<Batch, Long>{
	Optional<Batch> findByName(String name);
	List<Batch> findByTrainers(Trainer trainers);
}
