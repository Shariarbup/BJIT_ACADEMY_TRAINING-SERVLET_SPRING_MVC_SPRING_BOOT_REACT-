package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.OrderBy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.exception.ResourceNotFoundException;
import com.bjitacademy.main.model.Assignment;
import com.bjitacademy.main.model.AssignmentMark;
import com.bjitacademy.main.model.Trainee;
import com.bjitacademy.main.model.User;
import com.bjitacademy.main.repository.AssignmentMarkRepository;
import com.bjitacademy.main.repository.AssignmentRepository;
import com.bjitacademy.main.repository.TraineeRepository;
import com.bjitacademy.main.repository.UserRepository;
import com.bjitacademy.main.service.AssignmentMarkService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class AssignmentMarkServiceImpl implements AssignmentMarkService {
	@Autowired
	private AssignmentMarkRepository assignmentMarkRepository;

	@Autowired
	private TraineeRepository traineeRepository;

	@Autowired
	private AssignmentRepository assignmentRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<AssignmentMark> getAllAssignmentMarks() {

		return assignmentMarkRepository.findAll();
	}

	@Override
	public AssignmentMark saveAssignmentMark(AssignmentMark assignmentMark) {
		Long assignmentId = assignmentMark.getAssignment().getAssignmentId();
		Optional<Assignment> assignment = assignmentRepository.findById(assignmentId);
		assignmentMark.setAssignment(assignment.get());
		assignmentMark.setAcquireMark(-1);
		return assignmentMarkRepository.save(assignmentMark);
	}

	@Override
	public Map<String, Boolean> deleteAssignmentMarkById(Long assignmentMarkId) {
		assignmentMarkRepository.deleteById(assignmentMarkId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public AssignmentMark updateAssignmentMark(Long assignmentMarkId, AssignmentMark updatedAssignmentMark) {
//		String traineeUserName = updatedAssignmentMark.getTrainee().getUser().getUsername();

		log.info("Assignment MArk update");
		Long assignmentId = updatedAssignmentMark.getAssignment().getAssignmentId();
		log.info("Assignment mark Assignment ID: " + assignmentId);
		Optional<Assignment> assignment = assignmentRepository.findById(assignmentId);

		AssignmentMark assignmentMark = assignmentMarkRepository.findById(assignmentMarkId)
				.orElseThrow(() -> new ResourceNotFoundException("Assignment Mark Info not found"));
		assignmentMark.setAcquireMark(updatedAssignmentMark.getAcquireMark());
		assignmentMark.setSubmissionUrl(updatedAssignmentMark.getSubmissionUrl());
		assignmentMark.setAssignment(assignment.get());
		assignmentMark.setTraineeUsername(updatedAssignmentMark.getTraineeUsername());

		return assignmentMarkRepository.save(assignmentMark);
	}

	@Override
	public Optional<AssignmentMark> getAssignmentMarkById(Long assignmentMarkId) {
		// TODO Auto-generated method stub
		return assignmentMarkRepository.findById(assignmentMarkId);
	}

	@Override
	public Optional<AssignmentMark> getAssignmentMarkByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}
