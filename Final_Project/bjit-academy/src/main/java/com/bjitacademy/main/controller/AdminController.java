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

import com.bjitacademy.main.model.Admin;
import com.bjitacademy.main.service.AdminService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class AdminController {
	@Autowired
	private AdminService adminService;

	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> getAllAdmins() {
		return ResponseEntity.ok().body(adminService.getAllAdmins());
	}

	@GetMapping("/admins/{adminId}")
	public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable Long adminId) {
		return ResponseEntity.ok().body(adminService.getAdminById(adminId));
	}

	@GetMapping("/admins/profile/{adminName}")
	public ResponseEntity<Optional<Admin>> getAdminByName(@PathVariable String adminName) {
		return ResponseEntity.ok().body(adminService.getAdminByName(adminName));
	}

	@PostMapping("/admins")
	public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin) {
		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/v1/admins").toUriString());
		return ResponseEntity.created(uri).body(adminService.saveAdmin(admin));
	}

	@DeleteMapping("/admins/{adminId}")
	public ResponseEntity<Map<String, Boolean>> deleteAdmin(@PathVariable Long adminId) {
		return ResponseEntity.ok(adminService.deleteAdminById(adminId));
	}

	@PutMapping("/admins/{adminId}")
	public ResponseEntity<Admin> updateTrainerDetails(@PathVariable Long adminId, @RequestBody Admin updatedAdmin) {
		Admin admin = adminService.updateAdmin(adminId, updatedAdmin);
		return ResponseEntity.ok(admin);
	}

}
