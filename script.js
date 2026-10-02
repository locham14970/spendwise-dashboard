// SpendWise budget data
let budget = Number(prompt("Enter your budget:"));
let expenses = Number(prompt("Enter your total expenses:"));

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Check if the user entered valid numbers
if (isNaN(budget) || isNaN(expenses)) {
    console.log("Please enter valid numbers for your budget and expenses.");
} else {
    // Calculate and display the remaining balance
    let remainingBalance = calculateBalance(budget, expenses);

    console.log("Budget:", budget);
    console.log("Expenses:", expenses);
    console.log("Remaining Balance:", remainingBalance);
}