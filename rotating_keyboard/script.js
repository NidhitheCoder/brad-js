// This is a program for a rotating keyboard.
// This program in working an input tap of user.
// Focusing rotating through letters and rows user can navigate focus point using one tap.
const rows = document.querySelectorAll(".row");

document.addEventListener("click", rotate);

function rotate() {
  let interval = 1;
  rows.forEach(row => {
    let time = setInterval(() => {
      row.classList.add("row-selected");
    }, 2000 * interval);
    // clearInterval(time-1);
    row.classList.remove("row-selected");
    interval++;
  });

  // row.classList.toggle('row-selected');
}

// // Rotating keyboard Focus row wise
// function rotateRow(element) {
//     rows.forEach(()=>{
//         element.classList.add('row-selected');
//     })

// }
