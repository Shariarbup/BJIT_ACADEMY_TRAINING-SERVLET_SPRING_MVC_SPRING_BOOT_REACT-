package com.erp.main.entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty(message = "First Name should not be blank.")
	@Size(min = 1, max = 20,message = "First name must be 1-20 characters.")
	@Column(nullable = false, length = 20)
	private String firstName;
	
	@NotEmpty(message = "Last Name should not be blank.")
	@Size(min = 1, max = 20,message = "Last name must be 1-20 characters.")
	@Column(nullable = false, length = 20)
	private String lastName;
	
	@Email(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
	@Column(nullable = false, unique = true, length = 45)
	private String email;

	@Column(nullable = false, length = 64)
	@NotEmpty
	private String password;
	
	@NotEmpty(message = "Address should not be blank.")
	@Column(nullable = true)
	private String address;
	
	@NotEmpty(message = "Joining Date should not be blank.")
	@Column(nullable = true)
	private String joiningDate;

	@ManyToMany(fetch = FetchType.EAGER,
			cascade = CascadeType.MERGE
			)
	@JoinTable(name = "user_roles", 
		joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), 
		inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")
		)
	private Collection<Role> roles;

	public User(String firstName, String lastName, String email, String password, String address, String joiningDate,
			Collection<Role> roles) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.address = address;
		this.joiningDate = joiningDate;
		this.roles = roles;
	}

}
