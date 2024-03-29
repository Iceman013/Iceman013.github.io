var playing = false;
var pval = 0;
var lit = [];

function stateChange(){
    playing = !playing;
    if (playing) {
        mainloop();
        document.getElementById("egg").innerHTML = "Stop"
    } else {
        document.getElementById("egg").innerHTML = "Please Wait"
        document.getElementById("egg").disabled = true;
        pval = 0;
        while (lit.length > 0) {
            document.getElementById("bli(" + lit[0][0] + "," + lit[0][1] + ")").style.filter = "opacity(1)";
            lit.shift();
        }
    }
}

function mainloop() {
    j=-1;
    for (i=0; i<loopDur*frequency; i++){
        setTimeout(() => {
            eid = "ts" + (j+1);
            j++;
            if (pval == j){
                for (k=0; k<tracks; k++){
                    if (document.getElementById("but" + k).value != -1) {                    
                        document.getElementById("bli(" + k + "," + j + ")").style.filter = "opacity(.85)";
                        lit.push([k,j])
                        setTimeout(() => {
                            document.getElementById("bli(" + lit[0][0] + "," + lit[0][1] + ")").style.filter = "opacity(1)";
                            lit.shift();
                        }, 250);
                        if (document.getElementById("che(" + k + "," +  j + ")").checked) document.getElementById("aud(" + k + "," +  j + ")").play();
                    }
                }
                pval++;
                if (pval >= loopDur*frequency) pval = 0;
            }
        }, i*250);
    }
    setTimeout(() => {
        if (playing) { 
            mainloop() 
        } else {
            document.getElementById("egg").innerHTML = "Play";
            document.getElementById("egg").disabled = false;
        }
    }, loopDur*1000);
}

function lineImp() {
    lar = document.getElementById("tImp").value.split(";");
    for (j=0; j<lar.length; j++) {
        ar = lar[j].split(":");
        document.getElementById("but" + j).value = jamList.findIndex(element => element.id == ar[0]);
        document.getElementById("but" + j).imp(j, ar[0]);
        bin = parseInt(ar[1], 16).toString(2).padStart(loopDur*frequency+1, '0');
        console.log(bin);
        ar = bin.split("");
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
            lar += jamList[document.getElementById("but" + j).value].id + ":";
            bin = "";
            for (i=0; i<16; i++) {
                if (document.getElementById("che(" + j + "," + i + ")").checked) {
                    bin += "1";
                } else {
                    bin += "0";
                }
            }
            hex = parseInt(bin, 2).toString(16).toUpperCase();
            lar += hex;
        }
    }
    navigator.clipboard.writeText(lar);
    alert("Copied to clipboard!");
}