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

import com.bjitacademy.main.model.CourseSession;
import com.bjitacademy.main.service.CourseSessionService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class CourseSessionController {
	@Autowired
	private CourseSessionService courseSessionService;

	@GetMapping("/courseSessions")
	public ResponseEntity<List<CourseSession>> getAllCourseSessions() {
		return ResponseEntity.ok().body(courseSessionService.getAllCourseSessions());
	}

	@GetMapping("/courseSessions/{courseSessionId}")
	public ResponseEntity<Optional<CourseSession>> getCourseSessionById(@PathVariable Long courseSessionId) {
		return ResponseEntity.ok().body(courseSessionService.getCourseSessionById(courseSessionId));
	}

	@GetMapping("/courseSessions/course/{courseId}")
	public ResponseEntity<List<CourseSession>> getCourseSessionByCourseId(@PathVariable Long courseId) {
		return ResponseEntity.ok().body(courseSessionService.getCourseSessionByCourseId(courseId));
	}

	@PostMapping("/courseSessions")
	public ResponseEntity<CourseSession> createCourseSession(@RequestBody CourseSession courseSession) {
		URI uri = URI.create(
				ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/courseSessions").toUriString());
		return ResponseEntity.created(uri).body(courseSessionService.saveCourseSession(courseSession));
	}

	@DeleteMapping("/courseSessions/{courseSessionId}")
	public ResponseEntity<Map<String, Boolean>> deleteCourseSessionById(@PathVariable Long courseSessionId) {
		return ResponseEntity.ok(courseSessionService.deleteCourseSessionById(courseSessionId));
	}

	@PutMapping("/courseSessions/{courseSessionId}")
	public ResponseEntity<CourseSession> updateCourseSessionDetails(@PathVariable Long courseSessionId,
			@RequestBody CourseSession updatedCourseSession) {
		CourseSession courseSession = courseSessionService.updateCourseSession(courseSessionId, updatedCourseSession);
		return ResponseEntity.ok(courseSession);
	}
}
