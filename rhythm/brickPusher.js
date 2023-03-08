function prepAll(song) {
    document.getElementById("content").classList.add("blurred");
    
    var bList = document.getElementsByTagName("button");
    for (let i = 0; i < bList.length; i++) {
        bList[i].disabled = true;
    }

    var base = document.createElement("div");
    base.id = "popup";
    document.body.appendChild(base);

    var audio = document.createElement("audio");
    audio.id = "mainAudio";
    audio.src = "songs/" + song.src;
    base.appendChild(audio);

    var noteList = [];
    for (let i = 0; i < song.beat.length; i++) {
        for (let j = 0; j < song.beat[i][1].length; j++) {
            noteList.push(new Note(song.beat[i][0], song.beat[i][1].substring(j, j + 1)));
        }
    }
    
    function cow() {
        for (let i = 0; i < noteList.length; i++) {
            if (!noteList[i].played) {
                if (audio.currentTime*1000 >= noteList[i].time) {
                    noteList[i].play();
                }
            }
        }
    }
    setInterval(cow, 10);
    audio.play();
}
function addBlock(letter) {
    var base = document.getElementById("popup");

    var cha = document.createElement("h1");
    cha.classList.add("note");
    cha.innerHTML = letter;
    base.appendChild(cha);

    setTimeout(function() {
        base.removeChild(cha);
    }, 250);
}