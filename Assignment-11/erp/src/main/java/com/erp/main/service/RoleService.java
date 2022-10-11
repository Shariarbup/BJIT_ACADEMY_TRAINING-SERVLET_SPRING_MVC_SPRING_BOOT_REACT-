package com.erp.main.service;

import java.util.Collection;
import java.util.Optional;

import com.erp.main.entity.Role;

public interface RoleService {
	Collection<Role> getRoles();
	Role getRoleById(Long id);
}
