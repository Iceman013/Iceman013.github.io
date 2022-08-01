function makeSlot(tc, slotter, jammerid) {
    var base = document.createElement("div");
    var audio = document.createElement("audio");

    var clifford = document.createElement("div");
    clifford.id = "bli(" + tc + "," + slotter + ")";
    var check = document.createElement("input");
    check.type = "checkbox";
    check.id = "che(" + tc + "," + slotter + ")";
    var casper = document.createElement("span");
    casper.classList.add("checkmark");
    if (slotter%frequency == frequency - 1) {
        casper.classList.add("frequent");
    }
    clifford.appendChild(check);
    clifford.appendChild(casper);
    clifford.classList.add("slot");

    base.appendChild(audio);
    audio.id = "aud(" + tc + "," + slotter + ")";

    base.appendChild(clifford);
    base.classList.add("container");

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
    but.id = "but" + tc;
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
        while (aud.firstChild) {
            aud.removeChild(aud.firstChild);
        }
        for (let i = 0; i < frequency*loopDur; i++) {
            aud.appendChild(makeSlot(tc, i, e.target.value));
        }
    }

    var slidyTheSlidesturMagicalSliderManOfSlidopolis = document.createElement("input");
    slidyTheSlidesturMagicalSliderManOfSlidopolis.type = "range";
    slidyTheSlidesturMagicalSliderManOfSlidopolis.min = 0;
    slidyTheSlidesturMagicalSliderManOfSlidopolis.max = 10;
    slidyTheSlidesturMagicalSliderManOfSlidopolis.onchange = function(e) {
        for (let i = 0; i < frequency*loopDur; i++) {
            document.getElementById("aud(" + tc + "," + i + ")").volume = 0.1*e.target.value;
        }
    }
    slidyTheSlidesturMagicalSliderManOfSlidopolis.classList.add("slidopolian");

    but.imp = function(tc, v){
        while (aud.firstChild) {
            aud.removeChild(aud.firstChild);
        }
        for (let i = 0; i < 4*loopDur; i++) {
            aud.appendChild(makeSlot(tc, i, v));
        }
    }
    
    base.appendChild(but);
    base.appendChild(slidyTheSlidesturMagicalSliderManOfSlidopolis);
    base.appendChild(aud);
    document.getElementById("musics").appendChild(base);
}

for (let i = 0; i < tracks; i++) {
    makeLine(i);
}