
// SpendWise budget
let budget = 0;

// Array to store multiple expense records
let expenses = [];


// Get elements from the HTML page
const budgetInput = document.getElementById("budget-input");
const setBudgetButton = document.getElementById("set-budget-btn");

const budgetDisplay = document.getElementById("budget-display");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");

const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseButton = document.getElementById("add-expense-btn");

const budgetMessage = document.getElementById("budget-message");
const expenseList = document.getElementById("expense-list");


// Set the budget when the button is clicked
setBudgetButton.addEventListener("click", function () {

    const enteredBudget = Number(budgetInput.value);

    // Check if the budget is valid
    if (enteredBudget <= 0) {
        budgetMessage.textContent = "Please enter a valid budget.";
        return;
    }

    budget = enteredBudget;

    // Display the budget
    budgetDisplay.textContent = `KSh ${budget.toLocaleString()}`;

    // Update the dashboard
    updateDashboard();
});


// Add an expense when the button is clicked
addExpenseButton.addEventListener("click", function () {

    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = Number(expenseAmountInput.value);

    // Check if the expense information is valid
    if (expenseName === "" || expenseAmount <= 0) {
        budgetMessage.textContent =
            "Please enter a valid expense name and amount.";
        return;
    }

    // Add the expense to the array
    expenses.push({
        name: expenseName,
        amount: expenseAmount
    });

    // Clear the input fields
    expenseNameInput.value = "";
    expenseAmountInput.value = "";

    // Update the dashboard
    updateDashboard();
});


// Calculate and update the dashboard
function updateDashboard() {

    // Start total expenses at zero
    let totalExpenses = 0;

    // Loop through every expense in the array
    expenses.forEach(function (expense) {
        totalExpenses += expense.amount;
    });

    // Calculate the remaining balance
    const remainingBalance = budget - totalExpenses;

    // Update the dashboard
    totalExpensesDisplay.textContent =
        `KSh ${totalExpenses.toLocaleString()}`;

    remainingBalanceDisplay.textContent =
        `KSh ${remainingBalance.toLocaleString()}`;


    // Make a budgeting decision
    if (remainingBalance < 0) {

        budgetMessage.textContent =
            "Warning: You have exceeded your budget.";

    } else if (remainingBalance < 5000) {

        budgetMessage.textContent =
            "Warning: Your remaining balance is getting low.";

    } else {

        budgetMessage.textContent =
            "Good job! You are within your budget.";
    }


    // Display the expense records
    displayExpenses();
}


// Display all expenses on the webpage
function displayExpenses() {

    // Clear the old list
    expenseList.innerHTML = "";

    // Loop through the expenses array
    expenses.forEach(function (expense, index) {

        const listItem = document.createElement("li");

        listItem.textContent =
            `${index + 1}. ${expense.name} - KSh ${expense.amount.toLocaleString()}`;

        expenseList.appendChild(listItem);
    });
}

