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

import com.bjitacademy.main.model.Assignment;
import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.service.AssignmentService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class AssignmentController {
	@Autowired
	private AssignmentService assignmentService;

	@GetMapping("/assignments")
	public ResponseEntity<List<Assignment>> getAllAssignments() {
		return ResponseEntity.ok().body(assignmentService.getAllAssignments());
	}

	@GetMapping("/assignments/{assignmentId}")
	public ResponseEntity<Optional<Assignment>> getBatchById(@PathVariable Long assignmentId) {
		return ResponseEntity.ok().body(assignmentService.getAssignmentById(assignmentId));
	}

	@PostMapping("/assignments")
	public ResponseEntity<Assignment> createAssignment(@RequestBody Assignment assignment) {
		URI uri = URI
				.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/assignments").toUriString());
		return ResponseEntity.created(uri).body(assignmentService.saveAssignment(assignment));
	}

	@DeleteMapping("/assignments/{assignmentId}")
	public ResponseEntity<Map<String, Boolean>> deleteAssignment(@PathVariable Long assignmentId) {
		return ResponseEntity.ok(assignmentService.deleteAssignmentById(assignmentId));
	}

	@PutMapping("/assignments/{assignmentId}")
	public ResponseEntity<Assignment> updateBatchDetails(@PathVariable Long assignmentId,
			@RequestBody Assignment updatedAssignment) {
		Assignment assignment = assignmentService.updateAssignment(assignmentId, updatedAssignment);
		return ResponseEntity.ok(assignment);
	}
}
