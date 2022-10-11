package com.bjitacademy.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.model.User;

public interface TrainerRepository extends JpaRepository<Trainer, Long>{
	Trainer findByLastName(String lastName);
	Optional<Trainer> findByEmail(String email);
	Optional<Trainer> findByUser(User user);
}
