// GAME FUNCTION
// - player must guess a number between min and max
// - player gets a certain number of guesses
// - notify player of guesses remaining
// - notify the player the currect answer if loose
// - let player to choose play again

// game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessbtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");
// assign value of min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessbtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // checkif won
  if (guess === winningNum) {
    // gameover one
    // ?disable input
    // guessInput.disabled = true;
    // // change border color
    // guessInput.style.borderColor = "green";
    // //  set winning message
    // setMessage(`${winningNum} is currect, YOU WON..!`, "green");

    gameOver(true, `${winningNum} is currect, YOU WON..!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //  game lost
      //   guessInput.disabled = true;
      //   guessInput.style.borderColor = "red";
      //   setMessage(
      //     `Game Over,you lost. the currect number was ${winningNum}`,
      //     "red"
      //   );
      gameOver(
        false,
        `Game over,you lost. the currect number was ${winningNum}`
      );
    } else {
      console.log("IN GUESSES LEFT");
      //  game continues -wrong answer\
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);
}

// set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
