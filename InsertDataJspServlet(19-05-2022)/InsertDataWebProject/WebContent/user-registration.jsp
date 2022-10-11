<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register Employee</title>
</head>
<body>
	<form action="<%= request.getContextPath() %>/AddEmployee" method="post">
	  <label for="name">Name: </label><br>
	  <input type="text" id="name" name="name" ><br>
	  <label for="designation">Designation: </label><br>
	  <input type="text" id="designation" name="designation" ><br>
	  <label for="number">Phone Number: </label><br>
	  <input type="text" id="number" name="number" ><br><br>
	  <input type="submit" name="register" value="Submit">
	</form>
</body>
</html>