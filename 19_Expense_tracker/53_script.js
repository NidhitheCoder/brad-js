const addBtn = document.getElementById("add-btn"),
  list = document.getElementById("list"),
  incomeEl = document.getElementById("money-plus"),
  expenseEl = document.getElementById("money-minus"),
  balanceEl = document.getElementById("balance"),
  amountEl = document.getElementById("amount"),
  textEl = document.getElementById("text");

showIncomeAndExpense(0);
addToHistoryDOM();

// Event listeners
addBtn.addEventListener("click", addTransaction);

// event delegation for delete button
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    let removeAmt = parseFloat(e.target.previousSibling.textContent);
    let removeText = e.target.previousSibling.previousSibling.textContent;

    removeFromLS(removeAmt, removeText);
    if (removeAmt >= 0) {
      let inc = parseFloat(localStorage.getItem("income"));
      inc = inc - removeAmt;
      localStorage.setItem("income", inc);
    } else {
      let exp = parseFloat(localStorage.getItem("expense"));
      exp = exp - removeAmt;
      localStorage.setItem("expense", exp);
    }
    e.target.parentElement.remove();
    showIncomeAndExpense(0);
  }

  e.preventDefault();
});

function removeFromLS(amt, txt) {
  let histArr = localStorage.getItem("history")
    ? JSON.parse(localStorage.getItem("history"))
    : [];
  for (let i = 0; i < histArr.length; i++) {
    let item = histArr[i];
    if (item.title === txt && item.amount === amt) {
      histArr.splice(i, 1);
    }
  }
  localStorage.setItem("history", JSON.stringify(histArr));
}

function addTransaction(e) {
  const amount = parseFloat(amountEl.value),
    text = textEl.value;
  balance = balanceEl.innerText ? parseFloat(balanceEl.innerText) : 0;
  balanceEl.innerText = balance + amount;
  storeToLs(text, amount, amount >= 0 ? "plus" : "minus");
  showIncomeAndExpense(amount);

  // Clear values from DOM Input elements
  amountEl.value = "";
  textEl.value = "";
  e.preventDefault();
}

function storeToLs(title, amount, type) {
  // New transaction add to history
  let history =
    localStorage.getItem("history") !== null
      ? JSON.parse(localStorage.getItem("history"))
      : [];
  let item = { title: title, amount: amount, type: type };
  history.push(item);
  localStorage.setItem("history", JSON.stringify(history));
  addToHistoryDOM();
}

function addToHistoryDOM() {
  list.innerHTML = "";
  let historyArr = localStorage.getItem("history")
    ? JSON.parse(localStorage.getItem("history"))
    : [];
  // For one item add into history
  historyArr.forEach(item => {
    const li = document.createElement("li");
    li.classList.add(`${item.type}`);
    li.innerHTML = `${item.title}<span>${item.amount}</span><button class="delete-btn"">X</button>`;
    list.appendChild(li);
  });
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
