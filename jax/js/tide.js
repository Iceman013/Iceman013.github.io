import { TEMPMIN, TEMPMAX, DAYCOUNT } from "./constants.js";

export function getTide() {
    let today = (new Date(Date.now()));
    let plusWeek = (new Date(Date.now() + (DAYCOUNT - 1)*24*60*60*1000));

    function turnToKey(input) {
        let year = input.getFullYear() + "";
        let month = (input.getMonth() + 1) + "";
        let day = input.getDate() + "";

        if (month.length < 2) {
            month = "0" + month;
        }
        if (day.length < 2) {
            day = "0" + day;
        }
        return (year + month + day);
    }

    let begin = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?";
    let time = "begin_date=" + turnToKey(today) + "&end_date=" + turnToKey(plusWeek);
    let station = "&station=" + 8720218;
    let other = "&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=h&units=english&application=DataAPI_Sample&format=json";

    let url = begin + time + station + other;
    return url;
}

export function showTide(data, curDay) {
    let parent = document.getElementById("tides");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    let canvas = document.createElement("canvas");
    canvas.id = "tideChart";
    canvas.style.width = "100%";
    parent.appendChild(canvas);

    let xValues = [];
    let tempValues = [];
    let nowTime = [];

    let min = 1000;
    let max = -1000;
    for (let i = 0; i < 24; i++) {
        let ampm = "AM";
        if (i > 11) {
            ampm = "PM";
        }
        xValues.push((((i + 11) % 12) + 1) + ampm);

        tempValues.push(data.predictions[24*curDay + i].v);
        if (tempValues[i] < min) {
            min = tempValues[i];
        }
        if (tempValues[i] > max) {
            max = tempValues[i];
        }

        if ((new Date).getHours() == i) {
            nowTime.push(1000);
        } else {
            nowTime.push(0);
        }
    }
    let tmax = Math.ceil((0.2*(max*1 - min*1)) + max*1);

    let chart = new Chart("tideChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [
            {
                fill: false,
                lineTension: 0,
                pointRadius: 1,
                pointHitRadius: 5,
                borderColor: "#0000ff",
                data: tempValues
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
                yAxes: [{ticks: {min: 0, max: tmax}}],
            },
            animation: false,
            tooltips: {
                callbacks: {
                    label: function(context) {
                        let units = [" ft",""];
                        return context.value + units[context.datasetIndex];
                    }
                }
            },
        }
    });

    document.getElementById("tideChart").style.backgroundColor = "aqua";
}