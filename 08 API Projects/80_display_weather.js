// init weather object
const weather = new Weather("Karachi", "PK");
const ui = new UI();

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
// weather.changeLocation('cochin','IN')
function getWeather() {
  weather
    .getWeather()
    .then(result => {
      //   console.log(result);
      ui.paint(result);
    })
    .catch(err => console.log(err));
}
