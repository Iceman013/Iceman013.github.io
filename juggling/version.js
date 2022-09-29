const major = 2;
const mediu = 0;
const minor = 2;

/* Totals (Since 1.0.0)
 * major: 2
 * mediu: 5
 * minor: 12
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();