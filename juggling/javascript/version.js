const major = 3;
const mediu = 1;
const minor = 0;

/* Totals (Since 1.0.0)
 * major: 3
 * mediu: 13
 * minor: 26
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();