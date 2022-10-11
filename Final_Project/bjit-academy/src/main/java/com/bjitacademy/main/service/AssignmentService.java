package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.Assignment;

public interface AssignmentService {
	List<Assignment> getAllAssignments();

	Assignment saveAssignment(Assignment assignment);

	Map<String, Boolean> deleteAssignmentById(Long id);

	Optional<Assignment> getAssignmentById(Long id);

	Optional<Assignment> getAssignmentByName(String name);

	Assignment updateAssignment(Long id, Assignment updatedAssignment);
}
