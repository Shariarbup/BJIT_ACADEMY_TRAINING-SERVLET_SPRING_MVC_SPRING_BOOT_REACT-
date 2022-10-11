<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
#form{
margin: 0 auto;
width:50%;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=date] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
input[type=button], input[type=submit], input[type=reset] {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
input[type=submit]:hover{
  background-color: #000;
  color: white:
}
#header{
  padding: 20px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
</style>
</head>
<body>
<div id="form">
	<h1><a href="/ExpenseManager/index.jsp">Home</a></h1>
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
	  	  <input type="text" id="expense-name" name="expense-name" ><br>
	  	  <label for="expense-description">Description:</label>
		  <textarea id="expense-description" name="expense-description" rows="4" cols="50">
		  </textarea><br>
	  	  <label for="expense-amount">Amount: </label><br>
	  	  <input type="text" id="expense-amount" name="expense-amount" ><br><br>
	  	  <input type="submit" name="add-expenses" value="Add Expenses">
	</form>
</div>
</body>
</html>