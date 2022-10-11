
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCDao {
	// JDBC driver name and database URL
	// For oracle: jdbc:oracle:thin:@localhost:1521:XE
	// For mysql: jdbc:mysql://localhost:3306/testdb

	static final String DB_URL = "jdbc:mysql://localhost:3306/course";
	// Database credentials
	static final String USER = "root";
	static final String PASS = "";
	static final String JDBCDRIVER = "com.mysql.jdbc.Driver";

	public void loadDriver(String driver) {
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public Connection getDatabaseConnection() {
		loadDriver(JDBCDRIVER);
		Connection conn = null;
		try {
			System.out.println("Connecting to the  database...");
			conn = DriverManager.getConnection(DB_URL, USER, PASS);
			System.out.println("Connected!");
		} catch (SQLException se) {
			// Handle errors for JDBC
			se.printStackTrace();
		}
		return conn;
	}
	
	public void createCourseTable() {
		Connection con = getDatabaseConnection();
		String sql = "";
		sql = "CREATE TABLE IF NOT EXISTS course (" + " course_id int NOT NULL AUTO_INCREMENT," + " course_name VARCHAR(255), "
				+ "total_hours int(3), primary key (course_id)" + ")";
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public String insertData(Course course) {
		Connection con = getDatabaseConnection();
		String sql = "";
		sql = "INSERT INTO course (course_name,total_hours) VALUES (?,?)";
		String result="Data Entered Successfully";
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, course.getName());
			ps.setInt(2, course.getTotalHour());
			ps.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			result="Data Not Entered Successfully";
			e.printStackTrace();
		}
		return result;
	}



}
