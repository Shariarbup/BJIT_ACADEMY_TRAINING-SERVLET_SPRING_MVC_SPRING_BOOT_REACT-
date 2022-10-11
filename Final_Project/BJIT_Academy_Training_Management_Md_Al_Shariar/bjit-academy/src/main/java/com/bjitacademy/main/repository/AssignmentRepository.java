package com.bjitacademy.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Long>{

}
