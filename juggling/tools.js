function getDomainBase() {
    var output = "";
    var address = window.location.href;
    if (address.includes("iceman013") || address.includes("Iceman013")) {
        var search = "juggling";
        output = address.substring(0, address.indexOf(search)) + search + "/";
    } else if (address.includes(".uga.edu")) {
        var search = ".uga.edu"
        output = address.substring(0, address.indexOf(search)) + search + "/";
    } else {
        output = address;
    }
    return output;
}
function getInnerDomain() {
    return window.location.href.substring(getDomainBase().length);
}
function getLastDomain() {
    var out = window.location.href;
    while (out.includes("/")) {
        out = out.substring(out.indexOf("/") + 1);
    }
    return out;
}