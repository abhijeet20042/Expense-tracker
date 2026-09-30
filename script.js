const ExpenseForm = document.getElementById("ExpenseForm");
const title = document.getElementById("title");
const amount = document.getElementById("amount");
const Expenselist = document.getElementById("Expenselist");
const total = document.getElementById("total");



// Pushing Array values;
let expenses = [];
ExpenseForm.addEventListener("submit",function(e){
    e.preventDefault();
    const titleValue =  title.value;
    const amountValue = Number(amount.value);
    if(titleValue ==="" || amountValue === 0 ){
        alert("Please Fill all Fields ");
        return;
    }
    const expense = {
        id: Date.now(),
        title : titleValue,
        amount : amountValue
    };
    expenses.push(expense);

    // console.log(expenses);
    displayExpense();
    calculateTotal();
    title.value = "";
    amount.value = "";
}
);


function displayExpense(){
    Expenselist.innerHTML = "";
    expenses.forEach(function(expense){
const div = document.createElement("div");
div.className = "expense";
div.innerHTML = `
<div>
<h3> ${expense.title} </h3>
<p> Rs ${ expense.amount} </p>
</div>
<button class = "delete_btn" onclick = "deleteExpense(${expense.id})">
Delete
</button>
`;
Expenselist.appendChild(div);

    });

}
function calculateTotal(){
    let sum = 0;
    expenses.forEach(function(expense){
sum = sum + expense.amount;
    
});
total.innerText = sum;
}
function deleteExpense(id){
    expenses = expenses.filter(function(expense){
        return expense.id !== id;
    });
    displayExpense();
    calculateTotal();
}


