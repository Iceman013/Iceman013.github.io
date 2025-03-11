import { DAYCOUNT } from "./constants.js";
import { showTide } from "./tide.js";
import { showWeather } from "./weather.js";

export function makeDays(data, tData) {
    let base = document.getElementById("days");
    base.style.gridTemplateColumns = "repeat(" + DAYCOUNT + ", 1fr)";

    for (let i = 0; i < DAYCOUNT; i++) {
        let item = makeDay(i);
        base.appendChild(item);
        item.addEventListener("click", function() {
            showWeather(data, i);
            showTide(tData, i);
        })
    }
}

function makeDay(count) {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let now = Date.now();
    let future = new Date(now + count*24*60*60*1000);

    let base = document.createElement("div");
    base.classList.add("day");
    
    let dow = document.createElement("h3");
    dow.innerText = days[future.getDay()];

    let date = document.createElement("p");
    date.innerText = (future.getMonth() + 1) + "/" + future.getDate() + "/" + future.getFullYear();

    base.appendChild(dow);
    base.appendChild(date);

    return base;
}