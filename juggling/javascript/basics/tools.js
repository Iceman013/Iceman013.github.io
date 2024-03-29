function getDomainBase() {
    var output = "";
    var address = window.location.href;
    if (address.includes("iceman013") || address.includes("Iceman013")) {
        var search = "juggling";
        output = address.substring(0, address.indexOf(search)) + search + "/";
    } else if (address.includes(".uga.edu")) {
        var search = ".uga.edu"
        output = address.substring(0, address.indexOf(search)) + search + "/";
    } else if (address.includes("http://127.0.0.1:5500/")) {
        var search = "127.0.0.1:5500/juggling";
        output = address.substring(0, address.indexOf(search)) + search + "/";
    }else {
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

function getTime(time) {
    var out = "";
    out += (time.getMonth() + 1);
    out += "/";
    out += time.getDate();
    out += "/";
    out += time.getFullYear();

    out += " ";
    
    out += ((time.getHours() - 1)%12 + 1);
    out += ":";
    if (time.getMinutes() < 10) {
        out += "0";
    }
    out += time.getMinutes();
    if (time.getHours() < 12) {
        out += "am";
    } else {
        out += "pm";
    }
    return out;
}