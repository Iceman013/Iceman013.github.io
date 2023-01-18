//https://api.ipify.org/
const DAYS = 7;
var weather;
function getCall() {
    var LAT = 33.95;
    var LON = -83.35;
    var base = "https://api.open-meteo.com/v1/forecast?";
    var lattitude = "latitude=" + LAT;
    var longitude = "&longitude=" + LON;
    var end = "&hourly=temperature_2m,weathercode";
    return base + lattitude + longitude + end;
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

            var date = new Date(data.hourly.time[24*i]);
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var day = document.createElement("p");
            day.innerHTML = days[date.getUTCDay()];
            base.appendChild(day);

            /*
            var img = document.createElement("img");
            img.src = data.forecast.forecastday[i].day.condition.icon;
            base.appendChild(img);
            */

            return base;
        }
        // Mini Forecast
        function genMini() {
            var base = document.createElement("div");
            base.classList.add("miniForecast");
            base.value = i;

            var date = new Date(data.hourly.time[24*i]);
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var day = document.createElement("p");
            day.innerHTML = days[date.getUTCDay()].substring(0,3);
            base.appendChild(day);

            var img = document.createElement("img");
            var codes = [];
            var counts = [];
            for (let j = 0; j < 24; j++) {
                var wcode = data.hourly.weathercode[24*i + j];
                if (codes.includes(wcode)) {
                    counts[codes.indexOf(wcode)]++;
                } else {
                    codes.push(wcode);
                    counts.push(0);
                }
            }
            var code = 0;
            for (let j = 0; j < 24; j++) {
                if (counts[j] > counts[code]) {
                    code = j;
                }
            }
            img.src = "weatherImages/" + getWeather(codes[code]).image;
            base.appendChild(img);

            var mintemp = document.createElement("p");
            mintemp.classList.add("temperature");
            var maxtemp = document.createElement("p");
            maxtemp.classList.add("temperature");
            var min;
            var max;
            for (let j = 0; j < 24; j++) {
                var temp = data.hourly.temperature_2m[24*i + j];
                if (min == undefined || min > temp) {
                    min = temp;
                }
                if (max == undefined || max < temp) {
                    max = temp;
                }
            }
            mintemp.innerHTML = Math.round(1.8*min + 32) + "°F";
            maxtemp.innerHTML = Math.round(1.8*max + 32) + "°F";
            base.appendChild(mintemp);
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