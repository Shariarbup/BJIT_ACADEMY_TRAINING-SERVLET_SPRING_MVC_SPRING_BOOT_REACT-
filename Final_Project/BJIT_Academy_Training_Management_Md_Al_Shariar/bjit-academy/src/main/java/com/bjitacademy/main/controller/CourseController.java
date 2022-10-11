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

import com.bjitacademy.main.model.Course;
import com.bjitacademy.main.service.CourseService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class CourseController {
	@Autowired
	private CourseService courseService;

	@GetMapping("/courses")
	public ResponseEntity<List<Course>> getAllCourses() {
		return ResponseEntity.ok().body(courseService.getAllCourses());
	}

	@GetMapping("/courses/{courseId}")
	public ResponseEntity<Optional<Course>> getCourseById(@PathVariable Long courseId) {
		return ResponseEntity.ok().body(courseService.getCourseById(courseId));
	}

	@GetMapping("/courses/trainerBatch/{batchId}")
	public ResponseEntity<List<Course>> getCourseByTrainerBatchId(@PathVariable Long batchId) {
		return ResponseEntity.ok().body(courseService.getCourseByTrainerBatchId(batchId));
	}

	@PostMapping("/courses")
	public ResponseEntity<Course> createCourse(@RequestBody Course course) {
		URI uri = URI
				.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/trainees").toUriString());
		return ResponseEntity.created(uri).body(courseService.saveCourse(course));
	}

	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Long courseId) {
		return ResponseEntity.ok(courseService.deleteCourseById(courseId));
	}

	@PutMapping("/courses/{courseId}")
	public ResponseEntity<Course> updateCourseDetails(@PathVariable Long courseId, @RequestBody Course updatedCourse) {
		Course course = courseService.updateCourse(courseId, updatedCourse);
		return ResponseEntity.ok(course);
	}

}
