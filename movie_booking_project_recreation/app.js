const container = document.querySelector(".screen-container");
const seats = document.querySelectorAll(".row .seat:not(occupied)");
const movies = document.getElementById("movies");
const count = document.getElementById("count");
const price = document.getElementById("price");

function setPriceAndCount() {
  const selectedSeates = document.querySelectorAll(".row .seat.selected");
  const seatIndex = [...selectedSeates].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeates',JSON.stringify(seatIndex));
  localStorage.setItem('count',selectedSeates.length);
  localStorage.setItem('moviePrice',movies.value)

  const mrp = movies.value;
    count.innerText = selectedSeates.length;
    price.innerText = selectedSeates.length * mrp;
}

container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    setPriceAndCount();
  }
});

movies.addEventListener('change',(e) => {
  setPriceAndCount();
})

document.addEventListener('DOMContentLoaded',(e) => {
const selectedSeates = JSON.parse(localStorage.getItem("selectedSeates"));
if (selectedSeates !== null && selectedSeates.length > 0) {
  seats.forEach((seat, index) => {
    if (selectedSeates.indexOf(index) > -1) {
      seat.classList.add("selected");
    }
  })
}
count.innerText = JSON.stringify(+localStorage.getItem('count'));
price.innerText = JSON.stringify(+localStorage.getItem('moviePrice')) * JSON.stringify(+localStorage.getItem('count')) ;
})
