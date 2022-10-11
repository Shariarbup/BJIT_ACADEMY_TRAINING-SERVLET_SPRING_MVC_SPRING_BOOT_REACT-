package com.bjitacademy.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.User;

public interface TraineeRepository extends JpaRepository<Trainee, Long>{
	Optional<Trainee> findByUser(User user);
}
