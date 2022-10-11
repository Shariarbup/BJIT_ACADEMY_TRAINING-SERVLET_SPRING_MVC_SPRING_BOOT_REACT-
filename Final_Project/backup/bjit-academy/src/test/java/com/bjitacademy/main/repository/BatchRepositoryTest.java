package com.bjitacademy.main.repository;

import java.util.List;
import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.Trainer;

@SpringBootTest
public class BatchRepositoryTest {
	@Autowired
	private BatchRepository batchRepository;
	
	@Test
	public void saveBatchWithMultipleTeacher() {
		Trainer trainer1 = Trainer.builder()
				.address("Mirpur 10")
				.firstName("Zulker")
				.lastName("Nayem")
				.designation("Software Engineer")
				.email("Zulker.Nayem@Gmail.com")
				.mobile("01956784352")
				.build();
		Trainer trainer2 = Trainer.builder()
				.address("Baridhara")
				.firstName("Abu")
				.lastName("Hasan")
				.designation("Senior Software Engineer")
				.email("Abu.Hasan@Gmail.com")
				.mobile("01956734567")
				.build();
		Batch batch = Batch.builder()
				.name("Fresh_batch-07(Mearn Stack)")
				.startDate("2022-07-13")
				.endDate("2022-10-13")
				.trainers(List.of(trainer1, trainer2))
				.build();
		batchRepository.save(batch);
	}
	
	@Test
	public void getAllBatches() {
		List<Batch> batches = batchRepository.findAll();
		System.out.println("Batches: "+ batches);
	}
}
