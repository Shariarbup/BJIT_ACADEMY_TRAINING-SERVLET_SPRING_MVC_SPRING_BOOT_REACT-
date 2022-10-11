package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.Course;



public interface CourseService {
	List<Course> getAllCourses();

	Course saveCourse(Course trainee);

	Map<String, Boolean> deleteCourseById(Long id);

	Optional<Course> getCourseById(Long id);

	Optional<Course> getCourseByName(String name);

	Course updateCourse(Long id, Course updatedCourse);

	List<Course> getCourseByTrainerBatchId(Long batchId);
}
