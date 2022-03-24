const TICK = 5000;
var chosenOne = false;
var slider = 0;
function show() {
    slider = (slideList.length + slider) % slideList.length;
    var temp = document.getElementById("slider");
    while (temp.firstChild) {
        temp.removeChild(temp.firstChild);
    }
    document.getElementById("slider").appendChild(slideList[slider].getBase());
}
function addButtons() {
    document.getElementById("shiftl").addEventListener("click", function() {
        chosenOne = false;
        slider--;
        show();
    });
    document.getElementById("shiftr").addEventListener("click", function() {
        chosenOne = false;
        slider++;
        show();
    });
}
function begin() {
    show();
    addButtons();
}
begin();
var intervalId = window.setInterval(function() {
    if (chosenOne) {
        slider++;
    }
    chosenOne = true;
    show();
}, TICK);