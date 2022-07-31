var playing = false;

function stateChange(){
    playing = !playing;
    if (playing) {
        mainloop();
    }
}


function mainloop() {
    document.getElementById("ts1").play();
    setTimeout(() => {
        document.getElementById("ts2").play();
    }, 250);
    setTimeout(() => {
        document.getElementById("ts3").play();
    }, 500);
    setTimeout(() => {
        document.getElementById("ts4").play();
    }, 750);
    setTimeout(() => {
        document.getElementById("ts5").play();
    }, 1000);
    setTimeout(() => {
        document.getElementById("ts6").play();
    }, 1250);
    setTimeout(() => {
        document.getElementById("ts7").play();
    }, 1500);
    setTimeout(() => {
        document.getElementById("ts8").play();
    }, 1750);
    setTimeout(() => {
        document.getElementById("ts9").play();
    }, 2000);
    setTimeout(() => {
        document.getElementById("ts10").play();
    }, 2250);
    setTimeout(() => {
        document.getElementById("ts11").play();
    }, 2500);
    setTimeout(() => {
        document.getElementById("ts12").play();
    }, 2750);
    setTimeout(() => {
        document.getElementById("ts13").play();
    }, 3000);
    setTimeout(() => {
        document.getElementById("ts14").play();
    }, 3250);
    setTimeout(() => {
        document.getElementById("ts15").play();
    }, 3500);
    setTimeout(() => {
        document.getElementById("ts16").play();
    }, 3750);
    setTimeout(() => {
        if (playing) mainloop();
    }, 4000);
}