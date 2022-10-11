package com.bjitacademy.main.dto;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.bjitacademy.main.model.Batch;
import com.bjitacademy.main.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TraineeDto {
	private Long traineeId;
	private String firstName;
	private String lastName;
	private String address;
	private String email;
	private String designation;
	private String mobile;
	private String batchName;
	private String username;
	private String password;
}
