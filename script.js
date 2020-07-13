const list = document.getElementById("list"),
  addBtn = document.getElementById("add-user-btn"),
  doubleBtn = document.getElementById("double-money-btn"),
  showMillionairesBtn = document.getElementById("millionaires-btn"),
  sortBtn = document.getElementById("sort-rich-btn"),
  entireWealthBtn = document.getElementById("entire-wealth-btn");

let data = [];

addBtn.addEventListener("click", addUser);
doubleBtn.addEventListener("click", DoubleMoney);
showMillionairesBtn.addEventListener("click", showMillionaires);
sortBtn.addEventListener("click", sortByRichest);
entireWealthBtn.addEventListener("click", entireWealth);

function addUser() {
  fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(user => {
      let userName = `${user.results[0].name.first} ${user.results[0].name.last}`;
      let amount = parseInt(Math.floor(Math.random() * 100000));
      data.push({ user: userName, amount: `${amount}` });
      updataDOM();
    });
}

function DoubleMoney() {
  data.map(item => (item.amount = item.amount * 2));
  updataDOM();
}

function sortByRichest() {
  data.sort((a, b) => a.amount < b.amount);
  updataDOM();
}

function showMillionaires() {
  data = data.filter(item => item.amount >= 1000000);
  updataDOM();
}

function entireWealth() {
  if (!document.getElementsByClassName("total").length) {
    let total = data.reduce(
      (sum, val) => (sum = sum + parseInt(val.amount)),
      0
    );
    const li = document.createElement("li");
    li.className = "total";
    li.innerHTML = `Total <strong>${total}</strong>`;
    list.appendChild(li);
  }
}

function updataDOM() {
  list.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    let amount =
      "$" +
      parseInt(item.amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    li.innerHTML = `<strong>${item.user}</strong> ${amount}`;
    list.appendChild(li);
  });
}
