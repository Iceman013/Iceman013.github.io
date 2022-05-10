function changeSite(address) {
    window.location.href = address;
}
function clickSite(base, address) {
    base.addEventListener("click", function() {
        changeSite(address);
    });
}
function disableDrag() {
    var list = document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        list[i].draggable = false;
    }
}