var playing = false;

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
            for (k=0; k<tracks; k++){
                if (document.getElementById("che(" + k + "," +  j + ")").checked) document.getElementById("aud(" + k + "," +  j + ")").play();
            }
            j++;
        }, i*250);
    }
    setTimeout(() => {
        if (playing) mainloop();
    }, loopDur*1000);
}