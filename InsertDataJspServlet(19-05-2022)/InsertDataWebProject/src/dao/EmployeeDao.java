package dao;
import java.sql.*;

import model.Employee;
public class EmployeeDao {
	static final String JDBC_URL = "jdbc:mysql://localhost:3306/bjit";
	// Database credentials
	static final String JDBC_USER = "root";
	static final String JDBC_PASS = "";
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	
	public Connection getDatabaseConnection() {
		Connection con = null;
		try {
			Class.forName(JDBC_DRIVER);
			con = DriverManager.getConnection(JDBC_URL,JDBC_USER,JDBC_PASS);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return con;
	}

	public void createEmployee(Employee emp) {
		Connection con = getDatabaseConnection();
		String sql = "INSERT INTO employee(name, designation, phone) VALUES(?,?,?)";
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, emp.getName());
			ps.setString(2, emp.getDesignation());
			ps.setString(3, emp.getPhone());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	public ResultSet getAllEmployee() {
		Connection con = getDatabaseConnection();
		String sql = "";
		sql = "SELECT * FROM employee";
		ResultSet result=null;
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			result=ps.executeQuery();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			result=null;
			e.printStackTrace();
		}
		return result;
	}
}
