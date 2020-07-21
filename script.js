const wordContainer = document.getElementById("word");
const notification = document.querySelector(".notification"),
  wrongContainer = document.querySelector(".wrong-container"),
  bodyParts = document.querySelectorAll(".body-part"),
  modal = document.querySelector(".modal-container"),
  modalMsg = document.querySelector(".msg"),
  playAgain = document.getElementById("playAgain"),
  p = document.getElementById("wrong-letters");

const wordsArray = ["application", "programming", "wizard", "music"];
let letterArr = [];

// Occurs when page loaded
document.addEventListener("DOMContentLoaded", LoadPage);

// Occurs when press the key
document.addEventListener("keydown", e => {
  if (
    (e.keyCode >= 65 && e.keyCode <= 90) ||
    (e.keyCode >= 97 && e.keyCode <= 122)
  ) {
    let bodyPartCount = document.querySelectorAll(".show-body").length;
    if (bodyPartCount === bodyParts.length - 1) {
      modalMsg.innerText = "Sorry Your lost..! ";
      modal.style.display = "flex";
    } else {
      checkKeyAndLetters(e.key);
    }
  }
});

playAgain.addEventListener("click", () => {
  modal.style.display = "none";
  wordContainer.innerHTML = "";
  p.innerHTML = "";
  wrongContainer.classList.remove("show-letter");
  clearBody();
  LoadPage();
});

// page loading event
function LoadPage() {
  const WordIndex = Math.floor(Math.random() * wordsArray.length);
  letterArr = wordsArray[WordIndex].split("");
  letterArr.forEach(letter => {
    let span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = `<small>${letter}</small>`;
    wordContainer.appendChild(span);
  });
}

// for check key with letters of the hidden word
function checkKeyAndLetters(key) {
  const spans = document.querySelectorAll(".letter");
  spans.forEach(span => {
    if (span.textContent == key) {
      span.classList.add("view-letter");
      const visibledLetters = document.querySelectorAll(".view-letter");
      if (spans.length == visibledLetters.length) {
        modalMsg.innerText = "you are won.. ! &smile;";
        modal.style.display = "flex";
      }
    }
  });

  if (p.innerText.includes(key)) {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  } else if (!letterArr.includes(key)) {
    showBody();
    wrongContainer.classList.add("show-letter");
    p.innerText = p.innerText === "" ? key : p.innerText + "," + key;
  }
}

// clear body parts
function clearBody() {
  let bodyElements = document.querySelectorAll(".show-body");
  bodyElements.forEach(elm => {
    elm.classList.remove("show-body");
  });
}

// check and show body parts when enter a wrong letter
function showBody() {
  for (let i = 0; i < bodyParts.length; i++) {
    if (!bodyParts[i].classList.contains("show-body")) {
      bodyParts[i].classList.add("show-body");
      break;
    }
  }
}
