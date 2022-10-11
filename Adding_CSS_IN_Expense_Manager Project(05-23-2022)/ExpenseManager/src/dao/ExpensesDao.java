package dao;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServletResponse;

import com.mysql.cj.protocol.Resultset;
import java.util.*;

import model.Expenses;

public class ExpensesDao {
	static final String JDBC_URL = "jdbc:mysql://localhost:3306/bjit";
	// Database credentials
	static final String JDBC_USER = "root";
	static final String JDBC_PASS = "";
	static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";

	public Connection getDatabaseConnection() {
		Connection con = null;
		try {
			Class.forName(JDBC_DRIVER);
			con = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASS);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
	}

	public void insertExpenses(Expenses expenses) {
		// TODO Auto-generated method stub
		String insertExpenseSql = "INSERT INTO expenses(expense_category, expense_date, expense_name, expense_description, expense_amount) VALUES(?,?,?,?,?)";
		try {
			Connection con = getDatabaseConnection();
			System.out.println("Database connected");
			PreparedStatement pst = con.prepareStatement(insertExpenseSql);
			pst.setString(1, expenses.getExpenseCategory());
			pst.setDate(2, expenses.getDate());
			pst.setString(3, expenses.getExpenseName());
			pst.setString(4, expenses.getDescription());
			pst.setInt(5, expenses.getAmount());
			pst.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public ResultSet getAllResultSet() {
		ResultSet resultSet = null;
		Connection connection = getDatabaseConnection();
		String sql = "SELECT * FROM expenses ORDER BY expense_date DESC";
		try {
			PreparedStatement pst = connection.prepareStatement(sql);
			resultSet = pst.executeQuery();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return resultSet;
	}

	public ResultSet filterByDateAllExpenses(Date expenseDate) {
		ResultSet resultSet = null;
		Connection connection = getDatabaseConnection();
		String sql = "SELECT * FROM expenses where expense_date=?";
		try {
			PreparedStatement pst = connection.prepareStatement(sql);
			pst.setDate(1, expenseDate);
			resultSet = pst.executeQuery();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return resultSet;
	}
}
