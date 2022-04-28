const TICK = 10;
var player = new User();
function press(player) {
    var code = "";
    code += keys["w"];
    code += keys["a"];
    code += keys["s"];
    code += keys["d"];
    // console.log(code);
    player.keypress(code);
    player.tick();
}
function ticky() {
    press(player);
    document.getElementById("pl").style.paddingLeft = 100*player.x + "vw";
    document.getElementById("pl").style.paddingTop = 100*player.y + "vh";
}
var intervalId = window.setInterval(function() {
    ticky();
}, TICK);