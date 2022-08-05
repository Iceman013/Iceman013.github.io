function disableDrag() {
    var list = document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        list[i].draggable = false;
    }
}
function boxChecking() {
    var list = document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = "rgba(0,255,128,0.2)";
        list[i].style.outline = "1px solid rgb(128,0,64)";
    }
}