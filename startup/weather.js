//https://api.ipify.org/
const DAYS = 8;
var weather;
function getCall() {
    var cityTEMP = "198.137.18.35";
    var base = "https://api.weatherapi.com/v1/" + "forecast.json";
    var key = "?key=" + WEATHERKEY;
    var city = "&q=" + cityTEMP;
    var time = "&days=" + DAYS;
    var end = "&aqi=no";
    return base + key + city + time + end;
}
function showWeather(data) {
    console.log(data);
    var current = document.getElementById("current");
    var forecast = document.getElementById("forecast");
    for (let i = 0; i < DAYS; i++) {
        // Big Forecast
        function genBig() {
            var base = document.createElement("div");
            base.classList.add("bigForecast");
            base.value = i;

            var date = new Date(data.forecast.forecastday[i].date);
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var day = document.createElement("p");
            day.innerHTML = days[date.getUTCDay()];
            base.appendChild(day);

            var img = document.createElement("img");
            img.src = data.forecast.forecastday[i].day.condition.icon;
            base.appendChild(img);

            return base;
        }
        // Mini Forecast
        function genMini() {
            var base = document.createElement("div");
            base.classList.add("miniForecast");
            base.value = i;

            var date = new Date(data.forecast.forecastday[i].date);
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var day = document.createElement("p");
            day.innerHTML = days[date.getUTCDay()].substring(0,3);
            base.appendChild(day);

            var img = document.createElement("img");
            img.src = data.forecast.forecastday[i].day.condition.icon;
            base.appendChild(img);

            var mintemp = document.createElement("p");
            mintemp.classList.add("temperature");
            mintemp.innerHTML = Math.round(data.forecast.forecastday[i].day.mintemp_f) + "°F";
            base.appendChild(mintemp);
            var maxtemp = document.createElement("p");
            maxtemp.classList.add("temperature");
            maxtemp.innerHTML = Math.round(data.forecast.forecastday[i].day.maxtemp_f) + "°F";
            base.appendChild(maxtemp);

            // Click toggle for big display
            base.onclick = function() {
                for (let i = 0; i < current.childNodes.length; i++) {
                    var temp = current.childNodes[i];
                    if (this.value == temp.value) {
                        temp.style.display = "block";
                    } else {
                        temp.style.display = "none";
                    }
                }
            }
            return base;
        }
        current.appendChild(genBig());
        forecast.appendChild(genMini());
    }
    forecast.childNodes[0].click();
}
function startWeather() {
    fetch(getCall()).then(data => data.json().then(d => showWeather(d)));
}
startWeather();