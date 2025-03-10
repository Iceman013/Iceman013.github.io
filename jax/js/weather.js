// https://api.ipify.org/
// https://open-meteo.com/
// https://developers.google.com/chart/interactive/docs/gallery/areachart
import { TEMPMIN, TEMPMAX, DAYCOUNT } from "./constants.js";

export function getCall() {
    let latitude = 33.95;
    let longitude = -83.35;
    function setPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else {
        console.error("User has disabled location");
    }
    let base = "https://api.open-meteo.com/v1/forecast?";
    let coords = "latitude=" + latitude + "&longitude=" + longitude;
    let end = "&current_weather=true&hourly=temperature_2m,precipitation_probability,weathercode&temperature_unit=fahrenheit&windspeed_unit=mph";
    return base + coords + end;
}

export function showWeather(data, curDay) {
    let parent = document.getElementById("weather");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    let canvas = document.createElement("canvas");
    canvas.id = "tempChart";
    canvas.style.width = "100%";
    parent.appendChild(canvas);

    let xValues = [];
    let tempValues = [];
    let percValues = [];
    let nowTime = [];
    for (let i = 0; i < 24; i++) {
        let ampm = "AM";
        if (i > 11) {
            ampm = "PM";
        }
        xValues.push((((i + 11) % 12) + 1) + ampm);

        tempValues.push(data.hourly.temperature_2m[24*curDay + i]);
        percValues.push(data.hourly.precipitation_probability[24*curDay + i]);
        if ((new Date).getHours() == i) {
            nowTime.push(TEMPMAX*2);
        } else {
            nowTime.push(TEMPMIN);
        }
    }

    let chart = new Chart("tempChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [
            {
                fill: false,
                lineTension: 0,
                pointRadius: 1,
                pointHitRadius: 5,
                borderColor: "#ff0000",
                data: tempValues
            },
            {
                fill: false,
                lineTension: 0,
                pointRadius: 1,
                pointHitRadius: 5,
                borderColor: "#0000ff",
                data: percValues
            },
            {
                type: "bar",
                backgroundColor: "#000000",
                barThickness: 2,
                data: nowTime,
            }
        ]
        },
        options: {
            legend: {display: false},
            scales: {
                yAxes: [{ticks: {min: TEMPMIN, max: TEMPMAX}}],
            },
            animation: false,
            tooltips: {
                callbacks: {
                    label: function(context) {
                        let units = ["°F","%",""];
                        return context.value + units[context.datasetIndex];
                    }
                }
            },
        }
    });

    document.getElementById("tempChart").style.backgroundColor = "aqua";
}