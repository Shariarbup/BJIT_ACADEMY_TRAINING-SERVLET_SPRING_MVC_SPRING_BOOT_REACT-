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

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.service.TraineeService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class TraineeController {
	@Autowired
	private TraineeService traineeService;
	
	@GetMapping("/trainees")
	public ResponseEntity<List<Trainee>> getAllTrainees() {
		return ResponseEntity.ok().body(traineeService.getAllTrainees());
	}
	
	@GetMapping("/trainees/{traineeId}")
    public ResponseEntity<Optional<Trainee>> getTraineeById(@PathVariable Long traineeId){
    	return ResponseEntity.ok().body(traineeService.getTraineeById(traineeId));
    }
	@GetMapping("/trainees/profile/{traineeName}")
    public ResponseEntity<Optional<Trainee>> getTraineeByName(@PathVariable String traineeName){
    	return ResponseEntity.ok().body(traineeService.getTraineeByName(traineeName));
    }
	
	@PostMapping("/trainees")
    public ResponseEntity<Trainee> createTrainee(@RequestBody Trainee trainee) {
    	URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/trainees").toUriString());
    	return ResponseEntity.created(uri).body(traineeService.saveTrainee(trainee));
    }
	
	@DeleteMapping("/trainees/{traineeId}")
    public ResponseEntity<Map<String, Boolean>> deleteTrainee(@PathVariable Long traineeId){
        return ResponseEntity.ok(traineeService.deleteTraineeById(traineeId));
    }
	
	@PutMapping("/trainees/{traineeId}")
    public ResponseEntity<Trainee> updateTraineeDetails(@PathVariable Long traineeId, @RequestBody Trainee updatedTrainee) {
        Trainee trainee = traineeService.updateTrainee(traineeId,updatedTrainee);
        return ResponseEntity.ok(trainee);
    }
}
