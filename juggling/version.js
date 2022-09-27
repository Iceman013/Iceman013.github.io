const major = 1;
const mediu = 4;
const minor = 2;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 4
 * minor: 6
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();