function makeLine() {
    var base = document.createElement("div");
    var aud = document.createElement("div");

    var but = document.createElement("select");
    for (let i = 0; i < jamList.length; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = jamList[i].name;
        but.appendChild(opt);
    }
    but.onchange = function() {
        var tb = document.createElement("audio");
        tb.loop = true;
        tb.playbackRate = 0.25;

        var jim = document.createElement("source");
        jim.src = "sounds/" + jamList[but.value].file;
        jim.type = jamList[but.value].type;
        tb.volume = jamList[but.value].volume;
        tb.appendChild(jim);
        while (aud.firstChild) {
            aud.removeChild(aud.firstChild);
        }
        aud.appendChild(tb);
        tb.play();
    }

    base.appendChild(aud);
    base.appendChild(but);
    document.getElementById("musics").appendChild(base);
}

var lis = 5;
for (let i = 0; i < lis; i++) {
    makeLine();
}