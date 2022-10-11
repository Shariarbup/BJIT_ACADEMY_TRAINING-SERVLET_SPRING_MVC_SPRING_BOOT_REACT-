package com.bjit.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.bjit.model.Student;

@Repository
public class StudentDaoImpl implements StudentDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public int save(Student student) {
		return jdbcTemplate.update("insert into student (name, address, phone) values(?,?,?)", student.getName(),
				student.getAddress(), student.getPhone());
	};

	@Override
	public int update(Student student) {
		return jdbcTemplate.update("update student set name = ? where id = ?", student.getName(), student.getId());
	};

	@Override
	public List<Student> findAllStudent() {
		return jdbcTemplate.query("select * from student", (rs, rowNum) -> new Student(rs.getInt("id"),
				rs.getString("name"), rs.getString("address"), rs.getString("phone")));
	};

	@Override
	public Optional<Student> findById(int id) {
		return jdbcTemplate.queryForObject("select * from student where id = ?", new Object[] { id }, (rs,
				rowNum) -> Optional.of(new Student(rs.getInt("id"), rs.getString("name"), rs.getString("address"), rs.getString("phone"))));
	}
}
