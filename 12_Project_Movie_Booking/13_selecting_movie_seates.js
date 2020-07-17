const container = document.querySelector('.container');
const seat = document.querySelector('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const moveiSelect = document.getElementById('movie');

let ticketPrice = +moveiSelect.value; 
// + before value helps to change time to number
// console.log(ticketPrice);

// updata total and count
function updataSelectedCount() {
const selectdSeates = document.querySelectorAll('.row .seat.selected' );
const selectedSeatesCount = selectdSeates.length;
count.innerText = selectedSeatesCount;
total.innerText = selectedSeatesCount * ticketPrice;
}

// movie select events
moveiSelect.addEventListener('change',(e) => {
    ticketPrice = +e.target.value;
    updataSelectedCount();
})

// seat click event
container.addEventListener('click',(e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
       e.target.classList.toggle('selected');
       updataSelectedCount();
    }
})