package com.bjitacademy.main.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bjitacademy.main.exception.ResourceNotFoundException;
import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Course;
import com.bjitacademy.main.model.Trainer;
import com.bjitacademy.main.repository.BatchRepository;
import com.bjitacademy.main.repository.CourseRepository;
import com.bjitacademy.main.service.CourseService;

import lombok.extern.slf4j.Slf4j;

@Service
//@RequiredArgsConstructor
@Transactional // jodi amra kono role set kori then eita automatic database e oitake save kore
@Slf4j
public class CourseServiceImpl implements CourseService {
	@Autowired
	private CourseRepository courseRepository;

	@Autowired
	private BatchRepository batchRepository;

	@Override
	public List<Course> getAllCourses() {

		return courseRepository.findAll();
	}

	@Override
	public Course saveCourse(Course course) {
		log.info("Saving new trainer {} to the database", course.getName());
		String batchName = course.getBatch().getName();
		log.info("Batch name " + batchName);
		Optional<Batch> batch = batchRepository.findByName(batchName);
		if (!batch.isEmpty()) {
			course.setBatch(batch.get());
		}
		return courseRepository.save(course);
	}

	@Override
	public Map<String, Boolean> deleteCourseById(Long courseId) {
		courseRepository.deleteById(courseId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@Override
	public Course updateCourse(Long courseId, Course updatedCourse) {
		String batchName = updatedCourse.getBatch().getName();
		System.out.println("batch Name " + batchName);
		log.info(batchName);

		Optional<Batch> batch = batchRepository.findByName(batchName);
		Course course = courseRepository.findById(courseId)
				.orElseThrow(() -> new ResourceNotFoundException("Trainer Info not found"));
		if (!batch.isEmpty()) {
			course.setName(updatedCourse.getName());
			course.setDescription(updatedCourse.getDescription());
			course.setBatch(batch.get());
		}

		return courseRepository.save(course);

	}

	@Override
	public Optional<Course> getCourseById(Long courseId) {
		// TODO Auto-generated method stub
		return courseRepository.findById(courseId);
	}

	@Override
	public Optional<Course> getCourseByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Course> getCourseByTrainerBatchId(Long batchId) {
		// TODO Auto-generated method stub
		Optional<Batch> batch = batchRepository.findById(batchId);
		List<Course> courses = courseRepository.findByBatch(batch.get());
		return courses;
	}
}
