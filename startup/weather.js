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
    var end = "&current_weather=true&hourly=temperature_2m,precipitation,weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch";
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

            var details = document.createElement("div");
            details.classList.add("details");
            function addDetails(deBase) {
                // Weather Image
                var img = document.createElement("img");
                img.src = "weatherImages/" + getWeather(data.current_weather.weathercode).image;
                deBase.appendChild(img);

                // Weather Now
                var currentData = document.createElement("div");
                currentData.classList.add("weatherNow");
                function addCurrentData(element) {
                    // Weather
                    var weatherDes = document.createElement("p");
                    weatherDes.innerHTML = getWeather(data.current_weather.weathercode).description;
                    element.appendChild(weatherDes);

                    // Temperature
                    var weatherDesTemp = document.createElement("p");
                    weatherDesTemp.innerHTML = data.current_weather.temperature + "°F";
                    element.appendChild(weatherDesTemp);

                    // Wind speed
                }
                addCurrentData(currentData);
                deBase.appendChild(currentData);

                // Time
                var timedata = document.createElement("div");
                timedata.classList.add("timedata");
                function addTimeData(element) {
                    var date = new Date(data.hourly.time[24*i]);
                    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                    var dayOfWeek = document.createElement("p");
                    var today = new Date();
                    var hours = [12,1,2,3,4,5,6,7,8,9,10,11];
                    var nowTime = hours[today.getHours()%12];
                    nowTime += ":" + today.getMinutes();
                    if (today.getHours() < 12) {
                        nowTime += "AM";
                    } else {
                        nowTime += "PM";
                    }
                    dayOfWeek.innerHTML = days[date.getUTCDay()] + " " + nowTime;
                    element.appendChild(dayOfWeek);

                    var day = document.createElement("p");
                    day.innerHTML = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
                    element.appendChild(day);
                }
                addTimeData(timedata);
                deBase.appendChild(timedata);
            }
            addDetails(details);
            base.appendChild(details);
            
            // Weather Graph
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            var graph = document.createElement("div");
            graph.classList.add("graph");
            base.appendChild(graph);
            current.appendChild(base);
            var chart = [["Time", "Predicted Temperature"]];
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