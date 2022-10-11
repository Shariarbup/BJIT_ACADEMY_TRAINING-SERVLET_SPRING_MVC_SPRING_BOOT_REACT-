package com.bjitacademy.main.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import com.bjitacademy.main.model.AssignmentMark;
import com.bjitacademy.main.service.AssignmentMarkService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2")
@Slf4j
public class AssignmentMarkController {
	@Autowired
	private AssignmentMarkService assignmentMarkService;

	@GetMapping("/assignmentMarks")
	public ResponseEntity<List<AssignmentMark>> getAllAssignmentMarks() {
		return ResponseEntity.ok().body(assignmentMarkService.getAllAssignmentMarks());
	}

	@GetMapping("/assignmentMarks/{assignmentMarkstId}")
	public ResponseEntity<Optional<AssignmentMark>> getAssignmentMarkById(@PathVariable Long assignmentMarkstId) {
		return ResponseEntity.ok().body(assignmentMarkService.getAssignmentMarkById(assignmentMarkstId));
	}

	@PostMapping("/assignmentMarks")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_TRAINER','ROLE_TRAINEE')")
	public ResponseEntity<AssignmentMark> createAssignmentMark(@RequestBody AssignmentMark assignmentMark) {
		log.info("In Assignment Mark Controller class ");
		URI uri = URI.create(
				ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/assignmentMarks").toUriString());
		return ResponseEntity.created(uri).body(assignmentMarkService.saveAssignmentMark(assignmentMark));
	}

	@DeleteMapping("/assignmentMarks/{assignmentMarkId}")
	public ResponseEntity<Map<String, Boolean>> deleteAssignmentMark(@PathVariable Long assignmentMarkId) {
		return ResponseEntity.ok(assignmentMarkService.deleteAssignmentMarkById(assignmentMarkId));
	}

	@PutMapping("/assignmentMarks/{assignmentMarkId}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_TRAINER','ROLE_TRAINEE')")
	public ResponseEntity<AssignmentMark> updateBatchDetails(@PathVariable Long assignmentMarkId,
			@RequestBody AssignmentMark updatedAssignmentMark) {
		log.info("Assignment MArk PUT CONTROLLER");
		return ResponseEntity.ok(assignmentMarkService.updateAssignmentMark(assignmentMarkId, updatedAssignmentMark));
	}

}
