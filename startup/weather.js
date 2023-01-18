// https://api.ipify.org/
// https://open-meteo.com/
// https://developers.google.com/chart/interactive/docs/gallery/areachart
const DAYS = 7;
var weather;
function getCall() {
    var LAT = 33.95;
    var LON = -83.35;
    var base = "https://api.open-meteo.com/v1/forecast?";
    var lattitude = "latitude=" + LAT;
    var longitude = "&longitude=" + LON;
    var end = "&hourly=temperature_2m,precipitation,weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch";
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
            day.innerHTML = days[date.getUTCDay()] + " " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            base.appendChild(day);

            /*
            var img = document.createElement("img");
            img.src = data.forecast.forecastday[i].day.condition.icon;
            base.appendChild(img);
            */
            
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            var graph = document.createElement("div");
            graph.classList.add("graph");
            base.appendChild(graph);
            current.appendChild(base);
            var chart = [["Time", "Temperature"]];
            for (let j = 0; j < 24; j++) {
                var times = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"];
                var row = [
                    times[j],
                    data.hourly.temperature_2m[24*i + j]
                ];
                chart.push(row);
            }
            function drawChart() {
                var datam = google.visualization.arrayToDataTable(chart);

                var options = {
                    title: "Temperature",
                    legend: { position: "none" },
                    backgroundColor: { fill: document.body.style.backgroundColor },
                    chartArea: {
                        width: "90%"
                    },
                    hAxis: { showTextEvery: 3 }
                };

                var chartf = new google.visualization.AreaChart(graph);
                chartf.draw(datam, options);
            }
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
            mintemp.innerHTML = Math.round(min) + "°F";
            maxtemp.innerHTML = Math.round(max) + "°F";
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
        genBig();
        forecast.appendChild(genMini());
    }
    google.charts.setOnLoadCallback(function() {forecast.childNodes[0].click()});
}
function startWeather() {
    fetch(getCall()).then(data => data.json().then(d => showWeather(d)));
}
startWeather();