function changeSite(target) {
    var address = window.location.href;
    var parent = "resume/";
    var cut = address.indexOf(parent) + parent.length;
    location.href = address.substring(0, cut) + target;
}