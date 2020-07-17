const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const moveiSelect = document.getElementById("movie");

let ticketPrice = +moveiSelect.value;
// + before value helps to change time to number

// save slected movie index and price
function setMovieData(movieIndex, MoviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", MoviePrice);
}

// updata total and count
function updataSelectedCount() {
  const selectedSeates = document.querySelectorAll(".row .seat.selected");

  // copy selected seates into arr
  // map through array
  // return a new array indexes
  const seatIndex = [...selectedSeates].map(seat => [...seats].indexOf(seat));
  // ^ .... these dots access all the elements selected from querySelectorAll

  localStorage.setItem("selectedSeates", JSON.stringify(seatIndex));

  const selectedSeatesCount = selectedSeates.length;
  count.innerText = selectedSeatesCount;
  total.innerText = selectedSeatesCount * ticketPrice;
}

// movie select events
moveiSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updataSelectedCount();
});

// seat click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updataSelectedCount();
  }
});
