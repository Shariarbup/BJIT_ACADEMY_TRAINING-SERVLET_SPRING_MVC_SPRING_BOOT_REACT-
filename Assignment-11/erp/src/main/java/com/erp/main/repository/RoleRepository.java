package com.erp.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erp.main.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
