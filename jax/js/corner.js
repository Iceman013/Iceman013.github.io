import { getWeather } from "./weatherImage.js";

export function showCorner(data) {
    let parent = document.getElementById("corner");

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    let now = new Date();
    let date = document.createElement("h3");
    let time = (now.getHours() % 12);
    if (now.getMinutes() < 10) {
        time += ":0" + now.getMinutes();
    } else {
        time += ":" + now.getMinutes();
    }
    if (now.getHours() < 12) {
        time += " AM";
    } else {
        time += "PM";
    }
    
    date.innerText = (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + time;

    let temp = document.createElement("p");
    temp.innerText = "Temp: " + data.current_weather.temperature + "°F";

    let wind = document.createElement("p");
    let dirs = ["N","NE","E","SE","S","SW","W","NW"];
    wind.innerText = "Wind: " + data.current_weather.windspeed + "mph " + dirs[Math.floor((data.current_weather.winddirection/(360/8)) + 0.5) % 8];

    let img = document.createElement("img");
    img.src = "weatherImages/" + getWeather(data.current_weather.weathercode).image;

    parent.appendChild(date);
    parent.appendChild(temp);
    parent.appendChild(wind);
    parent.appendChild(img);
}