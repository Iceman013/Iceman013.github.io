const major = 1;
const mediu = 2;
const minor = 1;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 2
 * minor: 4
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();