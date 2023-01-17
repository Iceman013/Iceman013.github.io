//https://api.ipify.org/
const DAYS = 7;
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
    var forecast = document.getElementById("forecast");
    for (let i = 0; i < DAYS; i++) {
        // Mini Forecast
        function genMini() {
            var base = document.createElement("div");
            base.classList.add("miniForecast");
            base.value = i;

            var date = new Date(data.forecast.forecastday[i].date);
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var day = document.createElement("p");
            day.innerHTML = days[date.getUTCDay()];
            base.appendChild(day);

            var img = document.createElement("img");
            img.src = data.forecast.forecastday[i].day.condition.icon;
            base.appendChild(img);

            // Click toggle for big display
            base.onclick = function() {
                for (let i = 0; i < forecast.childNodes.length; i++) {
                    var temp = forecast.childNodes[i];
                    if (temp.classList.contains("bigForecast")) {
                        if (this.value == temp.value) {
                            temp.style.display = "block";
                        } else {
                            temp.style.display = "none";
                        }
                    } else {
                        if (this.value == temp.value) {
                            temp.style.display = "none";
                        } else {
                            temp.style.display = "block";
                        }
                    }
                }
            }
            return base;
        }
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
        forecast.appendChild(genMini());
        forecast.appendChild(genBig());
    }
    forecast.childNodes[0].click();
}
function startWeather() {
    fetch(getCall()).then(data => data.json().then(d => showWeather(d)));
}
startWeather();