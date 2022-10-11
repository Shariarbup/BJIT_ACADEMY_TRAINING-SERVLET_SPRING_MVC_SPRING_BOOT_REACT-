<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>404 Error</title>
</head>
<body>
<%
String errorMsg = (String)request.getAttribute("errorMsg");
%>
<h1><%= errorMsg %></h1>
</body>
</html>