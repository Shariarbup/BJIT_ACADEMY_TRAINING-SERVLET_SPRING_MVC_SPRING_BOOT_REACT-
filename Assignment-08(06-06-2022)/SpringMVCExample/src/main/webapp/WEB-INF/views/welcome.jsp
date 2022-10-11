<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Welcome</title>
</head>
<body>
	<%
		String message = (String) request.getAttribute("message");
	%>
	<h1><%= message %></h1>
	<h1><a href="/SpringMVCExample">Landing page</a></h1>
</body>
</html>