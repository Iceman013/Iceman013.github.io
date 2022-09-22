const major = 1;
const mediu = 2;
const minor = 0;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 2
 * minor: 3
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();