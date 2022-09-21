const major = 1;
const mediu = 0;
const minor = 1;
function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();