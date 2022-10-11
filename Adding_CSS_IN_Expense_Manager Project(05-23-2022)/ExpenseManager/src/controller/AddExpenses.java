package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.source.tree.WhileLoopTree;

import dao.ExpensesDao;
import model.Expenses;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Servlet implementation class AddExpenses
 */
@WebServlet("/AddExpenses")
public class AddExpenses extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ExpensesDao expensesDao;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddExpenses() {
		super();
		// TODO Auto-generated constructor stub
		expensesDao = new ExpensesDao();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		if(request.getParameter("filter-by-date") != null) {
			String expenseDateString = request.getParameter("expense-date");
			Date expenseDate = Date.valueOf(expenseDateString);
			ResultSet rs= expensesDao.filterByDateAllExpenses(expenseDate);
			PrintWriter out = response.getWriter();
			response.setContentType("text/html");
			request.setAttribute("rss", rs);
			out.println("<div style=\"margin: 0 auto;\">");
			out.println("<br><h1><a href=\"/ExpenseManager/index.jsp\">Home</a></h1>");
			out.println("<h1><a href=\"/ExpenseManager/add-expenses.jsp\">Add Expenses</a></h1><br>");
			out.println("<table width=60% border=1 margin=0 auto>");
			out.println("<tr><th colspan=6><center>Result of search page</center></th></tr>");
			out.println("<tr><th>ID</th><th>Category</th><th>Date</th><th>Name</th><th>Description</th><th>Amount</th></tr>");
			try {
				while(rs.next()){
					out.println("<tr>");
					out.println("<td>"+rs.getString(1)+"</td>");
					out.println("<td>"+rs.getString(2)+"</td>");
					out.println("<td>"+rs.getString(3)+"</td>");
					out.println("<td>"+rs.getString(4)+"</td>");
					out.println("<td>"+rs.getString(5)+"</td>");
					out.println("<td>"+rs.getString(6)+"</td>");
					out.println("</tr>");
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			out.println("</table>");
			out.println("</div>");
			//request.getRequestDispatcher("/index.jsp").forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		if(request.getParameter("add-expenses")!= null) {
			String expenseCategory = request.getParameter("expense-category");
			String expenseDateString = request.getParameter("expense-date");
			Date expenseDate = Date.valueOf(expenseDateString);
			String expenseName = request.getParameter("expense-description");
			String expenseDescription = request.getParameter("expense-description");
			String expenseAmountString = request.getParameter("expense-amount");
			int expenseAmount = Integer.parseInt(expenseAmountString);
			Expenses expenses = new Expenses(expenseCategory,expenseDate,expenseName,expenseDescription,expenseAmount);
			expensesDao.insertExpenses(expenses);
			response.sendRedirect(request.getContextPath()+"/index.jsp");
		}

	}

}
