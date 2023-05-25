package ch10;

import java.sql.Connection;
import java.sql.DriverManager;

public class NewsDAO {
	final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
	final String JDBC_URL = "jdbc:mysql://localhost:3306/jwbook";
	
	// DB 연결을 가져오는 메서드
	public Connection open() {
		Connection conn = null;
		try {
			Class.forName(JDBC_DRIVER);
			conn = DriverManager.getConnection(JDBC_URL, "root", "!ALS@gur4438");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}
