// init storage object
const storage = new Storage();
// get stored lication data
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// init UI object
const ui = new UI();

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// ?change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // change location
  weather.changeLocation(city, state);

  //  set Location in Ls
  storage.setLocationData(city, state);

  //  get and display weather
  getWeather();

  // close Model
  $("#locModal").modal("hide");
});
// weather.changeLocation('cochin','IN');
function getWeather() {
  weather
    .getWeather()
    .then(result => {
      ui.paint(result);
    })
    .catch(err => console.log(err));
}
