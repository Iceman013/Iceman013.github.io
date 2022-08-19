function act() {
    var body = document.body;
    if (body.value == undefined) {
        body.value = 0;
    } else {
        body.value++;
    }

    function change() {
        var body = document.body;
        body.style.backgroundColor = "#0000ff";
    }
    function nope() {
        var body = document.body;
        body.style.backgroundColor = "initial";
    }

    if (body.value%2 == 0) {
        console.log("On");
        change();
    } else {
        console.log("Off");
        nope();
    }
}