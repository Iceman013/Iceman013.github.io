var playing = false;

function stateChange(){
    playing = !playing;
    if (playing) {
        mainloop();
    }
}


function mainloop() {
    j=0;
    for (i=0; i<16; i++){
        setTimeout(() => {
            eid = "ts" + (j+1);
            j++;
            document.getElementById(eid).play();
        }, i*250);
    }
    setTimeout(() => {
        if (playing) mainloop();
    }, 4000);
}