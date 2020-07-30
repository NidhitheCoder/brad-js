let randomNo = Math.floor(Math.random() * 5),
  location1 = randomNo,
  location2 = location1 + 1,
  location3 = location2 + 1;
  console.log(randomNo);
let guess;
let hits = 0,
  guesses = 0,
  isSunk = false;

while (isSunk === false) {
  guess = prompt("Ready ! Aim ! Fire ! Enter a number 0-6 :");
  if (guess < 0 || guess > 6) {
    alert("enter a valid number");
  } else {
    guesses += 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("hits");
      hits = hits + 1;
      if (hits === 3) {
        isSunk = true;
        alert("You sunk my battleship");
      }
    } else {
      alert("miss");
    }
  }
}

let stats =
  "you look " +
  guesses +
  " guesses sink the battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
