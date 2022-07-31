var playing = false;

function stateChange(){
    playing = !playing;
    if (playing) {
        mainloop();
    }
}

function mainloop() {
    j=-1;
    for (i=0; i<loopDur*4; i++){
        setTimeout(() => {
            eid = "ts" + (j+1);
            j++;
            for (k=0; k<tracks; k++){
                if (document.getElementById("che(" + k + "," +  j + ")").checked) document.getElementById("aud(" + k + "," +  j + ")").play();
            }
        }, i*250);
    }
    setTimeout(() => {
        if (playing) mainloop();
    }, loopDur*1000);
}

function lineImp() {
    lar = document.getElementById("tImp").value.split(";");
    for (j=0; j<lar.length; j++) {
        ar = lar[j].split(",");
        document.getElementById("but" + j).value = ar[0];
        document.getElementById("but" + j).imp(j, ar[0]);
        for (i=1; i<ar.length; i++) {
            if (ar[i] == "1") {
                document.getElementById("che(" + j + "," + (i-1) + ")").checked = true;
            }
        }
    }
}

function lineExp() {
    lar = "";
    for (j=0; j<tracks; j++) {
        if (document.getElementById("but" + j).value != -1){
            if (j>0) lar+= ";"
            lar += document.getElementById("but" + j).value;
            for (i=0; i<16; i++) {
                if (document.getElementById("che(" + j + "," + i + ")").checked) {
                    lar += ",1";
                } else {
                    lar += ",0";
                }
            }
        }
    }
    navigator.clipboard.writeText(lar);
    alert("Copied to clipboard!");
}