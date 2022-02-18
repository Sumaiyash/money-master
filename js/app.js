// Input field string to number convert
function ExpensesValueConvert(number) {
    const input = document.getElementById(number).value;
    const amount = parseFloat(input);
    //clear input field
    document.getElementById(number).value = "";

    return amount;
}

document.getElementById('calculate-button').addEventListener("click", function () {

    const foodExpenses = ExpensesValueConvert('food-input');
    const rentExpenses = ExpensesValueConvert('rent-input');
    const clothExpenses = ExpensesValueConvert('cloth-input');
    if (foodExpenses >= 0 && rentExpenses >= 0 && clothExpenses >= 0) {
        const totalAmount = foodExpenses + rentExpenses + clothExpenses;

        const incomeInput = document.getElementById('income-input').value;


        // get and update total expenses
        if (incomeInput > totalAmount) {
            const expensesTotal = document.getElementById('total-expenses');
            const expenseTotalText = expensesTotal.innerText;
            const previousExpensesTotal = parseFloat(expenseTotalText);

            const balanceTotal = document.getElementById('total-balance');
            const balanceTotalText = parseFloat(balanceTotal.innerText);
            const previousBalanceTotal = parseFloat(balanceTotalText);

            expensesTotal.innerText = previousExpensesTotal + totalAmount;
            let newBalance = incomeInput - totalAmount;
            balanceTotal.innerText = previousBalanceTotal + newBalance;
        }
        else {
            alert("total amount is grater than income amount");
        }
    }

    else {
        alert('enter a positive number');
    }


})
document.getElementById('savings-button').addEventListener('click', function () {

    const incomeInput = document.getElementById('income-input').value;

    const saveInput = document.getElementById('percentage-input').value;
    const savingPerchantage = parseFloat(saveInput);

    //get balance and saving amount

    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = parseFloat(balanceTotal.innerText);

    const balanceRemaining = document.getElementById('remaining-balance-text');


    //get and update saving amount
    const savingAmount = document.getElementById('saving-amount-text');



    //calculate perchantage
    var savingscalc = savingPerchantage / 100;
    const totalAmount = savingscalc * incomeInput;
    savingAmount.innerText = totalAmount;
    // calculate remaining balance
    if (balanceTotalText >= savingAmount.innerText) {
        balanceRemaining.innerText = balanceTotalText - totalAmount;
    }
    else {
        alert("savings amount limit crossed");
    }
})





