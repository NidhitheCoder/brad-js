const list = document.getElementById("list"),
  addBtn = document.getElementById("add-user-btn"),
  doubleBtn = document.getElementById("double-money-btn"),
  showMillionairesBtn = document.getElementById("millionaires-btn"),
  sortBtn = document.getElementById("sort-rich-btn"),
  entireWealthBtn = document.getElementById("entire-wealth-btn");

addBtn.addEventListener("click", addUser);

function addUser() {
  fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(data => {
      let result = data.results[0];
      const li = document.createElement("li");
      amount = Math.floor(Math.random() * 100000);
      let regex = /(\d)(?=(\d{3})+(?!\d))/;
      li.innerHTML = `<strong>${result.name.first} ${result.name.last}</strong> $${amount}`;
      list.appendChild(li);
    });
}

function DoubleMoney() {
    
}
