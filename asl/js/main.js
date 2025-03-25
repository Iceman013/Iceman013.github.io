import { Sign } from "./sign.js";
import { SignList } from "./signlist.js";
import { MakeQuestion, ShowSign } from "./question.js";
import { getRandom } from "./tools.js";

function addQOpts(options) {
    let base = document.createElement("div");
    base.classList.add("buttonRow");

    for (let i = 0; i < options.length; i++) {
        let butt = document.createElement("button");
        butt.innerText = options[i].text;
        butt.addEventListener("click", options[i].function);
        base.appendChild(butt);
    }

    return base;
}

function newQuestion() {
    let base = document.getElementById("test");

    // Clear base
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    // Add question plate
    let sign = getRandom(SignList);
    let item = MakeQuestion(sign, 1);
    base.appendChild(item);

    // Add reveal buttons
    base.appendChild(addQOpts([
        {
            "text": "Reveal",
            "function": function() {
                // Clear base
                while (base.firstChild) {
                    base.removeChild(base.firstChild);
                }

                base.appendChild(ShowSign(sign));
                base.appendChild(addQOpts([
                    {
                        "text": "Correct",
                        "function": function() {
                            newQuestion();
                        }
                    },
                    {
                        "text": "Wrong",
                        "function": function() {
                            newQuestion();
                        }
                    }
                ]))
            },
        }
    ]));
}

function start() {
    console.log(SignList.length);
    newQuestion();
}
start();