<%@page import="java.sql.ResultSet"%>
<%@page import="dao.EmployeeDao"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%
	EmployeeDao dao = new EmployeeDao();

	ResultSet rs = dao.getAllEmployee();
%>

<!DOCTYPE html>

<html>
	<head>
	<meta charset="ISO-8859-1">
	<title>Register Employee</title>
	</head>
	<body>
	
	<%
	while(rs.next()){
	%>
	<table border="1">
		<tr>
			<td><%= rs.getString("id") %></td>
			<td><%= rs.getString("name") %></td>
			<td><%= rs.getString("designation") %></td>
			<td><%= rs.getString("phone") %></td>
		</tr>
	
	</table>
	<% } %>
	
	</body>
</html>