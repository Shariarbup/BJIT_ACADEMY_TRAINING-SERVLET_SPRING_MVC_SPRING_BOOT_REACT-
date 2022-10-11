package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.AssignmentMark;



public interface AssignmentMarkService {
	List<AssignmentMark> getAllAssignmentMarks();

	AssignmentMark saveAssignmentMark(AssignmentMark assignmentMark);

	Map<String, Boolean> deleteAssignmentMarkById(Long id);

	Optional<AssignmentMark> getAssignmentMarkById(Long id);

	Optional<AssignmentMark> getAssignmentMarkByName(String name);

	AssignmentMark updateAssignmentMark(Long id, AssignmentMark assignmentMark);
}
