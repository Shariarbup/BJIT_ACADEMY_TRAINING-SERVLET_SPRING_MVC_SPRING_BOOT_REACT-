package com.erp.main.service.impl;

import java.util.Collection;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.erp.main.entity.Role;
import com.erp.main.repository.RoleRepository;
import com.erp.main.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService {
	private RoleRepository roleRepository;

	public RoleServiceImpl(RoleRepository roleRepository) {
		super();
		this.roleRepository = roleRepository;
	}

	@Override
	public Collection<Role> getRoles() {
		// TODO Auto-generated method stub
		
		Collection<Role> roles = roleRepository.findAll();
		return roles;
	}

	@Override
	public Role getRoleById(Long id) {
		// TODO Auto-generated method stub
		Role role = roleRepository.getById(id);
		return role;
	}
}
