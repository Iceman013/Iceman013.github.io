const major = 2;
const mediu = 3;
const minor = 1;

/* Totals (Since 1.0.0)
 * major: 2
 * mediu: 8
 * minor: 22
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();