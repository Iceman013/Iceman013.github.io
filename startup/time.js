function getDate(date) {
    return (1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear();
}
function getClock(date) {
    var hours = [12,1,2,3,4,5,6,7,8,9,10,11];
    var post = ["AM","PM"];
    var out = "";
    out += hours[date.getHours()%12];
    out += ":";
    if (date.getMinutes() < 10) {
        out += "0";
    }
    out += date.getMinutes();
    out += " ";
    if (date.getHours() < 12) {
        out += post[0];
    } else {
        out += post[1];
    }
    return out;
}
function getFull(date) {
    return getDate(date) + " " + getClock(date);
}