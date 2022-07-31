function makeAudios() {
    for (let i = 0; i < jamList.length; i++) {
        var base = document.createElement("audio");
        base.id = "ad" + i;
        
        var jim = document.createElement("source");
        jim.src = "sounds/" + jamList[i].file;
        jim.type = jamList[i].type;
        base.loop = true;
        base.volume = jamList[i].volume;

        base.appendChild(jim);
        document.getElementById("musics").appendChild(base);
    }
}
function makeButtons() {
    for (let i = 0; i < jamList.length; i++) {
        var clack = document.createElement("button");
        clack.onclick = function() {
            document.getElementById("ad" + i).play();
        };
        clack.innerHTML = jamList[i].name;
        document.getElementById("trys").appendChild(clack);
        document.getElementById("trys").appendChild(document.createElement("br"));
    }
}