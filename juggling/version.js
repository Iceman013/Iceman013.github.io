const major = 2;
const mediu = 4;
const minor = 0;

/* Totals (Since 1.0.0)
 * major: 2
 * mediu: 9
 * minor: 22
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();