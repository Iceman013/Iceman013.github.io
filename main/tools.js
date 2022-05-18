function clickSite(base, address) {
    base.addEventListener("mouseup", function(e) {
        if (e.which == 1) {
            window.location.href = address;
        } else if (e.which == 2) {
            e.preventDefault();
            window.open(address, '_blank');
        }
    });
}
function disableDrag() {
    var list = document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        list[i].draggable = false;
    }
}