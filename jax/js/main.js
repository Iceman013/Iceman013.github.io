import { makeDays } from "./days.js";
import { getCall, showWeather } from "./weather.js";
import { getTide, showTide } from "./tide.js";
import { showCorner } from "./corner.js";

async function getData() {
    let result = await fetch(getCall());
    let data = await result.json();
    return data;
}
async function getTides() {
    let result = await fetch(getTide());
    let data = await result.json();
    return data;
}

async function start() {
    let data = await getData();
    let tData = await getTides();
    console.log(data);

    makeDays(data, tData);
    showWeather(data, 0);
    showTide(tData, 0);
    showCorner(data);
}
start();