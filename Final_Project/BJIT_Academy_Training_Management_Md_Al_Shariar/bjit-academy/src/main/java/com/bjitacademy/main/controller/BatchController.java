package com.bjitacademy.main.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.service.BatchService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
//@RequiredArgsConstructor
@RequestMapping("/api/v1")
@Slf4j
public class BatchController {
	@Autowired
	private BatchService batchService;

	@GetMapping("/batches")
	public ResponseEntity<List<Batch>> getAllBatches() {
		return ResponseEntity.ok().body(batchService.getAllBatches());
	}

	@GetMapping("/batches/{batchId}")
	public ResponseEntity<Optional<Batch>> getBatchById(@PathVariable Long batchId) {
		return ResponseEntity.ok().body(batchService.getBatchById(batchId));
	}

	@GetMapping("/batches/trainer/{trainerUsername}")
	public ResponseEntity<List<Batch>> getBatchById(@PathVariable String trainerUsername) {
		return ResponseEntity.ok().body(batchService.getBatchByTrainerUsername(trainerUsername));
	}

	@PostMapping("/batches/{trainerName}")
	public ResponseEntity<Batch> createBatch(@RequestBody Batch batch, @PathVariable String trainerName) {
		URI uri = URI
				.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/batches").toUriString());
		return ResponseEntity.created(uri).body(batchService.saveBatch(batch, trainerName));
	}

	@DeleteMapping("/batches/{batchId}")
	public ResponseEntity<Map<String, Boolean>> deleteBatch(@PathVariable Long batchId) {
		return ResponseEntity.ok(batchService.deleteBatchById(batchId));
	}

	@PutMapping("/batches/{batchId}")
	public ResponseEntity<Batch> updateBatchDetails(@PathVariable Long batchId, @RequestBody Batch updatedBatch) {
		Batch batch = batchService.updateBatch(batchId, updatedBatch);
		return ResponseEntity.ok(batch);
	}

}
