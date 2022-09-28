const major = 1;
const mediu = 5;
const minor = 3;

/* Totals (Since 1.0.0)
 * major: 1
 * mediu: 5
 * minor: 10
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();