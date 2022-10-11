package com.bjitacademy.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
	Optional<Course> findByName(String name);
}
