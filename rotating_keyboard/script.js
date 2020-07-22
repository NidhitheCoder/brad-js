// This is a program for a rotating keyboard.
// This program in working an input tap of user.
// Focusing rotating through letters and rows user can navigate focus point using one tap.
const rows = document.querySelectorAll(".row");

document.addEventListener("click", rotate);

function rotate() {
  let interval = 1;
  rows.forEach(row => {
    let time = rotateRow(row, interval);

    setInterval(() => {
      row.classList.remove("row-selected");
      clearInterval(time);
    }, 2000 * (interval + 1));

    interval++;
  });
}

// Rotating keyboard Focus row wise
function rotateRow(element, inter) {
  return setInterval(() => {
    element.classList.add("row-selected");
  }, 2000 * inter);
}
