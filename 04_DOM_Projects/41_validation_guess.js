// \GAME FUNCTION
// - player must guess a number between min and max
// - Player gets a certain number of guesses
// - notify player of guesses remaining
// - Notify the player the currect answer if loose
// - let player choose to play again

// game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessbtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// assign value of min and max
minNum.textContent = min;
maxNum.textContent = max;

//  Listen for guess
guessbtn.addEventListener("click", function() {
  // console.log(guessInput.value);
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
  }

  //   check if won
  if (guess === winningNum) {
    // disable input
    guessInput.disabled = true;
    // change bordercolor
    guessInput.style.borderColor = "green";
    // set winning message
    setMessage(`${winningNum} is correct, YOU WIN..! `, "green");
  } else {
  }
});

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
