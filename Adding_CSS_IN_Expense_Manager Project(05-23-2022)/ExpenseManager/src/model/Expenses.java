package model;

import java.sql.Date;

public class Expenses {
	int id;
	String expenseCategory;
	Date date;
	String expenseName;
	String description;
	int amount;

	public Expenses(String expenseCategory, Date date, String expenseName, String description, int amount) {
		super();
		this.expenseCategory = expenseCategory;
		this.date = date;
		this.expenseName = expenseName;
		this.description = description;
		this.amount = amount;
	}

	public String getExpenseCategory() {
		return expenseCategory;
	}

	public void setExpenseCategory(String expenseCategory) {
		this.expenseCategory = expenseCategory;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getExpenseName() {
		return expenseName;
	}

	public void setExpenseName(String expenseName) {
		this.expenseName = expenseName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

}
