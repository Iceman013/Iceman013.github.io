function addInput() {
    document.getElementById("g").value = 0;
    document.getElementById("r").value = 0;
    var a = 0;
    while (a < main.length) {
        const b = a;
        var papa = document.createElement("div");
        papa.classList.add("letter");

        var element = document.createElement("button");
        element.style.backgroundColor = "rgb(0, 255, 0)";
        element.addEventListener("click", function() {
            press(b, 1);
        });
        papa.appendChild(element);
        papa.appendChild(document.createElement("br"));

        var element = document.createElement("button");
        element.style.backgroundColor = "rgb(255, 255, 0)";
        element.addEventListener("click", function() {
            press(b, 2);
        });
        papa.appendChild(element);
        papa.appendChild(document.createElement("br"));

        var element = document.createElement("button");
        element.style.backgroundColor = "rgb(255, 0, 0)";
        element.addEventListener("click", function() {
            press(b, 3);
        });
        papa.appendChild(element);
        papa.appendChild(document.createElement("br"));

        var element = document.createElement("text");
        element.id = "input" + a.toString();
        papa.appendChild(element);
        document.getElementById("input").appendChild(papa);
        a = a + 1;
    }
}
function displayRec(input) {
    document.getElementById("g").value = document.getElementById("g").value + 1;
    document.getElementById("g").innerHTML = document.getElementById("g").value;
    document.getElementById("r").innerHTML = document.getElementById("r").value;
    var a = 0;
    while (a < main.length) {
        if (!main.guesses[a].correct) {
            document.getElementById("input" + a.toString()).style.backgroundColor = "rgb(255, 255, 255)";
        }
        document.getElementById("input" + a.toString()).innerHTML = input.substring(a, a + 1);
        a = a + 1;
    }
}
function press(position, type) {
    var element = document.getElementById("input" + (position).toString());
    var str = element.innerHTML;
    if (type == 1) {
        main.confirm(position, str);
        element.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (type == 2) {
        main.yellow(position, str);
        element.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (type == 3) {
        main.remove(str);
        element.style.backgroundColor = "rgb(255, 0, 0)";
    }
}