package com.bjitacademy.main.repository;

import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Course;
import com.bjitacademy.main.model.Trainer;

@SpringBootTest
public class CourseRepositoryTest {
	@Autowired
	private CourseRepository courseRepository;
	
	@Test
	public void saveCourseWithTrainerAndBatch() {
		Trainer trainer = Trainer.builder()
				.address("Dhaka cantt")
				.firstName("Mohammad")
				.lastName("Yusuf")
				.designation("Senior Software Engineer")
				.email("mohammad.yousuf@Gmail.com")
				.mobile("01956734567")
				.build();
		Batch batch = Batch.builder()
				.name("Fresh_batch-08(Android Stack)")
				.startDate("2022-07-13")
				.endDate("2022-10-13")
				.trainers(List.of(trainer))
				.build();
		Course course = Course.builder()
				.name("Java Fundamentals")
				.description("Collection Framework, Lamda function, Functional Interface")
				.batch(batch)
				.build();
		courseRepository.save(course);
	}

}
