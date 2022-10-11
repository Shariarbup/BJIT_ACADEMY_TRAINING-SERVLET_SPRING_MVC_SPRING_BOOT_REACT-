package com.bjitacademy.main.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.service.TrainerService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class TrainerController {
	@Autowired
	private TrainerService trainerService;
	
	@GetMapping("/trainers")
	public ResponseEntity<List<Trainer>> getAllTrainees() {
		return ResponseEntity.ok().body(trainerService.getAllTrainers());
	}
	
	@GetMapping("/trainers/{trainerId}")
    public ResponseEntity<Optional<Trainer>> getTrainerById(@PathVariable Long trainerId){
    	return ResponseEntity.ok().body(trainerService.getTrainerById(trainerId));
    }
	
	@GetMapping("/trainers/profile/{trainerUserName}")
    public ResponseEntity<Optional<Trainer>> getTrainerByUserName(@PathVariable String trainerUserName){
    	return ResponseEntity.ok().body(trainerService.getTrainerByName(trainerUserName));
    }
	
	@PostMapping("/trainers")
    public ResponseEntity<Trainer> createTrainer(@RequestBody Trainer trainer) {
    	URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/trainers").toUriString());
    	return ResponseEntity.created(uri).body(trainerService.saveTrainer(trainer));
    }
	
	@DeleteMapping("/trainers/{trainerId}")
    public ResponseEntity<Map<String, Boolean>> deleteTrainer(@PathVariable Long trainerId){
        return ResponseEntity.ok(trainerService.deleteTrainerById(trainerId));
    }
	
	@PutMapping("/trainers/{trainerId}")
    public ResponseEntity<Trainer> updateTrainerDetails(@PathVariable Long trainerId, @RequestBody Trainer updatedTrainer) {
        Trainer trainer = trainerService.updateTrainer(trainerId,updatedTrainer);
        return ResponseEntity.ok(trainer);
    }
}
