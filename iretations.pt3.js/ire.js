const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];
const incomeTransactions = transactions.filter(([type]) => type === "income");
console.log(incomeTransactions);
const expenseTranscation = transaction.filter(([type]) => type === "expense");
console.log(expenseTranscation);

/*Financial summary*/
function getTotalIncome(transactions) {
  return transactions
    .filter(([type]) => type === "income")
    .reduce((total, [, amount]) => total + amount, 0);
}
let totalIncome = getTotalIncome(transactions);
console.log(totalIncome);

function getTotalIncome(transactions) {
  return transactions
    .filter(([type]) => type === "expense")
    .reduce((total, [, amount]) => total + amount, 0);
}
let totalExpenses = getTotalExpenses(transactions){
console.log(totalIExpenses);

function getNetTotal(transaction);
const totalIncome = getTotalIncome(transactions)
const totalExpenses = getTotalExpenses(transactions)
return totalIncome - totalExpenses

}console.log(getNetTotal)