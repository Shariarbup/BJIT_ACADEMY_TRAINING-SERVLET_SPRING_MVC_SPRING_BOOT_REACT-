package com.bjitacademy.main.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bjitacademy.main.model.CourseSession;



public interface CourseSessionService {
	List<CourseSession> getAllCourseSessions();

	CourseSession saveCourseSession(CourseSession courseSession);

	Map<String, Boolean> deleteCourseSessionById(Long id);

	Optional<CourseSession> getCourseSessionById(Long id);

	Optional<CourseSession> getCourseSessionByName(String name);

	CourseSession updateCourseSession(Long id, CourseSession updatedCourseSession);

	List<CourseSession> getCourseSessionByCourseId(Long courseId);
}
