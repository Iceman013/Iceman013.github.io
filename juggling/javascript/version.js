const major = 3;
const mediu = 0;
const minor = 0;

/* Totals (Since 1.0.0)
 * major: 3
 * mediu: 12
 * minor: 25
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();