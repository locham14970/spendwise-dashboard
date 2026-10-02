markdown
# SpendWise Dashboard

## Project Description

SpendWise is a responsive financial dashboard shell created using HTML and CSS. The project demonstrates the use of CSS Grid, Flexbox, CSS custom properties, responsive design, and card micro-interactions.

## Dashboard Features

The dashboard contains:

- Sidebar navigation
- Header section
- Six financial category cards
- Responsive layout

## Financial Categories

The dashboard displays static financial information for:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

## CSS Grid

CSS Grid is used to create the overall dashboard layout and organize the financial category cards.

## Flexbox

Flexbox is used to arrange:

- Sidebar navigation items
- Header content
- Individual dashboard cards

## CSS Custom Properties

CSS variables are defined in the `:root` selector for:

- Brand color
- Accent color
- Surface/background color
- Primary text color
- Secondary text color

## Responsive Design

A media query below 768px changes the dashboard into a single-column layout for smaller screens.

The responsive layout was tested using the browser's DevTools Device Toolbar.

## Card Micro-interactions

Dashboard cards include hover and focus effects using `transform` and `box-shadow`. The transition lasts 200ms.

## Dark Theme

A dark theme is included using the `prefers-color-scheme: dark` media query. The dark theme overrides the CSS custom properties defined in `:root`.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Responsive Design
- Git and GitHub

## JavaScript Foundation

### What SpendWise Does

SpendWise is a simple budget and expense management platform designed to help users track their budget, record expenses, and understand their remaining balance.

### JavaScript Concepts Implemented

The SpendWise project uses JavaScript to make the application interactive and process budgeting data. The main JavaScript concepts implemented are:

* Variables
* Data types
* User input
* Calculations
* Functions
* Conditional statements
* Input validation
* Console output

### Variables

Variables are used to store important budgeting information.

For example:

javascript
let budget = Number(prompt("Enter your budget:"));
let expenses = Number(prompt("Enter your total expenses:"));


The `budget` variable stores the user's budget, while the `expenses` variable stores the user's total expenses.

### User Input

SpendWise collects information from the user using the JavaScript `prompt()` function.

```javascript
let budget = Number(prompt("Enter your budget:"));
let expenses = Number(prompt("Enter your total expenses:"));
```

The `Number()` function converts the input from text into numbers so that mathematical calculations can be performed.

### Calculations

SpendWise calculates the user's remaining balance by subtracting expenses from the budget.

```javascript
let remainingBalance = calculateBalance(budget, expenses);


The calculation follows this formula:

**Remaining Balance = Budget - Expenses**

For example, if the budget is 50,000 and expenses are 12,000, the remaining balance is 38,000.

### Functions

A reusable function is used to calculate the remaining balance.

javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


Functions help organize the code and allow the same calculation to be reused with different budget and expense values.

### Input Validation

SpendWise checks whether the user entered valid numbers.

javascript
if (isNaN(budget) || isNaN(expenses)) {
    console.log("Please enter valid numbers for your budget and expenses.");
}


This prevents invalid input from being used in the budgeting calculation.

### Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

The application displays:

* Budget
* Expenses
* Remaining Balance

For example:

text
Budget: 50000
Expenses: 12000
Remaining Balance: 38000


