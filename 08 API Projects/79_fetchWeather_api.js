// init  Weather object 
const weather = new Weather('karachi','PAK');

// get weather on DOM load 
document.addEventListener('DOMContentLoaded',getWeather);

// weather.changeLocation('cochin','IN');
function getWeather(){
weather.getWeather()
.then(result => {
    console.log(result);
})
.catch(err => console.log(err));
}
