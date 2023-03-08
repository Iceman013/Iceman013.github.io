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

    var base = document.getElementById("popup");
    base.style.display = "block";

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
function addBlock(letter, timeout) {
    document.getElementById(letter).classList.add("active");
    console.log(document.getElementById(letter));

    setTimeout(function() {
        document.getElementById(letter).classList.remove("active");
    }, timeout);
}