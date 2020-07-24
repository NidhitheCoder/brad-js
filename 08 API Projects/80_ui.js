class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.humidity.textContent =`relative Humidity:${weather.main.humidity}`
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.icon.textContent = weather.cod;
        this.feelsLike.textContent = weather.main.feels_like;
        this.dewpoint.textContent = weather.main.sea_level;
        this.wind.textContent = weather.wind.speed;
    }
}