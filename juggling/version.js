const major = 1;
const mediu = 5;
const minor = 2;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 5
 * minor: 9
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();