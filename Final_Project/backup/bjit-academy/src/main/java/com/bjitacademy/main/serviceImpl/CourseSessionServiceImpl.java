package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.model.Course;
import com.bjitacademy.main.model.CourseSession;
import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.repository.CourseRepository;
import com.bjitacademy.main.repository.CourseSessionRepository;
import com.bjitacademy.main.repository.TraineeRepository;
import com.bjitacademy.main.repository.TrainerRepository;
import com.bjitacademy.main.service.CourseSessionService;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class CourseSessionServiceImpl implements CourseSessionService{
	@Autowired
	private  CourseSessionRepository courseSessionRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private TrainerRepository trainerRepository;
	
	@Override
	public List<CourseSession> getAllCourseSessions() {
		// TODO Auto-generated method stub
		return courseSessionRepository.findAll();
	}

	@Override
	public CourseSession saveCourseSession(CourseSession courseSession) {
		// TODO Auto-generated method stub
		Optional<Trainer> trainer = trainerRepository.findByEmail(courseSession.getTrainer().getEmail());
		Optional<Course> course = courseRepository.findByName(courseSession.getCourse().getName());
		courseSession.setTrainer(trainer.get());
		courseSession.setCourse(course.get());
		return courseSessionRepository.save(courseSession);
	}

	@Override
	public Map<String, Boolean> deleteCourseSessionById(Long id) {
		// TODO Auto-generated method stub
		courseSessionRepository.deleteById(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;	 
	}

	@Override
	public Optional<CourseSession> getCourseSessionById(Long id) {
		// TODO Auto-generated method stub
		return courseSessionRepository.findById(id);
	}

	@Override
	public Optional<CourseSession> getCourseSessionByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CourseSession updateCourseSession(Long id, CourseSession updatedCourseSession) {
		// TODO Auto-generated method stub
		Optional<CourseSession> courseSession = courseSessionRepository.findById(id);
		Optional<Trainer> trainer = trainerRepository.findByEmail(updatedCourseSession.getTrainer().getEmail());
		Optional<Course> course = courseRepository.findByName(updatedCourseSession.getCourse().getName());
		if(!trainer.isEmpty()) {
			courseSession.get().setTrainer(trainer.get());
		}
		if(!course.isEmpty()) {
			courseSession.get().setCourse(course.get());
		}
		courseSession.get().setName(updatedCourseSession.getName());
		courseSession.get().setDescription(updatedCourseSession.getDescription());
		courseSession.get().setStartTime(updatedCourseSession.getStartTime());
		courseSession.get().setEndTime(updatedCourseSession.getEndTime());
		return courseSessionRepository.save(courseSession.get());
	}

	@Override
	public List<CourseSession> getCourseSessionByCourseId(Long courseId) {
		// TODO Auto-generated method stub
		Optional<Course> course = courseRepository.findById(courseId);
		List<CourseSession> courseSessions = courseSessionRepository.findByCourse(course.get());
		return courseSessions;
	}

}
