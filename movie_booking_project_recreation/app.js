const container = document.getElementById('screen-container');
const seats = document.querySelectorAll('seats');
const selectedSeates = document.querySelector('selected');

container.addEventListener('click',(e) => {
console.log(e.target);
})