var trans = 0;
const modes = ["stats"];

function openModal(name, other) {
    trans++;
    var base = document.getElementById(name);
    if (other) {
        base.style.display = "block";
        trans = 0;
    } else if (trans == 2) {
        base.style.display = "none";
    }
}

for (let i = 0; i < modes.length; i++) {
    const temp = modes[i];
    document.getElementById(temp).addEventListener("click", function() {
        openModal(temp, true);
    });
}
window.addEventListener("click", function() {
    for (let i = 0; i < modes.length; i++) {
        openModal(modes[i], false);
    }
});