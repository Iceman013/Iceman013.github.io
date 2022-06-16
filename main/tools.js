function disableDrag() {
    var list = document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        list[i].draggable = false;
    }
}