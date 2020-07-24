// GAME FUNCTION
// - player must guess a number between min and max
// - player gets a certain number og guesses
// - notify player of guesses remaining
// - notify the player the currect answer if loose
// - let player to choose play again

//  game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num");
(maxNum = document.querySelector(".max-num")),
  (guessBtn = document.querySelector("#guess-btn")),
  (guessInput = document.querySelector("#guess-input")),
  (message = document.querySelector(".message"));

// assign vlaue of min and max
minNum.textContent = min;
maxNum.textContent = max;

// lister play again
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is currect, YOU WON...!`);
    guessInput.value = "";
  } else {
    guessLeft -= 1;
    if (guessLeft === 0) {
      gameOver(
        false,
        `Game over,you lost. The currect number was ${winningNum}`
      );
      guessInput.value = "";
    } else {
      console.log("in guess left section");
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessLeft} guesses left`, "red");
    }
  }
});

// function game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  //   play again
  guessBtn.value = "Play Again";
  guessBtn.className = "play-again";
}

// set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// getwinning name
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
