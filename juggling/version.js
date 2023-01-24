const major = 2;
const mediu = 6;
const minor = 2;

/* Totals (Since 1.0.0)
 * major: 2
 * mediu: 11
 * minor: 25
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();