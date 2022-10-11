
<%@page import="java.sql.ResultSet"%>
<%@page import="dao.ExpensesDao"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<% 
	ExpensesDao expensesDao = new ExpensesDao();
	ResultSet rs = expensesDao.getAllResultSet();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home Page</title>
<style>
#header{
  padding: 20px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;	
}
#body{
margin: 0 auto;
width:80%;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
</head>
<body>
<div id="body">
	<h2 id="header">Expenses Management App</h2>
	<br><h1><a href="/ExpenseManager/add-expenses.jsp">Add Expenses</a></h1><br>
	<table border="3" id="customers">
	<tr>
		<th>ID</th>
		<th>Category</th>
		<th>Date</th>
		<th>Name</th>
		<th>Description</th>
		<th>Amount</th>
	</tr>
	<%while(rs.next()){ %>
	<tr>
		<td><%= rs.getInt(1) %></td>
		<td><%= rs.getString(2) %></td>
		<td><%= rs.getString(3) %></td>
		<td><%= rs.getString(4) %></td>
		<td><%= rs.getString(5) %></td>
		<td><%= rs.getInt(6) %></td>
	</tr>
	<% } %>
	</table>
		<% rs.close(); %>
	<br>
	<br>
	<form action="<%= request.getContextPath() %>/AddExpenses" method="get">
		 <label for="expense-date">Filter By Date:</label>
 		  <input type="date" id="expense-date" name="expense-date"><br>
 		   <input type="submit" name="filter-by-date" value="Filter">
	</form>
	
	<%
	ResultSet rss= null;
	if (request.getSession().getAttribute("rss") != null) {
	%>
	<table border="3" id="customers">
	<tr>
		<th>ID</th>
		<th>Category</th>
		<th>Date</th>
		<th>Name</th>
		<th>Description</th>
		<th>Amount</th>
	</tr>
	<%while(rss.next()){ %>
	<tr>
		<td><%= rss.getInt(1) %></td>
		<td><%= rss.getString(2) %></td>
		<td><%= rss.getString(3) %></td>
		<td><%= rss.getString(4) %></td>
		<td><%= rss.getString(5) %></td>
		<td><%= rss.getInt(6) %></td>
	</tr>
	<% } %>
	</table>
	<% } %>
	<br> 
</div>
</body>
</html>