const major = 2;
const mediu = 0;
const minor = 3;

/* Totals (Since 1.0.0)
 * major: 2
 * mediu: 5
 * minor: 13
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();