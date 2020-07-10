const addBtn = document.getElementById("add-btn"),
  list = document.getElementById("list"),
  incomeEl = document.getElementById("money-plus"),
  expenseEl = document.getElementById("money-minus"),
  balanceEl = document.getElementById("balance");
(amountEl = document.getElementById("amount")),
  (textEl = document.getElementById("text"));
showIncomeAndExpense(0);
// Event listeners
addBtn.addEventListener("click", addTransaction);

function addTransaction(e) {
  // console.log(text.value,parseFloat(amount.value));
  const amount = parseFloat(amountEl.value),
    text = textEl.value;
  balance = balanceEl.innerText ? parseFloat(balanceEl.innerText) : 0;
  balanceEl.innerText = balance + amount;
  console.log();
  storeToLs(text, amount, amount >= 0 ? "plus" : "minus");
  showIncomeAndExpense(amount);
  amountEl.value = '';
  textEl.value = '';
  e.preventDefault();
}

function storeToLs(title, amount, type) {
// New transaction add to history
  let history =
    localStorage.getItem("history") !== null
      ? JSON.parse(localStorage.getItem("history"))
      : [];
  let item = { title:title,amount: amount };
  history.push(item);
  localStorage.setItem("history", JSON.stringify(history));
  addToHistoryDOM();
}

function addToHistoryDOM(){
     // For one item add into history
    const li = document.createElement("li");
    li.classList.add(`${type}`);
    li.innerHTML = `${title}<span>${amount}</span><button class="delete-btn">X</button>`;
    list.appendChild(li);
}

function showIncomeAndExpense(amt) {
  let prevInc =
    localStorage.getItem("income") !== null
      ? parseFloat(localStorage.getItem("income"))
      : 0;
  let prevExp =
    localStorage.getItem("expense") !== null
      ? parseFloat(localStorage.getItem("expense"))
      : 0;

  if (amt >= 0) {
    prevInc = prevInc + amt;
  } else {
    prevExp += amt;
  }
  incomeEl.innerText = `$${prevInc}`;
  localStorage.setItem("income", prevInc);
  expenseEl.innerText = `$${prevExp}`;
  localStorage.setItem("expense", prevExp);
  balanceEl.innerText = `$${prevInc + prevExp}`;
}
