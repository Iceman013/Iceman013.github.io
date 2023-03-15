function prepAll(song) {
    var playing = document.getElementsByTagName("audio");
    for (let i = 0; i < playing.length; i++) {
        playing[i].pause();
    }
    
    document.getElementById("content").classList.add("blurred");
    
    var bList = document.getElementById("content").getElementsByTagName("button");
    for (let i = 0; i < bList.length; i++) {
        bList[i].disabled = true;
    }

    document.getElementById("popup").style.display = "block";
    var base = document.getElementById("addons");

    var audio = document.createElement("audio");
    audio.id = "mainAudio";
    audio.src = "songs/" + song.src;
    base.appendChild(audio);

    var noteList = [];
    for (let i = 0; i < song.beat.length; i++) {
        for (let j = 0; j < song.beat[i][1].length; j++) {
            noteList.push(new Note(song.beat[i][0], song.beat[i][1].substring(j, j + 1)));
            if (song.beat[i][2]) {
                noteList[noteList.length - 1].duration = song.beat[i][2] - song.beat[i][0];
            }
        }
    }
    
    var cTime = 0;
    var interval = 10;
    function cow() {
        var time = audio.currentTime;
        if (time == 0) {
            cTime += interval;
            if (cTime >= 1000) {
                audio.play();
            }
        }
        for (let i = 0; i < noteList.length; i++) {
            var note = noteList[i];
            if (!note.prepped) {
                if (time*1000 + note.prepTime >= note.time) {
                    note.prep();
                }
            }
        }
    }
    setInterval(cow, interval);
}
function addPrep(letter, prep, duration) {
    var base = document.getElementById(letter);
    var item = document.createElement("div");
    item.classList.add("notice");
    base.insertBefore(item, base.firstChild);

    item.classList.add("prep");
    setTimeout(function() {
        item.classList.remove("prep");
        item.classList.add("active");
        setTimeout(function() {
            item.classList.remove("active");
            base.removeChild(item);
        }, duration);
    }, prep);
}
function removePrep() {
    var dad = document.getElementById("addons");
    while (dad.firstChild) {
        dad.removeChild(dad.firstChild);
    }
    document.getElementById("popup").style.display = "none";

    var content = document.getElementById("content");
    var bList = content.getElementsByTagName("button");
    for (let i = 0; i < bList.length; i++) {
        bList[i].disabled = false;
    }
    content.classList.remove("blurred");
}