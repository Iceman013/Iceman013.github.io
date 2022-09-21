const major = 1;
const mediu = 1;
const minor = 0;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 1
 * minor: 2
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();