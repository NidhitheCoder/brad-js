// This is a program for a rotating keyboard.
// This program in working an input tap of user.
// Focusing rotating through letters and rows user can navigate focus point using one tap.

const rows = document.querySelectorAll(".row");
let execute = 1;

document.addEventListener("click", direction);

function direction() {
  if (execute === 1) {
    let selectedRow = document.querySelector('.row-selected');
    console.log(selectedRow.childElementCount);
    rotateElement(selectedRow.children)

  } else {
    rotate();
  }
}

 function rotateElement(arr) {
   
 }

function rotate() {
  execute = 1;
  let interval = 1;
  rows.forEach(row => {
    let time = rotateRow(row, interval);

    setInterval(() => {
      row.classList.remove("row-selected");
      clearInterval(time);
    }, 2000 * (interval + 1));

    interval++;
  });
  setInterval(() => {
    rotate();
  }, 2000 * interval);
}

// Rotating keyboard Focus row wise
function rotateRow(element, inter) {
  let interval = setInterval(() => {
    element.classList.add("row-selected");
  }, 2000 * inter);

  return interval;
}
