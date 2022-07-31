var playing = false;
var loopDur = 4;

function stateChange(){
    playing = !playing;
    if (playing) {
        mainloop();
    }
}

function mainloop() {
    j=0;
    for (i=0; i<loopDur*4; i++){
        setTimeout(() => {
            eid = "ts" + (j+1);
            j++;
            document.getElementById(eid).play();
        }, i*250);
    }
    setTimeout(() => {
        if (playing) mainloop();
    }, loopDur*1000);
}