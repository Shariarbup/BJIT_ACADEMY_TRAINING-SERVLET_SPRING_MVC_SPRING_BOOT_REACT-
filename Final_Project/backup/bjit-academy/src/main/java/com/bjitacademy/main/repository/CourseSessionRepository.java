package com.bjitacademy.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bjitacademy.main.model.Course;
import com.bjitacademy.main.model.CourseSession;

public interface CourseSessionRepository extends JpaRepository<CourseSession, Long>{
	List<CourseSession>  findByCourse(Course course);
}
