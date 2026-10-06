# SpendWise

## Smart Budgeting for Smarter Spending

SpendWise is a simple budget and expense management platform designed to help users track their spending, manage their budget, and monitor their remaining balance.

## Improvements Made This Week

This week, SpendWise was improved by adding JavaScript interactivity to the dashboard.

The application can now:

* Allow users to enter and set a budget.
* Allow users to add multiple expenses.
* Store multiple expense records in an array.
* Calculate total expenses automatically.
* Calculate the remaining budget automatically.
* Display expense records directly on the webpage.
* Provide budget warnings based on the remaining balance.
* Respond to user actions using buttons and event listeners.
* Update the dashboard dynamically without refreshing the page.

## JavaScript Concepts Implemented

### 1. Conditional Statements

Conditional statements are used to evaluate the user's budgeting situation.

SpendWise checks the remaining balance and provides different feedback.

For example:

* If the remaining balance is below zero, the application warns the user that they have exceeded their budget.
* If the remaining balance is below KSh 5,000, the application warns that the balance is getting low.
* Otherwise, the application tells the user that they are within their budget.

This is implemented using `if`, `else if`, and `else` statements.

### 2. Arrays

An array is used to store multiple expense records.

   javascript
let expenses = [];


When the user adds an expense, the expense is stored in the array using `push()`.

Each expense contains:

* Expense name
* Expense amount

Example:

   javascript
expenses.push({
    name: expenseName,
    amount: expenseAmount
});


Using an array allows SpendWise to manage multiple expense records instead of using separate variables for every expense.

### 3. Loops

A `forEach()` loop is used to process the expenses stored in the array.

The loop calculates the total amount spent by going through each expense record.

The loop is also used to display all the expense records on the webpage.

Example:

   javascript
expenses.forEach(function (expense) {
    totalExpenses += expense.amount;
});


### 4. DOM Manipulation

DOM manipulation is used to update information directly on the webpage.

JavaScript selects HTML elements using `document.getElementById()` and changes their content using `textContent`.

The dashboard is dynamically updated to display:

* Budget
* Total expenses
* Remaining balance
* Budget status
* Expense records

This means users can see updated information immediately without refreshing the page.

### 5. Events and User Interactions

Event listeners allow the application to respond to user actions.

For example, when the user clicks the **Set Budget** button, JavaScript reads the budget entered by the user and updates the dashboard.

When the user clicks the **Add Expense** button, JavaScript:

1. Gets the expense name.
2. Gets the expense amount.
3. Validates the information.
4. Adds the expense to the array.
5. Calculates the new total.
6. Updates the remaining balance.
7. Displays the expense on the webpage.

This is implemented using `addEventListener()`.

### 6. Data Processing

SpendWise processes the stored expense records to calculate the total expenses.

The remaining balance is calculated using:

    text
Remaining Balance = Budget - Total Expenses


The application then uses the result to provide appropriate budget feedback.

## Challenges Encountered and Solutions

### Challenge 1: Connecting JavaScript to HTML

One challenge was connecting JavaScript to the correct HTML elements.

This was solved by using `document.getElementById()` to select the required elements.

### Challenge 2: Managing Multiple Expenses

Another challenge was managing several expense records.

This was solved by using an array to store the expenses and a `forEach()` loop to process each record.

### Challenge 3: Updating the Dashboard

The dashboard initially displayed static information.

This was improved by using DOM manipulation so that the budget, total expenses, remaining balance, budget status, and expense records update automatically when the user interacts with the application.

### Challenge 4: Validating User Input

The application checks that the user enters valid budget and expense values.

Invalid or empty values are rejected and an appropriate message is displayed.

## Technologies Used

* HTML
* CSS
* JavaScript
* Git
* GitHub

## Project Structure

   text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md


## How to Run the Project

1. Open the project in Visual Studio Code.
2. Open `index.html` with Live Server.
3. Enter a budget.
4. Click **Set Budget**.
5. Enter an expense name and amount.
6. Click **Add Expense**.
7. View the updated dashboard, budget status, and expense records.

## Expected Application Flow

```text
User enters budget
        ↓
Clicks Set Budget
        ↓
Budget is displayed
        ↓
User enters expense
        ↓
Clicks Add Expense
        ↓
Expense is stored in an array
        ↓
Loop processes expense records
        ↓
Total expenses are calculated
        ↓
Remaining balance is calculated
        ↓
Conditional statement evaluates the balance
        ↓
DOM updates the dashboard


## Author

Simon Locham

