package com.bjit.dao;

import com.bjit.model.*;
import java.sql.*;
import java.io.*;
import java.util.*;

//The DAO class provides the CRUD operation for the table student in the database
public class StudentDAO {
	static final String JDBC_URL = "jdbc:mysql://localhost:3306/university";
	// Database credentials
	static final String JDBC_USER = "root";
	static final String JDBC_PASS = "";
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	
	private static final String INSERT_STUDENT_SQL = "insert into student(name, email, country) values(?,?,?)";
	private static final String SELECT_STUDENT_BY_ID_SQL = "select id,name,email,country from student where id= ?";
	private static final String SELECT_ALL_STUDENT_SQL = "select * from student";
	private static final String DELETE_STUDENT_SQL = "delete from student where id= ?";
	private static final String UPDATE_STUDENT_SQL = "update student set name= ?,email= ?,country= ? where id= ?";
	
	protected static Connection getConnection() {
		Connection connection = null;
		try {
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(JDBC_URL,JDBC_USER,JDBC_PASS);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return connection;
	}
	
	//create or insert student
	public static void insertStudent(Student student) {
		try {
			Connection connection = getConnection();
			PreparedStatement pmt = connection.prepareStatement(INSERT_STUDENT_SQL);
			pmt.setString(1, student.getName());
			pmt.setString(2, student.getEmail());
			pmt.setString(2, student.getEmail());
			pmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	//update student
	public static boolean updateStudent(Student student) {
		boolean rowUpdated = false;
		try {
			Connection connection = getConnection();
			PreparedStatement pmt = connection.prepareStatement(UPDATE_STUDENT_SQL);
			pmt.setString(1, student.getName());
			pmt.setString(2, student.getEmail());
			pmt.setString(2, student.getEmail());
			pmt.executeUpdate();
			rowUpdated = pmt.executeUpdate() > 0;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return rowUpdated;
	}
	
	//select student by id
	public static Student selectStudent(int id) {
		Student student = null;
		try {
			Connection connection = getConnection();
			PreparedStatement pmt = connection.prepareStatement(SELECT_STUDENT_BY_ID_SQL);
			ResultSet rs = pmt.executeQuery();
			while(rs.next()) {
				String name = rs.getString("name");
				String email = rs.getString("email");
				String country = rs.getString("country");
				student = new Student(name, email, country);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return student;
	}
	
	//select student
	public static List<Student> selectAllStudents() {

		List<Student> students = new ArrayList<>();
		try{
			Connection connection = getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_STUDENT_SQL);
			System.out.println(preparedStatement);
			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				String email = rs.getString("email");
				String country = rs.getString("country");
				students.add(new Student(id, name, email, country));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return students;
	}
	
	//delete student
	public static boolean deleteStudent(int id){
		boolean rowDeleted=false;
		try{
			Connection connection = getConnection();
			PreparedStatement statement = connection.prepareStatement(DELETE_STUDENT_SQL);
			statement.setInt(1, id);
			rowDeleted = statement.executeUpdate() > 0;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return rowDeleted;
	}
	
}
