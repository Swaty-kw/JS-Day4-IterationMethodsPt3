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
