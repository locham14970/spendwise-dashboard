# SpendWise

## Smart Budgeting for Smarter Spending

SpendWise is a simple budget and expense management platform designed to help users track their spending, manage their budgets, monitor expenses, and calculate their remaining balance.

## Live Application

- **Live Website:** https://spendwise-budget-simon.netlify.app
- **GitHub Repository:** https://github.com/locham14970/spendwise-dashboard
- **Deployment Platform:** Netlify
- **Repository Visibility:** Public
- **Website Visibility:** Public

## Features and Improvements

SpendWise includes the following features:

- Allows users to enter and set a budget.
- Allows users to add multiple expenses.
- Stores multiple expense records in a JavaScript array.
- Calculates total expenses automatically.
- Calculates the remaining budget automatically.
- Displays expense records directly on the webpage.
- Provides budget warnings based on the remaining balance.
- Responds to user actions using buttons and event listeners.
- Updates the dashboard dynamically without refreshing the page.

## JavaScript Concepts Implemented

### 1. Conditional Statements

Conditional statements evaluate the user's budgeting situation.

- If the remaining balance is below zero, the application warns the user that they have exceeded their budget.
- If the remaining balance is below KSh 5,000, the application warns that the balance is getting low.
- Otherwise, the application informs the user that they are within their budget.

Implemented using `if`, `else if`, and `else` statements.

### 2. Arrays

An array stores multiple expense records.

```javascript
let expenses = [];
```

When the user adds an expense, it is stored using `push()`.

Each expense contains an expense name and amount.

### 3. Loops

A `forEach()` loop processes the expenses stored in the array.

It calculates total expenses and displays individual expense records on the webpage.

### 4. Document Object Model (DOM) Manipulation

DOM manipulation allows JavaScript to update webpage content.

The application uses `document.getElementById()` and `textContent` to update:

- Budget
- Total expenses
- Remaining balance
- Budget status
- Expense records

### 5. Events and User Interactions

Event listeners allow the application to respond to user actions.

When a user clicks the Set Budget button, the application reads the entered budget and updates the dashboard.

When a user clicks the Add Expense button, the application:

1. Gets the expense name.
2. Gets the expense amount.
3. Validates the information.
4. Adds the expense to the array.
5. Calculates total expenses.
6. Updates the remaining balance.
7. Displays the expense record.

Implemented using `addEventListener()`.

### 6. Data Processing

The remaining balance is calculated using:

**Remaining Balance = Budget - Total Expenses**

The application uses the calculated result to provide appropriate budget feedback.

## Technologies Used

- HTML – webpage structure.
- CSS – webpage styling and layout.
- JavaScript – application functionality and interactivity.
- Git – version control.
- GitHub – source code hosting.
- Netlify – website hosting and deployment.

## Project Structure

```text
SPENDWISE-DASHBOARD/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── js/
```

## How to Run the Project Locally

1. Clone or download the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server.
4. Enter a budget.
5. Click **Set Budget**.
6. Enter an expense name and amount.
7. Click **Add Expense**.
8. View the updated dashboard and expense records.

## Deployment Summary

SpendWise was deployed using Netlify and connected to its GitHub repository.

The deployment process involved:

1. Creating and maintaining a public GitHub repository.
2. Deploying the project to Netlify.
3. Configuring the production website visibility as Public.
4. Setting a custom Netlify project name.
5. Connecting the GitHub repository to Netlify.
6. Configuring the publish directory to use the repository root.
7. Deploying the HTML, CSS, and JavaScript files.
8. Testing the live website in a browser, including an Incognito window.
9. Updating the project heading and pushing the changes to GitHub.

The live website successfully displays the updated dashboard content.

## Challenges Encountered and Solutions

### Challenge 1: Connecting JavaScript to HTML

**Challenge:** Connecting JavaScript to the correct HTML elements.

**Solution:** Used `document.getElementById()` to select the required elements.

### Challenge 2: Managing Multiple Expenses

**Challenge:** Managing several expense records.

**Solution:** Used arrays to store expense records and `forEach()` to process them.

### Challenge 3: Updating the Dashboard

**Challenge:** The dashboard initially displayed static information.

**Solution:** Used DOM manipulation to update budget information and expense records dynamically.

### Challenge 4: Deploying the Website

**Challenge:** Configuring Netlify and connecting the website to the GitHub repository.

**Solution:** Configured public production visibility, linked the GitHub repository, and deployed the project through Netlify.

## Lessons Learned

Through this project, I learned how to:

- Structure webpages using HTML.
- Style webpages using CSS.
- Use JavaScript to create interactive applications.
- Work with arrays, loops, and conditional statements.
- Manipulate the Document Object Model.
- Use Git for version control.
- Push project updates to GitHub.
- Deploy websites using Netlify.
- Configure public website visibility.
- Understand how GitHub integration supports automatic deployment.

## Author

**Simon Locham**

Project: SpendWise – Smart Budgeting for Smarter Spending.