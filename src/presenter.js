const incomes = document.querySelector("#income");
const expenses = document.querySelector("#expense");
const form = document.querySelector("#transaction-form");
const div = document.querySelector("#transaction-div");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const income =  Number.parseInt(incomes.value);
    const expense =  Number.parseInt(expenses.value);
    div.innerHTML = "<p>"+ `Transaction Amount ${income-expense}` +"</p>";
});