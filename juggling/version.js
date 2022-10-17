const major = 2;
const mediu = 5;
const minor = 1;

/* Totals (Since 1.0.0)
 * major: 2
 * mediu: 10
 * minor: 23
 */

function update() {
    var base = document.getElementById("version");
    base.innerHTML = major + "." + mediu + "." + minor;
}
update();