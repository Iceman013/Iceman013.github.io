function prepAll(song) {
    document.getElementById("content").classList.add("blurred");
    
    var bList = document.getElementsByTagName("button");
    for (let i = 0; i < bList.length; i++) {
        bList[i].disabled = true;
    }

    var base = document.createElement("div");
    base.id = "popup";
    document.body.appendChild(base);
}