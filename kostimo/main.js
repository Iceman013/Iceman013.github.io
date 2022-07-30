function makeAudios() {
    for (let i = 0; i < jamList.length; i++) {
        var base = document.createElement("audio");
        base.id = "ad" + i;
        base.loop = "true";
        
        var jim = document.createElement("source");
        jim.src = jamList[i].file;
        jim.type = "audio/mpeg";

        base.appendChild(jim);
        document.getElementById("musics").appendChild(base);
    }
}
makeAudios();