const major = 1;
const mediu = 0;
const minor = 2;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 0
 * minor: 2
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();