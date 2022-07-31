function makeSlot(tc, slotter, jammerid) {
    var base = document.createElement("div");
    var audio = document.createElement("audio");
    var check = document.createElement("input");
    check.type = "checkbox";
    check.id = "che(" + tc + "," + slotter + ")";

    base.appendChild(audio);
    audio.id = "aud(" + tc + "," + slotter + ")";

    base.appendChild(check);
    base.classList.add("slot");

    if (jammerid != -1) {
        var jim = document.createElement("source")
        jim.src = "sounds/" + jamList[jammerid].file;
        jim.type = jamList[jammerid].type;
        jim.volume = 0;
        audio.appendChild(jim);

        check.onchange = function() {
            jim.volume = 1 - jim.volume;
        };
    }
    return base;
}
function makeLine(tc) {
    var base = document.createElement("div");
    base.classList.add("line");
    var aud = document.createElement("div");

    var but = document.createElement("select");
    var to = document.createElement("option");
    to.value = -1;
    to.innerHTML = "None";
    but.appendChild(to);
    for (let i = 0; i < jamList.length; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = jamList[i].name;
        but.appendChild(opt);
    }
    but.onchange = function(e) {
        console.log(e.target.value);
        while (aud.firstChild) {
            aud.removeChild(aud.firstChild);
        }
        for (let i = 0; i < 4*loopDur; i++) {
            aud.appendChild(makeSlot(tc, i, e.target.value));
        }
    }
    
    base.appendChild(but);
    base.appendChild(aud);
    document.getElementById("musics").appendChild(base);
}

var lines = 3;
for (let i = 0; i < lines; i++) {
    makeLine(i);
}