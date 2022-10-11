package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.exception.ResourceNotFoundException;
import com.bjitacademy.main.model.Assignment;
import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.repository.AssignmentRepository;
import com.bjitacademy.main.repository.BatchRepository;
import com.bjitacademy.main.service.AssignmentService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class AssignmentServiceImpl implements AssignmentService {
	@Autowired
	private AssignmentRepository assignmentRepository;

	@Autowired
	private BatchRepository batchRepository;

	@Override
	public List<Assignment> getAllAssignments() {

		return assignmentRepository.findAll();
	}

	@Override
	public Assignment saveAssignment(Assignment assignment) {
		log.info("Saving new Assignment {} to the database", assignment.getTitle());
		String batchName = assignment.getBatch().getName();
		log.info("Batch name " + batchName);
		Optional<Batch> batch = batchRepository.findByName(batchName);
		if (!batch.isEmpty()) {
			assignment.setBatch(batch.get());
		}
		return assignmentRepository.save(assignment);
	}

	@Override
	public Map<String, Boolean> deleteAssignmentById(Long assignmentId) {
		assignmentRepository.deleteById(assignmentId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public Assignment updateAssignment(Long assignmentId, Assignment updatedAssignment) {
		String batchName = updatedAssignment.getBatch().getName();
		Optional<Batch> batch = batchRepository.findByName(batchName);
		Assignment assignment = assignmentRepository.findById(assignmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Batch Info not found"));
		if (!batch.isEmpty()) {
			assignment.setTitle(updatedAssignment.getTitle());
			assignment.setDescription(updatedAssignment.getDescription());
			assignment.setSubmissionDate(updatedAssignment.getSubmissionDate());
			assignment.setAssignmentMark(updatedAssignment.getAssignmentMark());
			assignment.setBatch(batch.get());
		}
		return assignmentRepository.save(assignment);
	}

	@Override
	public Optional<Assignment> getAssignmentById(Long assignmentId) {
		// TODO Auto-generated method stub
		return assignmentRepository.findById(assignmentId);
	}

	@Override
	public Optional<Assignment> getAssignmentByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}
