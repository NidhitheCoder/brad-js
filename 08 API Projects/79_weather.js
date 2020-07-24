class Weather{
    constructor(city,state){
        this.apiKey = '88d9473fe1ecb7b1df6d4bfc189f2a71';
        this.state = state;
        this.city = city;
    }

    // fetch weather from API
async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
}

// change weather location
changeLocation(city,state){
this.city = city;
this.state = state;
}
}