package com.main.springdatajpa.repository;

import com.main.springdatajpa.entity.CourseMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursemaerialRepository extends JpaRepository<CourseMaterial, Long> {
}
