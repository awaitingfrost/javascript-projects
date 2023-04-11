const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 1, text: "salary", amount: -200 },
  { id: 1, text: "book", amount: 200 },
  { id: 1, text: "tea", amount: 10 },
];

let transactions = dummyTransactions;
