import { trulyBeingDating } from "../main/dating.js";

const list = [
    "This is the portal that leads to the world inhabitted only by bugs.",
    "Beyond this gateway, many new adventures and fresh experiences await your arrival.",
    "Before you depart for adventure, you must answer some questions.",
    "Be truthful when you answer them.",
    "Now, are you ready?",
    "Then... let the questions begin!",
];

function doName() {
    let dad = document.getElementById("intro");
    while (dad.firstChild) {
        dad.removeChild(dad.firstChild);
    }

    let base = document.createElement("div");
    base.id = "name-input";
    dad.appendChild(base);

    let name = document.createElement("input");
    name.type = "text";
    name.id = "input-name";
    base.appendChild(name);

    base.appendChild(document.createElement("br"));

    let submit = document.createElement("button");
    submit.innerText = "Submit";
    base.appendChild(submit);
    submit.addEventListener("click", function() {
        let name = document.getElementById("input-name").value;
        trulyBeingDating(name);
    });
}
function show(qn) {
    let base = document.getElementById("intro");
    let para = document.createElement("p");
    let split = list[qn].split(" ");
    let index = 0;
    let interval;
    let fun = function() {
        para.innerHTML += " " + split[index];
        index++;
        if (index >= split.length) {
            clearInterval(interval);
            para.addEventListener("click", function() {
                if (qn + 1 < list.length) {
                    show(qn + 1);
                } else {
                    doName();
                }
            });
        }
    }

    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    base.appendChild(para);
    interval = setInterval(fun, 200);
}
export function intro() {
    document.getElementById("intro").style.display = "block";
    show(0);
}