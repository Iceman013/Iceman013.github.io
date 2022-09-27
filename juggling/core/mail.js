function check() {
    var fields = ["page","message"];
    var cando = true;
    for (let i = 0; i < fields.length; i++) {
        if (document.getElementById(fields[i]).value == "") {
            cando = false;
        }
    }
    if (cando) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}
window.addEventListener("keyup", function() { check() });
window.addEventListener("keydown", function() { check() });
window.addEventListener("keypress", function() { check() });
window.addEventListener("click", function() { check() });