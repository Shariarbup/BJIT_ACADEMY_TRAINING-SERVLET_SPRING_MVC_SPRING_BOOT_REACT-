<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Expenses</title>
<link rel="stylesheet" href="css/add-expenses.css">
</head>
<body>
<div id="form">
	<h1 class="link"><a href="/ExpenseManager/index.jsp">Home</a></h1>
	<h2 id="header">Add Your Expenses</h2>
	<form action="<%= request.getContextPath() %>/AddExpenses" method="post" id="add-expenses-form">
		  <label for="expense-category">Expense Category: </label>
		  <select name="expense-category" id="expense-category">
		    <option value="Transportation">Transportation</option>
		    <option value="Food">Food</option>
		    <option value="Fees">Fees</option>
		    <option value="Bills">Bills</option>
		    <option value="Entertainment">Entertainment</option>
		  </select><br>
		  <label for="expense-date">Date:</label>
 		  <input type="date" id="expense-date" name="expense-date"><br>
		  <label for="expense-name">Expense Name: </label><br>
	  	  <input type="text" id="expense-name" name="expense-name" placeholder="Ex: Bus Expense"><br>
	  	  <label for="expense-description">Description:</label>
		  <textarea id="expense-description" placeholder="Write something about your expenses" name="expense-description" rows="4" cols="50" >
		  </textarea><br>
	  	  <label for="expense-amount">Amount: </label><br>
	  	  <input type="text" id="expense-amount" name="expense-amount" placeholder="Ex: 500" ><br><br>
	  	  <input type="submit" name="add-expenses" value="Add Expenses">
	</form>
</div>
</body>
</html>