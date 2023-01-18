function Weather(number, image, description) {
    this.number = number;
    this.image = image;
    this.description = description;
}
const WEATHERLIST = [
    new Weather(-1, "error.png", "ERROR"),
    new Weather(0, "clearsky.png", "Clear sky"),
    new Weather(1, "mainlyClear.png", "Mainly clear"),
    new Weather(2, "partlyCloudy.png", "Partly cloudy"),
    new Weather(3, "overcast.png", "Overcast"),
    new Weather(45, "fog.png", "Fog"),
    new Weather(48, "fog.png", "Rime fog"),
    new Weather(51, "drizzle.png", "Light drizzle"),
    new Weather(53, "drizzle.png", "Moderate drizzle"),
    new Weather(55, "drizzle.png", "Dense drizzle"),
    new Weather(56, "freezingDrizzle.png", "Light freezing drizzle"),
    new Weather(57, "freezingDrizzle.png", "Dense freezing drizzle"),
    new Weather(61, "rain.png", "Slight rain"),
    new Weather(63, "rain.png", "Moderate rain"),
    new Weather(65, "rain.png", "Heavy rain"),
    new Weather(66, "freezingRain.png", "Light freezing rain"),
    new Weather(67, "freezingRain.png", "Heavy freezing rain"),
    new Weather(71, "snow.png", "Slight snow fall"),
    new Weather(73, "snow.png", "Moderate snow fall"),
    new Weather(75, "snow.png", "Heavy snow fall"),
    new Weather(77, "snow.png", "Snow grains"),
    new Weather(80, "rain.png", "Slight rain showers"),
    new Weather(81, "rain.png", "Moderate rain showers"),
    new Weather(82, "rain.png", "Violent rain showers"),
    new Weather(85, "snow.png", "Slight snow showers"),
    new Weather(86, "snow.png", "Heavy snow showers"),
    new Weather(95, "thunderstorm.png", "Thunderstorm"),
    new Weather(96, "thunderstorm.png", "Thunderstorm with slight hail"),
    new Weather(99, "thunderstorm.png", "Thunderstorm with heavy hail"),
];

function getWeather(code) {
    var out = WEATHERLIST[0];
    for (let i = 0; i < WEATHERLIST.length; i++) {
        if (WEATHERLIST[i].number == code) {
            out = WEATHERLIST[i];
            i = WEATHERLIST.length;
        }
    }
    return out;
}